import {initializeApp, getApp, getApps} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCT0OSIW-P1B9J_6Pq36U2W3HAZGeTKqmI",
  authDomain: "instagram-clone-c29c3.firebaseapp.com",
  databaseURL: "https://instagram-clone-c29c3-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-c29c3",
  storageBucket: "instagram-clone-c29c3.appspot.com",
  messagingSenderId: "855356933211",
  appId: "1:855356933211:web:422881a760872166d42b7e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage };
