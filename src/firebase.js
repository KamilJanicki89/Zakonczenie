
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyAkhxWy2Yzy7CIo22UD6L4dXi-JXWmUeI8",
    authDomain: "czat-crypto.firebaseapp.com",
    projectId: "czat-crypto",
    storageBucket: "czat-crypto.appspot.com",
    messagingSenderId: "1012850135877",
    appId: "1:1012850135877:web:637ae9f6ab0566c676e42c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();