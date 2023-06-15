import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD15xx-WczyE29Ggnqi3cjyg9OKIZk_0gg",
  authDomain: "afetstok-4aa80.firebaseapp.com",
  projectId: "afetstok-4aa80",
  storageBucket: "afetstok-4aa80.appspot.com",
  messagingSenderId: "325797761358",
  appId: "1:325797761358:web:7cb8673b6860848652ce1f"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);