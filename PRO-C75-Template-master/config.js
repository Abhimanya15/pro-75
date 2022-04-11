import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAHkjudGNbT8PGwK4IcnHaqDXuJauDPgXo",
  authDomain: "pro-75-73f33.firebaseapp.com",
  databaseURL: "https://pro-75-73f33-default-rtdb.firebaseio.com",
  projectId: "pro-75-73f33",
  storageBucket: "pro-75-73f33.appspot.com",
  messagingSenderId: "66577264135",
  appId: "1:66577264135:web:1e60f0539bd2e21e6984a2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
