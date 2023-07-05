import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxREvmKPhW0l6L9rcHhkfeb2IYErAYyX8",
  authDomain: "afetstokfinal.firebaseapp.com",
  projectId: "afetstokfinal",
  storageBucket: "afetstokfinal.appspot.com",
  messagingSenderId: "120354229476",
  appId: "1:120354229476:web:a14d8de8bc485705dab0f1",
  measurementId: "G-FWT0MTCSZ7"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);