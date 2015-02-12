(ns clojure-getting-started.web

  (:use
        [hiccup.middleware :only (wrap-base-url)])

  (:require
            [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]

            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :refer [resource-response response]]
            [environ.core :refer [env]]
            [clojure-getting-started.tools]

            [hiccup.middleware :only (wrap-base-url)]
            ))


(defroutes main-routes
  ;; Serve from resources/public/index.html as default welcome page
  (GET  "/" [] (resource-response "index.html" {:root "public"}))
  ;; Serve any other files from resources/public/
  (route/resources "/")
  ;;page not found
  (route/not-found "Page not found"))


(def app-routes
  (-> (handler/site main-routes)
      (wrap-base-url)))


(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app-routes) {:port port :join? false})))


