import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvE_b5L8LuIPvICVOvDlWrd2knE8OII_I",
  authDomain: "slack-clone-543b3.firebaseapp.com",
  databaseURL: "https://slack-clone-543b3.firebaseio.com",
  projectId: "slack-clone-543b3",
  storageBucket: "slack-clone-543b3.appspot.com",
  messagingSenderId: "676742859458",
  appId: "1:676742859458:web:90ef0697c84f41f45a895b",
  measurementId: "G-2MGBM6ZC9D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
