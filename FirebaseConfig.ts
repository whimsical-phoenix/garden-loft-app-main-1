// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Required import to use Firebase Authentication
import { getAuth } from "firebase/auth";
//Required import to use Firebase Authentication
import { getFirestore } from "firebase/firestore";
//Required import to use Firebase Analytics
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //please go to .env file and use the tokens there
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

//Needed for Authentication
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
//Needed for Firestore database
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

//Analytics
const analytics = getAnalytics(FIREBASE_APP);