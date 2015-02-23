(ns mash.rsstools
  (:require
   [feedparser-clj.core :as rss]
   [mash.enlive :as enlive-utils]
   ))




(defn page [] (enlive-utils/render-to-response
                         (enlive-utils/template {:message (rss/parse-feed "http://feeds.wired.com/wired/index")})))






;;---------------------------------------------------------------------
;; page

;;(defn page []
  ;;{:status 200
   ;;:headers {"Content-Type" "application/edn"}
   ;;:headers {"Content-Type" "text/plain"}
   ;;:body (pr-str (rss/parse-feed "http://feeds.wired.com/wired/index"))
   ;;})


