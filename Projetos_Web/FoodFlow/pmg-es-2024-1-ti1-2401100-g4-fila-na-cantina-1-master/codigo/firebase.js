import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDo9PCCesP8wXqlAPR93ujlrAmAyqNbJc",
  authDomain: "food-flow-358b7.firebaseapp.com",
  databaseURL: "https://food-flow-358b7-default-rtdb.firebaseio.com",
  projectId: "food-flow-358b7",
  storageBucket: "food-flow-358b7.appspot.com",
  messagingSenderId: "624444716595",
  appId: "1:624444716595:web:1d7a1a9fa73e74d2925546",
  measurementId: "G-VD68EG5F5W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database, createUserWithEmailAndPassword, ref, set, signInWithEmailAndPassword, sendPasswordResetEmail };