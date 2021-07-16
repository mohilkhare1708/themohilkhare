import firebase from "firebase";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyClbI1YEtz5zULMNbxogc76XEUqn6Ubloc",
  authDomain: "themohilkhare.firebaseapp.com",
  projectId: "themohilkhare",
  storageBucket: "themohilkhare.appspot.com",
  messagingSenderId: "240110105782",
  appId: "1:240110105782:web:1c688eddd1e44bcdf96217",
  measurementId: "G-YX0YKX4Q48",
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();