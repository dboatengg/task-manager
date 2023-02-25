import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_REACT_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
//   projectId: process.env.REACT_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyB3j5Ppk5cKnOTBN3Bi7AXQymXXmLKcNTM",
  authDomain: "project-one-49179.firebaseapp.com",
  projectId: "project-one-49179",
  storageBucket: "project-one-49179.appspot.com",
  messagingSenderId: "1067975732303",
  appId: "1:1067975732303:web:fc5abfa4fdb6ac0d2a4e3a",
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
