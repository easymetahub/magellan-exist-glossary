xquery version "3.1";

(:~
 : This action deletes an existing glossary.
 :
 : @custom:query-param glossary The glossary to be deleted.
 :
 : @author Loren Cahlander
 :)

import module namespace config="http://exist-db.org/apps/magellan-glossary/config" at "config.xqm";
import module namespace sm = "http://exist-db.org/xquery/securitymanager";
declare namespace request="http://exist-db.org/xquery/request";
declare namespace xmldb="http://exist-db.org/xquery/xmldb";

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace map= "http://www.w3.org/2005/xpath-functions/map";

declare option output:method "json";
declare option output:media-type "application/json";


let $id := sm:id()
let $base := ($id//sm:effective, $id//sm:real)[1]

let $allowed := fn:exists($base//sm:group[. = ("emh", "dba")])
let $glossary := if (fn:string-length(request:get-parameter('glossary', "")) gt 0)
				 then request:get-parameter('glossary', "") 
				 else ()
let $has-target := fn:exists($glossary)
let $deleted :=
	if ($allowed and $has-target)
	then xmldb:remove($config:data-root || "/" || $glossary)
	else ()
return
	if (fn:not($has-target))
	then map {
		"success" : fn:false(),
		"error" : "missing-glossary",
		"message" : "No glossary id was provided."
	}
	else if (fn:not($allowed))
	then map {
		"success" : fn:false(),
		"error" : "not-authorized",
		"message" : "User is not allowed to delete glossaries."
	}
	else if (fn:exists($deleted))
	then map {
		"success" : fn:true(),
		"glossary" : $glossary
	}
	else map {
		"success" : fn:false(),
		"error" : "delete-failed",
		"message" : "Glossary could not be deleted.",
		"glossary" : $glossary
	}
