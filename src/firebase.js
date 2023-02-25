import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3j5Ppk5cKnOTBN3Bi7AXQymXXmLKcNTM",
  authDomain: "project-one-49179.firebaseapp.com",
  projectId: "project-one-49179",
  storageBucket: "project-one-49179.appspot.com",
  messagingSenderId: "1067975732303",
  appId: "1:1067975732303:web:fc5abfa4fdb6ac0d2a4e3a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
