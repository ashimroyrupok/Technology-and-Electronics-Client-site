// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKM5x4YXIuGkFlzYl4aSEsJjVWyccuvok",
  authDomain: "technology-and-electroni-877f5.firebaseapp.com",
  projectId: "technology-and-electroni-877f5",
  storageBucket: "technology-and-electroni-877f5.appspot.com",
  messagingSenderId: "910630687436",
  appId: "1:910630687436:web:40035fef339a3a5a50e869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth ;