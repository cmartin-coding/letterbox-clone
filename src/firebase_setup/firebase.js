// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2WMPOEmOPjcXzRLPbOR61sXuPPQAp3cs",
  authDomain: "letterbox-clone.firebaseapp.com",
  projectId: "letterbox-clone",
  storageBucket: "letterbox-clone.appspot.com",
  messagingSenderId: "880445377238",
  appId: "1:880445377238:web:513824c8391ca781fad777",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
