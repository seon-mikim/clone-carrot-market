import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDMppopL4tmurcGqzDHLADp1sS0jJZyM6I",
  authDomain: "clone-carrot-market-1.firebaseapp.com",
  databaseURL: "https://clone-carrot-market-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clone-carrot-market-1",
  storageBucket: "clone-carrot-market-1.appspot.com",
  messagingSenderId: "1047224061886",
  appId: "1:1047224061886:web:cadfe88674e9b7447af3ef"
};

const app = initializeApp(firebaseConfig);


const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app)