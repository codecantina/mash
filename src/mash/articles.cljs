(ns mash.articles
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  )


(enable-console-print!)


;;(.write js/document "<h1>News Articles</h1>")


(defonce app-state
  (atom
    {:articles
     [{:image "http://www.wired.com/wp-content/uploads/2015/02/editorsletter-ft1-660x352.jpg" :article-text "Spring evenings in New York City can be magic. Sometimes a lingering winter chill will settle in just after dark, but I remember one Tuesday in April1 2010 as particularly spectacular: The air was cool instead of cold, carrying the first hint of a thaw, and it was crystalline—the better to watch the sun set..." }
      {:image "http://www.wired.com/wp-content/uploads/2015/02/chair-assembly-ft-660x372.jpg" :article-text "It took this chair 7 hours to fully assemble itself. Not lightning fast, but an impressive starting point." }]}))


(defn display [{:keys [image article-text] :as contact}]
  ;;(str image " " article-text ))
  article-text )

(defn article-view [article owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil (display article))
            )))



(defn articles-view [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h2 nil "News Articles")
        (dom/p nil "Trending and curated news.")


        ;;(dom/img nil (:src "http://www.wired.com/wp-content/uploads/2015/02/chair-assembly-ft-660x372.jpg") (:alt "image!"))

        (apply dom/ul nil
          (om/build-all article-view (:articles data))
               )))))


(om/root articles-view app-state
  {:target (. js/document (getElementById "app"))})

