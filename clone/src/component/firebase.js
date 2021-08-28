// import * as firebase from 'firebase'
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyACojU_nJBblDK3M4kUIM9pGTh71YuNjmM",
    authDomain: "clone-6447a.firebaseapp.com",
    projectId: "clone-6447a",
    storageBucket: "clone-6447a.appspot.com",
    messagingSenderId: "5330472054",
    appId: "1:5330472054:web:acd2c5f98058fb80a32357"
  };
// initialize app 
  const app = firebase.initializeApp(firebaseConfig);


// initialize database and authentication
  const db = app.firestore();
  const auth = firebase.auth();


  export { auth }
  // export { db, auth }
