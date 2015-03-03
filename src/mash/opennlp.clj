(ns mash.opennlp
  (:require
        [mash.enlive :as enlive-utils]
           [opennlp.nlp :as nlp]
           [opennlp.treebank :as treebank]
         )
  )


(def get-sentences (nlp/make-sentence-detector "models/en-sent.bin"))
(def tokenize (nlp/make-tokenizer "models/en-token.bin"))
(def detokenize (nlp/make-detokenizer "models/english-detokenizer.xml"))
(def pos-tag (nlp/make-pos-tagger "models/en-pos-maxent.bin"))
(def name-find (nlp/make-name-finder "models/namefind/en-ner-person.bin"))
(def chunker (treebank/make-treebank-chunker "models/en-chunker.bin"))



;; sentences
(defn sen [text]
 (str  (get-sentences text)) )


;; POS
(defn pos [text]
  ( apply str (pos-tag (tokenize text) )) )




;; display the form if no params sent through
(def greeting-form
(str
  " <form action='' method='post'>"
  " Enter some text: <br/><textarea name='text-to-evaluate' cols=80 rows=5></textarea><br/>"
  " <input type='submit' value='Enter text'>"
  " </form>"
))



(defn page
  ([] (enlive-utils/render-to-response
                         (enlive-utils/template {:message greeting-form })))

    ([params]
     (let [{n :text-to-evaluate} params]
     (enlive-utils/render-to-response
                         (enlive-utils/template {:message n } )))
     )
)
