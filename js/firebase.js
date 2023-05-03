import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr6aDt0Yvaqa4whswWBpfThSb257nVEpA",
  authDomain: "nytimes-dd655.firebaseapp.com",
  projectId: "nytimes-dd655",
  storageBucket: "nytimes-dd655.appspot.com",
  messagingSenderId: "281579209731",
  appId: "1:281579209731:web:6e878a1414260a1128fa36",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(app);
