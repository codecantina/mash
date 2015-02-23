(ns mash.enlive
  (:require [net.cgrand.enlive-html :as enlive])
  (:use
   [ring.util.response :only [response file-response]])
  )

;;---------------------------------------
;; Enlive utils:
;; https://github.com/swannodette/enlive-tutorial
;;
;; Takes template.html and inserts content into the div with id #content

;; snippets
;; http://stackoverflow.com/questions/14431404/how-do-i-use-snippets-in-enlive

(enlive/deftemplate template "template.html"
  [ctxt]
  ;;[:div#content] (enlive/content (:message ctxt))

  [:div#content] (enlive/html-content (:message ctxt))
)
(defn render [t]
  (apply str t))

(def render-to-response
     (comp response render))

