(defproject mash "1.0.0-SNAPSHOT"
  :description "Demo Clojure web app"
  :url "http://clojure-getting-started.herokuapp.com"
  :license {:name "Eclipse Public License v1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]

                 [ring/ring-jetty-adapter "1.2.2"]
                 [ring/ring-core "1.3.2"]

                 [environ "0.5.0"]
                 [clojure-opennlp "0.3.3"]

                 [org.clojure/clojurescript "0.0-2725"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.8.4"]

                 [hiccup "1.0.5"]
                 [org.clojars.scsibug/feedparser-clj "0.4.0"]]

  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.2.1"]
            [lein-ring "0.8.12"]
            [lein-cljsbuild "1.0.4"]]

  :source-paths ["src" "target/classes"]

  :ring {:handler mash.web/app}


  :hooks [environ.leiningen.hooks]
  :uberjar-name "mash-standalone.jar"
  :profiles {:production {:env {:production true}}}

  :cljsbuild {
    :builds [{:id "src-js"
              :source-paths ["src"]
              :compiler {
                :output-to "resources/public/out/main.js"
                :output-dir "resources/public/out/"
                :optimizations :whitespace
                :pretty-print true
                         }}]})


