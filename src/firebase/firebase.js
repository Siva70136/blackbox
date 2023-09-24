
import firebase from 'firebase/compat/app'; // Instead of 'firebase/app'
import 'firebase/compat/auth'; // Instead of 'firebase/auth'
import 'firebase/compat/database'; // Instead of 'firebase/database'



const firebaseConfig = {
  apiKey: "AIzaSyBp3nLvxlrTjnxs832qqX97Qb4x8Ka5fJs",
  authDomain: "bbai-ddc5b.firebaseapp.com",
  databaseURL: "https://bbai-ddc5b-default-rtdb.firebaseio.com",
  projectId: "bbai-ddc5b",
  storageBucket: "bbai-ddc5b.appspot.com",
  messagingSenderId: "727717796234",
  appId: "1:727717796234:web:865d24695095457961d073",
  measurementId: "G-2C3YY4CG1N"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.database();
