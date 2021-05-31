import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEJu0QFKO4Qo2RvcAqpBnmvsftyyrYJPA",
    authDomain: "twitter-react-clone-afe5b.firebaseapp.com",
    projectId: "twitter-react-clone-afe5b",
    storageBucket: "twitter-react-clone-afe5b.appspot.com",
    messagingSenderId: "932886105406",
    appId: "1:932886105406:web:28f0aea5738fd8359ef06f",
    measurementId: "G-K5K2Q78Q6J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;