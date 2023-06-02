import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/Config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const useFirestore = (collect) => {
  const [docs, setDocs] = useState([]);

  const docRef = query(
    collection(projectFirestore, collect),
    orderBy("createdAt", "desc")
  );

  useEffect(() => {
    let unsub;
    const getTheDocuments = async () => {
       unsub = onSnapshot(docRef, (snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({
            ...doc.data(),
            id: doc.id,
          });
          setDocs(documents);
        });
      });
    };

    getTheDocuments();
    return () => unsub();
  }, [docRef]);
  return { docs };
};

export default useFirestore;
