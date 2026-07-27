xquery version "3.1";
(:
 : Module Name: Customization Library Module
 :
 : Module Version: 1.0
 :
 : Date: May 17, 2019
 :
 : Copyright (c) 2019. Magellan AI Corporation
 :
 : Proprietary
 : Extensions: eXist-db
 :
 : XQuery
 : Specification March 2017
 :
 : Module Overview: This module is where the customization to the glossary takes place.
 :
 :)
(:~
 : This module is where the customization to the glossary takes place.
 :
 : TODO: Customize for the project
 :
 : @author Loren Cahlander
 : @since May 17, 2019
 : @version 1.0
 :)
module namespace custom="https://magellanmeta.ai/magellan-glossary/library/custom";

import module namespace config="http://exist-db.org/apps/magellan-glossary/config" at "../config.xqm";
import module namespace emhjson="https://magellanmeta.ai/magellan-glossary/library/json" at "../emh-json.xqm";
import module namespace kwic="http://exist-db.org/xquery/kwic";

declare namespace rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#";
declare namespace skos="http://www.w3.org/2004/02/skos/core#";
declare namespace skosxl="http://www.w3.org/2008/05/skos#";
declare namespace rdfs="http://www.w3.org/2000/01/rdf-schema#";
declare namespace dc="http://purl.org/dc/elements/1.1/";
declare namespace env = "http://exist-db.org/data/envelope";

(:~
 : Look up the Concept whose rdf:about value equals the $name parameter.
 :
 : @param $name The value that relates to the rdf:about attribute of a skosxl:Concept
 : @return The skosxl:prefLabel of a skosxl:Concept
 :)
declare function custom:prefLabel($name as xs:string)
{
    collection($config:data-root)//skosxl:Concept[@rdf:about = $name]/skosxl:prefLabel/text()
};

(:~
 : Preload preferred labels for a set of relation resource ids.
 :
 : @param $ids The rdf:about ids to preload.
 : @return A map keyed by rdf:about id with the preferred label text sequence.
 :)
declare function custom:pref-label-map($ids as xs:string*)
as map(*)
{
    let $distinct-ids := fn:distinct-values($ids[fn:string-length(.) gt 0])
    let $concepts := collection($config:data-root)//skosxl:Concept[@rdf:about = $distinct-ids]
    return
        if (fn:empty($distinct-ids))
        then map {}
        else map:merge(
            for $id in $distinct-ids
            return map:entry($id, $concepts[@rdf:about = $id]/skosxl:prefLabel/text())
        )
};

(:~
 : Build the JSON object for one relation entry.
 :)
declare function custom:relation-object($resource as xs:string?, $glossary-facet as xs:string, $label-cache as map(*))
as map(*)
{
    let $pref-label :=
        if (fn:exists($resource))
        then (map:get($label-cache, $resource), custom:prefLabel($resource))[1]
        else ()
    return map {
        'name' : emhjson:concept-value($pref-label),
        'glossary' : $glossary-facet,
        'label' :
            if (fn:exists($pref-label[1]))
            then emhjson:facet-text('Preferred Label', fn:string($pref-label[1]))
            else ()
    }
};

(:~
 : Generates the JSON object for a facet value.
 :
 : @param $facet-name  The name of the facet from the collection.xconf.
 : @param $count       The number of documents that contains the facet value
 : @param $value-name  The thext of the faccet value.
 : @param $qtext       The 'search:qtext' of the search results to find the selected facet value(s)
 : @return The JSON object for creating a facet value entry on the client page
 :)
declare function custom:facet-value($facet-name as xs:string, $count as xs:integer, $value-name as xs:string, $qtext as xs:string*, $label-cache as map(*))
{
    let $facet-text := emhjson:facet-text($facet-name, $value-name)
    let $display-name :=
        if (fn:starts-with($value-name, "#"))
        then (map:get($label-cache, $value-name), custom:prefLabel($value-name))[1]
        else $value-name
    let $selected := if ($qtext = $facet-text)
                     then fn:true()
                     else fn:false()
                     
    return
        if (fn:not($value-name))
        then ()
        else
        map {
            "facet" : $facet-name,
            "value" : $facet-text,
            "name" : $display-name,
            "count" : $count,
            "selected" : $selected 
        }
};

(:~
 : Generates the JSON object for a facet.
 :
 : @param $facet       The facet map from the search results.
 : @param $facet-name  The name of the facet from the collection.xconf.
 : @param $qtext       The 'search:qtext' of the search results to find the selected facet value(s)
 : @return The JSON object for creating a facet entry on the client page
 :)
declare function custom:facet-object($facet as map(*), $facet-name as xs:string, $qtext as xs:string*) 
{
    let $max-values := 10
    let $max-ext-values := 40
    let $names :=
        for $name in map:keys($facet)
        let $count := map:get($facet, $name)
        order by $count descending, $name ascending
        return $name

    let $visible-names := fn:subsequence($names, 1, $max-values + $max-ext-values)
    let $label-cache :=
        custom:pref-label-map(
            for $name in $visible-names[fn:starts-with(., "#")]
            return $name
        )

    let $selected-facet := 
        for $facet in $qtext
        return 
            if (fn:starts-with($facet, $facet-name))
            then $facet
            else ()
        
    return
    map {
        "name" : $facet-name,
        "values" : array {
                for $value in fn:subsequence($visible-names, 1, $max-values)
                return custom:facet-value($facet-name, map:get($facet, $value), $value, $selected-facet, $label-cache)
            },
        "extvalues" : 
            if (fn:count($visible-names) gt $max-values)
            then
                array {
                    for $value in fn:subsequence($visible-names, $max-values + 1, $max-ext-values)
                return custom:facet-value($facet-name, map:get($facet, $value), $value, $selected-facet, $label-cache)
                }
            else ()
    }

};

