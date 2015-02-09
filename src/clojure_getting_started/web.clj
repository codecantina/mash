(ns clojure-getting-started.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [clojure-getting-started.tools]
            [clojure-getting-started.splash]
            ))




(defn hi [request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello Ring! Hi I'm reloadable!"})






(defroutes app-routes
  (GET "/" []
       (splash))

  (GET "/hi" []
       (hi 'hello))

  (GET "/tools" []
       (tools))


  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))




(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app-routes) {:port port :join? false})))







;; Original Ring project - Heroku


;;(defn splash []
;;  {:status 200
;;   :headers {"Content-Type" "text/plain"}
;;   :body (pr-str ["Hello" :from 'newsNLPring])})

;;(defroutes app
;;  (GET "/" []
;;       (splash))
;;  (ANY "*" []
;;       (route/not-found (slurp (io/resource "404.html")))))

;;(defn -main [& [port]]
;;  (let [port (Integer. (or port (env :port) 5000))]
;;    (jetty/run-jetty (site #'app) {:port port :join? false})))


;; For interactive development:
;;(.stop server)
;;(def server (-main))
