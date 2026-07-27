xquery version "3.1";
(:
 : Module Name: File Upload Module
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
 : Module Overview: This module handles files being uploaded to the server.
 :
 :)
(:~
 : This module handles files being uploaded to the server.
 :
 : @author Loren Cahlander
 : @since May 17, 2019
 : @version 1.0
 :)
import module namespace custom="https://magellanmeta.ai/magellan-glossary/library/custom" at "custom/custom.xqm";
import module namespace functx = "http://www.functx.com";

declare namespace skos="http://www.w3.org/2004/02/skos/core#";
declare namespace skosxl="http://www.w3.org/2008/05/skos#";
declare namespace rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#";
declare namespace request="http://exist-db.org/xquery/request";
declare namespace util="http://exist-db.org/xquery/util";
declare namespace err="http://www.w3.org/2005/xqt-errors";
declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";
declare option output:media-type "application/json";

declare variable $request-filename := request:get-uploaded-file-name("my-attachment");

let $log := util:log("info", "Starting an upload!")
let $max-upload-bytes := 20000000
(: wrapping updates in invoke-function so transaction results are visible to code below :)
let $json-response :=
                map {
                    "results" : 
                            array {
                                if (fn:count($request-filename) eq 0)
                                then 
                                    map {
                                        "responseFilename" : "none", 
                                        "messages" : 
                                            array { 
                                                map { 
                                                    "type" : "error", 
                                                    "message" : "There are no files to process!" 
                                                } 
                                            } 
                                    }
                                else
                                    for $file at $pos in request:get-uploaded-file-data("my-attachment")
                                    let $filename := $request-filename[$pos]
                                    let $is-rdf-filename := fn:ends-with(fn:lower-case($filename), ".rdf")
                                    let $file-string := util:binary-to-string($file)
                                    let $is-too-large := fn:string-length($file-string) gt $max-upload-bytes
                                    let $parsed :=
                                        if ($is-rdf-filename and fn:not($is-too-large))
                                        then
                                            try {
                                                fn:parse-xml($file-string)
                                            } catch * {
                                                ()
                                            }
                                        else ()
                                    let $is-rdf-root := fn:exists($parsed/rdf:RDF)
                                    return
                                        map { 
                                            "responseFilename" : $filename, 
                                             "messages" : array {(
                                                map {
                                                    "type" : "info", 
                                                    "message" : "Processing file " || $filename 
                                                },
                                                if (fn:not($is-rdf-filename))
                                                then map {
                                                    "type" : "error",
                                                    "message" : "Only .rdf files are accepted."
                                                }
                                                else if ($is-too-large)
                                                then map {
                                                    "type" : "error",
                                                    "message" : "Upload exceeds maximum allowed size (20 MB)."
                                                }
                                                else if (fn:not(fn:exists($parsed)))
                                                then map {
                                                    "type" : "error",
                                                    "message" : "Uploaded file is not valid XML."
                                                }
                                                else if (fn:not($is-rdf-root))
                                                then map {
                                                    "type" : "error",
                                                    "message" : "Uploaded XML must have rdf:RDF as the document root."
                                                }
                                                else
                                                    try {
                                                        custom:process-upload($filename, $parsed)
                                                    } catch * {
                                                        map {
                                                            "type" : "error",
                                                            "message" : $err:description
                                                        }
                                                    }
                                            )}
                                        }
                            }
                }

return $json-response
