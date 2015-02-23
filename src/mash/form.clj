(ns mash.form
  (:require
        [mash.enlive :as enlive-utils])
  )



(def greeting-form
(str
  " <form action='' method='post'>"
  " Enter your name: <input type='text' name='name'><br/>"
  " <input type='submit' value='Say Hello'>"
  " </form>"
))

(defn page
  ([] (enlive-utils/render-to-response
                         (enlive-utils/template {:message greeting-form })))


  ;;([params] (enlive-utils/render-to-response
  ;;                       (enlive-utils/template {:message  params} )))


;;    ([req] (enlive-utils/render-to-response
;;                         (enlive-utils/template {:message (get-in req [:params "name"]) })))


    ([params]
     (let [{n :name} params]
     (enlive-utils/render-to-response
                         (enlive-utils/template {:message n } )))

     )
)
