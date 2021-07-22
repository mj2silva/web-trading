import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBe7JNYwI5aYpyCEj4eVfGRxpfydcp16mI',
  authDomain: 'trading-para-ti.firebaseapp.com',
  projectId: 'trading-para-ti',
  storageBucket: 'trading-para-ti.appspot.com',
  messagingSenderId: '200775059157',
  appId: '1:200775059157:web:46da461506b7a4facbc45c',
  measurementId: 'G-RZMRRK2QR9',
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const getCredentialWithEmailAndPassword = firebase.auth.EmailAuthProvider;
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const getServerTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const { STATE_CHANGED } = firebase.storage.TaskEvent;
