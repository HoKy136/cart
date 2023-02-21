// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhhTatot3Thw2PqCU7UwEl7nv_Pq2c5VI",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH,
  projectId: "shoppingcart-136",
  storageBucket: "shoppingcart-136.appspot.com",
  messagingSenderId: "322116398796",
  appId: "1:322116398796:web:b7c211324e69f301155c69"
};

// Initialize Firebase
 const AppFb = initializeApp(firebaseConfig);
export const database = getDatabase(AppFb);
export const auth = getAuth(AppFb);
// export default AppFb.database().ref();