(:~
 : Generates the JSON object for a result item.
 :
 : @param $result        A 'search:result' object from the search results
 : @param $index         The index of the result object from the search
 : @param $show-snippets A flag for whether to show the snippets.
 : @return The JSON object that represents a result item in the client page
 :)
declare function custom:result-object($result as node(), $index as xs:integer, $show-snippets as xs:boolean)
{
    let $uri := fn:base-uri($result)
    let $concept := $result//skosxl:Concept
    let $glossary-name := $result/env:headers/env:glossaryName/string()
    let $glossary-facet := emhjson:facet-text('Glossary', $glossary-name)
    let $relation-ids := fn:distinct-values((
        $concept/skosxl:related/@rdf:resource/string(),
        $concept/skosxl:broader/@rdf:resource/string(),
        $concept/skosxl:narrower/@rdf:resource/string()
    ))
    let $label-cache := custom:pref-label-map($relation-ids)
    return
        map {
            'index' : $index,
            'concept' : map {
                            'term' : emhjson:concept-value($concept/skosxl:prefLabel),
                            'about' : emhjson:concept-value($concept/@rdf:about),
                            'definition' : array { for $definition in $concept/skosxl:definition return emhjson:concept-value($definition) },
                            'altLabel' : emhjson:concept-value($concept/skosxl:altLabel),
                            'related' : array { 
                                            for $related in $concept/skosxl:related 
                                            return custom:relation-object($related/@rdf:resource/string(), $glossary-facet, $label-cache)
                                        },
                            'broader' : array { 
                                            for $broader in $concept/skosxl:broader
                                            return custom:relation-object($broader/@rdf:resource/string(), $glossary-facet, $label-cache)
                                        },
                            'narrower' : array { 
                                            for $narrower in $concept/skosxl:narrower
                                            return custom:relation-object($narrower/@rdf:resource/string(), $glossary-facet, $label-cache)
                                        }
                        },
            'snippets' : array { 
                if ($show-snippets)
                then
                    for $snippet in kwic:summarize($result, <config width="40"/>)
                    return fn:serialize($snippet)
                else ()
            },
(: This is an example of adding a grid of data to the result item.
            'grid' : map {
                        'columns' : array { ('Header', 'Value') },
                        'rows' : array {
                                    map {
                                        'Header' : 'Header One',
                                        'Value' : 'Value One'
                                    },
                                    map {
                                        'Header' : 'Header Two',
                                        'Value' : 'Value Two'
                                    }
                                 }
                     },
:)
            'uri' : fn:base-uri($result),
            'glossary': $glossary-name,
            'score' : ft:score($result)
        }
};

(:~
 : This function processes the file that was uploaded through the upload dialog.
 :
 :  @param $filename The name of the file that has ben uploaded
 :  @param $file     The file that has been uploaded.
 :  @return An array of JSON objects as { "type": error-type, "message": error-message }
 :)
declare function custom:process-upload($filename as xs:string, $file as node())
as map(*)
{
    let $log := util:log("info", "Processing file: " || $filename)
    let $log2 := util:log("info", "Processing file: " || $file/*/fn:local-name())
    let $glossary := fn:substring-before($filename, ".")
    let $is-glossary := fn:collection($config:data-root)//env:headers[env:glossaryName = $glossary]
    return if ($is-glossary)
    then
        map {
            "type" : "error",
            "message" : fn:concat("Glossary ", $glossary, " already exists")
        }
    else
    let $mkdir := xmldb:create-collection($config:data-root, $glossary)
    let $nodes :=
        for $node at $index in $file//rdf:RDF/*
        let $rdfabout := fn:replace($node/@rdf:about/string(), "#", "")
        let $id := if (fn:string-length($rdfabout) gt 0)
                    then $node/local-name() || "-" || $rdfabout
                    else $node/local-name()
        (: eXist resource names cannot contain URI separators like ':' or '/'. :)
        let $resource-id := fn:replace($id, "[^A-Za-z0-9._-]", "_") || "-" || $index
        let $envelope :=
            element { "env:envelope" } {
                element { "env:headers" } {
                    element { "env:id" } { $id },
                    element { "env:glossaryName" } { $glossary },
                    element { "env:timestamp" } {  fn:current-dateTime() }
                },
                element { "env:instance" } { $node }
            }
        let $stored :=
            xmldb:store($config:data-root || "/" || $glossary, $resource-id || '.xml', $envelope)
        return ()
    return 
        map {
            "type" : "info",
            "message" : fn:concat("File ", $filename, " processed")
        }
};

(:~
 : Returns the list of the names of the facets in collection.xconf for the query.
 :
 : @return The list of the facet names.
 :)
declare function custom:search-options()
as xs:string*
{
    ("Broader", "Narrower", "Related", "Glossary", '"Preferred Label"', '"Alternate Label"')
};

