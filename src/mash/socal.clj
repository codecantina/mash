(ns mash.socal
  (:require
            [mash.enlive :as enlive-utils])
    )


(defn page [] (enlive-utils/render-to-response
                         (enlive-utils/template {:message "SO-CAL!"})))



