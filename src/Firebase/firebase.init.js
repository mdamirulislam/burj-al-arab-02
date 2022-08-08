import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase =()=>{
    const app = initializeApp(firebaseConfig);
}

export default initializeFirebase;