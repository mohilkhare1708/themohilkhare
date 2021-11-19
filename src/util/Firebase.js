import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGsrnY-wx2VhbmDy44bxzvI-uqnt-cy0I",
  authDomain: "themohilkhare-c041a.firebaseapp.com",
  projectId: "themohilkhare-c041a",
  storageBucket: "themohilkhare-c041a.appspot.com",
  messagingSenderId: "125991953886",
  appId: "1:125991953886:web:5d35091623a889252ca94f"
})

const db = firebaseApp.firestore();

export { db };