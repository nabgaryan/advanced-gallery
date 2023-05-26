// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAmDDv9AnG3tBWUmL4TbXPuoSFrA9rZ9A",
  authDomain: "image-gallery-82e2b.firebaseapp.com",
  projectId: "image-gallery-82e2b",
  storageBucket: "image-gallery-82e2b.appspot.com",
  messagingSenderId: "636624541785",
  appId: "1:636624541785:web:5b55759646a279f18e7948",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
console.log(projectFirestore);

export { projectFirestore, projectStorage };
