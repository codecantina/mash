(ns mash.sodict
  (:require
          [mash.enlive :as enlive-utils]
          [opennlp.nlp :as nlp])
    )

(def tokenize (nlp/make-tokenizer "models/en-token.bin"))



;; read the dictionary
(def dict ( tokenize (slurp "resources/dict/dict.txt") ) )

;; get the semantic orientation for a word from the dictionary

(defn SO
  [word]
      (nth dict (inc ( .indexOf dict word)  ) )

  )



(defn page [] (enlive-utils/render-to-response
                         (enlive-utils/template {:message  (  SO "stud" )  })))


