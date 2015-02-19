(ns mash.rsstools
  (:require
   [feedparser-clj.core :as rss]
   ))



;;---------------------------------------------------------------------
;; page

(defn page []
  {:status 200
   ;;:headers {"Content-Type" "application/edn"}
   :headers {"Content-Type" "text/plain"}
   :body (pr-str (rss/parse-feed "http://feeds.wired.com/wired/index"))
   })
