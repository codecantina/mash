(ns mash.synsets
  (:require
            [mash.enlive :as enlive-utils])
    )


(defn page [] (enlive-utils/render-to-response
                         (enlive-utils/template {:message "Synsets!"})))


