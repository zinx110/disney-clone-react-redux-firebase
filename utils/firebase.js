import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRzvk0s7EwSw0G2aE5-OX5CnwPHP2gGnI",
  authDomain: "disney-clone-5fae6.firebaseapp.com",
  projectId: "disney-clone-5fae6",
  storageBucket: "disney-clone-5fae6.appspot.com",
  messagingSenderId: "68437011964",
  appId: "1:68437011964:web:65e501555844b5aaded679",
  measurementId: "G-VW30V77S6J",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db;
