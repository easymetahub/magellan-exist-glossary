xquery version "3.1";
(:~ The post-install runs after contents are copied to db.
 : It also attempts to seed the IVOAT sample glossary if the app data
 : collection is empty.
 :
 : @version 2.0.1
 :)


declare namespace repo="http://exist-db.org/xquery/repo";
import module namespace console="http://exist-db.org/xquery/console";
import module namespace file="http://exist-db.org/xquery/file";
import module namespace util="http://exist-db.org/xquery/util";
import module namespace config="http://exist-db.org/apps/magellan-glossary/config" at "modules/config.xqm";
import module namespace custom="https://magellanmeta.ai/magellan-glossary/library/custom" at "modules/custom/custom.xqm";
declare namespace env = "http://exist-db.org/data/envelope";

(: The following external variables are set by the repo:deploy function :)

(: file path pointing to the exist installation directory :)
declare variable $home external;
(: path to the directory containing the unpacked .xar package :)
declare variable $dir external;
(: the target collection into which the app is deployed :)
declare variable $target external;

(:~ Helper to log a structured message with the package context. :)
declare function local:log($level as xs:string, $message as xs:string) {
    console:log($level, "[magellan-glossary post-install] " || $message)
};

(:~ Return the first location that exists, or the empty sequence. :)
declare function local:find-ivoat-location() as xs:string? {
    let $candidates := (
        $dir || "/IVOAT.rdf",
        $dir || "/data/IVOAT.rdf",
        $dir || "/resources/data/IVOAT.rdf",
        $target || "/data/IVOAT.rdf",
        $target || "/IVOAT.rdf"
    )
    let $found :=
        for $candidate in $candidates
        return
            if (
                (: filesystem check :)
                (starts-with($candidate, "/") and file:exists($candidate))
                or
                (: db collection check :)
                (starts-with($candidate, "/db") and util:binary-doc-available($candidate))
                or
                (: document node check :)
                (starts-with($candidate, "/db") and doc-available($candidate))
            ) then $candidate
            else ()
    return $found[1]
};

(:~ Import the IVOAT RDF file into the glossary data collection. :)
declare function local:import-ivoat($location as xs:string) as map(*) {
    try {
        let $doc :=
            if (starts-with($location, "/db")) then
                doc($location)
            else
                doc("file://" || $location)
        let $result := custom:process-upload("IVOAT.rdf", $doc)
        return
            map {
                "success": true(),
                "result": $result
            }
    } catch * {
        map {
            "success": false(),
            "error": $err:description,
            "code": $err:code
        }
    }
};

(:~ Main post-install logic :)
let $start := local:log("info", "Post-install started.")
let $_ := local:log("info", "home = " || string($home))
let $_ := local:log("info", "dir = " || string($dir))
let $_ := local:log("info", "target = " || string($target))
let $_ := local:log("info", "config:data-root = " || $config:data-root)

let $existing-glossaries :=
    try { collection($config:data-root)//env:headers/env:glossaryName }
    catch * {
        let $_ := local:log("warn", "Could not enumerate existing glossaries: " || $err:description)
        return ()
    }
let $_ := local:log("info", "Existing glossaries in data-root: " || string-join($existing-glossaries, ", "))

let $location := local:find-ivoat-location()
let $_ :=
    if (empty($location)) then
        local:log("warn", "IVOAT.rdf was NOT found in any expected location. Searched: " ||
            string-join((
                $dir || "/IVOAT.rdf",
                $dir || "/data/IVOAT.rdf",
                $dir || "/resources/data/IVOAT.rdf",
                $target || "/data/IVOAT.rdf",
                $target || "/IVOAT.rdf"
            ), ", "))
    else
        local:log("info", "IVOAT.rdf found at: " || $location)

let $import-result :=
    if (empty($location)) then
        map { "success": false(), "error": "IVOAT.rdf not found in package" }
    else if ($existing-glossaries = "IVOAT") then
        let $_ := local:log("info", "IVOAT glossary already exists; skipping import.")
        return map { "success": true(), "skipped": true() }
    else
        let $_ := local:log("info", "Starting RDF import from " || $location || " ...")
        let $result := local:import-ivoat($location)
        let $_ :=
            if ($result?success) then
                local:log("info", "RDF import succeeded. Details: " || serialize($result?result))
            else
                local:log("error", "RDF import FAILED. Code: " || string($result?code) || "; Message: " || string($result?error))
        return $result

let $_ := local:log("info", "Post-install finished.")

return
    <post-install>
        <home>{string($home)}</home>
        <dir>{string($dir)}</dir>
        <target>{string($target)}</target>
        <ivoat-found>{not(empty($location))}</ivoat-found>
        <ivoat-location>{string($location)}</ivoat-location>
        <import-success>{string($import-result?success)}</import-success>
        <import-skipped>{string($import-result?skipped)}</import-skipped>
        <import-error>{string($import-result?error)}</import-error>
    </post-install>
