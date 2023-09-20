 
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVSxgczVzDmKjjXLxQMDNxYuQN1nKjrGw",
  authDomain: "reat-app-25f12.firebaseapp.com",
  projectId: "reat-app-25f12",
  storageBucket: "reat-app-25f12.appspot.com",
  messagingSenderId: "672116363345",
  appId: "1:672116363345:web:91f9d3cebdd57cbf952870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
