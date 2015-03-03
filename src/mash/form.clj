(ns mash.form
  (:require
        [mash.enlive :as enlive-utils])
  )



(def greeting-form
(str
  " <form action='' method='post'>"
  " Enter some text: <input type='text' name='name'><br/>"
  " <input type='submit' value='Send'>"
  " </form>"
))

(defn page
  ([] (enlive-utils/render-to-response
                         (enlive-utils/template {:message greeting-form })))

    ([params]
     (let [{n :name} params]
     (enlive-utils/render-to-response
                         (enlive-utils/template {:message n } )))

     )
)
