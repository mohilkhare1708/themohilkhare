import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './assets/js/reportWebVitals';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyClbI1YEtz5zULMNbxogc76XEUqn6Ubloc",
  authDomain: "themohilkhare.firebaseapp.com",
  projectId: "themohilkhare",
  storageBucket: "themohilkhare.appspot.com",
  messagingSenderId: "240110105782",
  appId: "1:240110105782:web:1c688eddd1e44bcdf96217",
  measurementId: "G-YX0YKX4Q48"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
