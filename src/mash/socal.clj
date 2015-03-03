(ns mash.socal
  (:require
         [mash.enlive :as enlive-utils]
         [mash.sodict :as sodict]
         [mash.opennlp :as opennlp])
    )



(defn SOString [text]

  ( apply str
  (for [n (opennlp/tokenize text)]
          (long (read-string (sodict/SO n) )   ) )
    )
  )


(defn totalSO [text]

  (reduce +
    (for [n (opennlp/tokenize text)]
         (long (read-string (sodict/SO n) )   ) ) )
  )


(defn soscores [text]

    (for [n (opennlp/tokenize text)]
         (str (read-string (sodict/SO n) )  ) )
  )



(defn sentences [text]

    (str


     "<h3>Text to be evaluated:</h3>"
     (str text)

     "<br/><br/>"
     "<h3>Text with SO Weights:</h3>"

    (apply str

        (interpose " "
         ( interleave (opennlp/tokenize text) (soscores text) ))
     )



     "<br/><br/><h3>SO String:</h3> "


     (SOString text)
     "<br/><br/> ------------ "
     "<br/><h3>Overall Total: " (totalSO text) "</h3>"
    )
  )


;; display the form if no params sent through
(def greeting-form
(str
  " <form action='' method='post'>"
  " Enter a sentence to be evaluated: <br/><textarea name='text-to-evaluate' cols=80 rows=5></textarea><br/>"
  " <input type='submit' value='Send'>"
  " </form>"
))


(defn page
  ([] (enlive-utils/render-to-response
                         (enlive-utils/template {:message greeting-form })))

    ([params]
     (let [{text :text-to-evaluate} params]
     (enlive-utils/render-to-response
                         (enlive-utils/template {:message (sentences text) } )))
     )
)



