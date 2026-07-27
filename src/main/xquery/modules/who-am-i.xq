xquery version "3.1";

(:~
 : This action returns the information about the currently logged in user.
 :
 : @author Loren Cahlander
 :)

import module namespace sm = "http://exist-db.org/xquery/securitymanager";
declare namespace request="http://exist-db.org/xquery/request";

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace map= "http://www.w3.org/2005/xpath-functions/map";

declare option output:method "json";
declare option output:media-type "application/json";

let $names := map {
	"http://axschema.org/contact/email": "email",
	"http://axschema.org/pref/language": "language",
	"http://exist-db.org/security/description": "description",
	"http://axschema.org/contact/country/home": "country",
	"http://axschema.org/namePerson": "name",
	"http://axschema.org/namePerson/first": "firstname",
	"http://axschema.org/namePerson/friendly": "friendly",
	"http://axschema.org/namePerson/last": "lastname",
	"http://axschema.org/pref/timezone": "timezone"
}

let $id := sm:id()
let $base := ($id//sm:effective, $id//sm:real)[1]
let $tuser := request:get-parameter("user", ())
let $logout := request:get-parameter("logout", "") = "true"

let $user := $base/sm:username/text()
let $groups := $base//sm:group/text()
let $properties := 
	for $key in sm:get-account-metadata-keys()
	let $mapped-key := (map:get($names, $key), fn:tokenize($key, "/")[last()])[1]
	return if (fn:exists(sm:get-account-metadata($user, $key))) then map { $mapped-key : sm:get-account-metadata($user, $key) } else ()
return
    if ($logout)
    then map {
        "id" : "guest",
        "groups" : array {},
        "logout" : fn:true()
    }
    else map:merge((
        if ($tuser and ($tuser ne $user)) then map { "error" : fn:true() } else (),
        map {
            "id" : $user,
            "groups" : array {
	        	for $group in  $groups
	        	let $name-map := map { "id" : $group }
	        	let $properties :=
	        		for $key in sm:get-group-metadata-keys()
	            	let $mapped-key := (map:get($names, $key), fn:tokenize($key, "/")[last()])[1]
	        		return if (fn:exists(sm:get-group-metadata($group, $key))) then map { $mapped-key : sm:get-group-metadata($group, $key) } else ()
	        	return  map:merge(($name-map, $properties))
		}
        },
        $properties))
