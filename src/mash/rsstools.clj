(ns mash.rsstools
  (:require
   [feedparser-clj.core :as rss]
   [mash.enlive :as enlive-utils]
   ))

(defn rsspage []
    (str
      "<br/><br/>"
      "<h3>Reading an RSS Feed: (WIRED RSS)</h3>"
      "<br/><br/>"
      (rss/parse-feed "http://feeds.wired.com/wired/index")


    )
  )


(defn page [] (enlive-utils/render-to-response
                         (enlive-utils/template {:message (rsspage) })))



