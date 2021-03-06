(ns mash.web

  (:use
        [hiccup.middleware :only (wrap-base-url)])



  (:require
            [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]
            [compojure.handler :refer [site]]

            [feedparser-clj.core :as rss]

            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :refer [resource-response response]]

            [environ.core :refer [env]]

            [mash.rsstools :as rsstools]
            [mash.socal :as socal]
            [mash.form :as form]
            [mash.opennlp :as opennlp]
            [mash.sodict :as sodict]

            [hiccup.middleware :only (wrap-base-url)]
            ;;[hiccup.core :refer [html]]

            ))



;;---------------------------------------------------------------------
;; Routes

(defroutes main-routes
  ;; Serve from resources/public/index.html as default welcome page
  (GET  "/" [] (resource-response "index.html" {:root "public"}))
  ;; Serve any other files from resources/public/
  (route/resources "/")

  ;; CLJ Paths
  (GET "/rsstools" [] (rsstools/page))

  (GET "/sodict" [] (sodict/page ))

  (GET "/form" [] (form/page ))
  (POST "/form" {params :params} (form/page params))

  (GET "/opennlp" [] (opennlp/page ))
  (POST "/opennlp" {params :params} (opennlp/page params))

  (GET "/socal" [] (socal/page))
  (POST "/socal" {params :params} (socal/page params))

  ;;page not found
  (route/not-found "Page not found"))


(def app
  (-> (handler/site main-routes)
      (wrap-base-url)))


(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))


;;---------------------------------------------------------------------











