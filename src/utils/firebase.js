// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiBxSBYUqz3vIZCDWDOfLotsMaWwIgCsc",
  authDomain: "netflix-gpt-8bea1.firebaseapp.com",
  projectId: "netflix-gpt-8bea1",
  storageBucket: "netflix-gpt-8bea1.appspot.com",
  messagingSenderId: "766983798813",
  appId: "1:766983798813:web:7ea32c7b100b0d9c2646f4",
  measurementId: "G-70VV062YSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();