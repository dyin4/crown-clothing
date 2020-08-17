import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config=
{
  apiKey: "AIzaSyDZSDE4hbsT2kTiwGkXksLHf35VpKi6rYo",
  authDomain: "crown-db-48bd0.firebaseapp.com",
  databaseURL: "https://crown-db-48bd0.firebaseio.com",
  projectId: "crown-db-48bd0",
  storageBucket: "crown-db-48bd0.appspot.com",
  messagingSenderId: "1095502186058",
  appId: "1:1095502186058:web:0d71fd1480d476a61688b3",
  measurementId: "G-GNW00TQHY3"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;