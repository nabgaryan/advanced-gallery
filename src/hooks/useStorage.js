import { useEffect, useState } from "react";
import { projectStorage, projectFirestore } from "../firebase/Config";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);


  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const createdAt = serverTimestamp();
          addDoc(collection(projectFirestore, "images"), {
            url: downloadURL,
            createdAt,
          });
          setUrl(downloadURL);
        });
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;