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
            [environ.core :refer [env]]
            [clojure-getting-started.tools]
            [clojure-getting-started.splash]
            [hiccup
              [page :refer [html5]]
              [page :refer [include-js]]]
            [hiccup.middleware :only (wrap-base-url)]
            ))



(defn index-page []
  (html5
    [:head
      [:title "Hello World"]
      (include-js "js/main.js")]
    [:body
      [:h1 "Hello from newsmash!"]]))



(defroutes app-routes
  (GET "/" []
       (index-page))

  (GET "/tools" []
       (tools))
  )



(defroutes main-routes
  (GET "/" [] (index-page))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app-routes
  (-> (handler/site main-routes)
      (wrap-base-url)))




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
