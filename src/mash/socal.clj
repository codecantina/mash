(ns mash.socal)


;;---------------------------------------------------------------------
;; page

(defn page []
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (pr-str "socal")
   })
