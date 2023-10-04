import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  // apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
  // authDomain: "the-net-ninja-sandbox.firebaseapp.com",
  // databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
  // projectId: "the-net-ninja-sandbox",
  // storageBucket: "the-net-ninja-sandbox.appspot.com",
  // messagingSenderId: "485942827092",
  // appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
  apiKey: "AIzaSyAJqaT3BgU5dtIHgVoBceE6oOieQ1wDEMs",
  authDomain: "ninja-firegram-621e7.firebaseapp.com",
  projectId: "ninja-firegram-621e7",
  storageBucket: "ninja-firegram-621e7.appspot.com",
  messagingSenderId: "1064859978397",
  appId: "1:1064859978397:web:bce4ee70ab3167d8f42274"
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAJqaT3BgU5dtIHgVoBceE6oOieQ1wDEMs",
//   authDomain: "ninja-firegram-621e7.firebaseapp.com",
//   projectId: "ninja-firegram-621e7",
//   storageBucket: "ninja-firegram-621e7.appspot.com",
//   messagingSenderId: "1064859978397",
//   appId: "1:1064859978397:web:bce4ee70ab3167d8f42274"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };