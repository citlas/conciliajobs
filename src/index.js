import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import "firebase/firestore";

/*
const config = {
    apiKey: "AIzaSyA8D3rFLbmck-IFjIpB3kB4CA531Wpo06Y",
    authDomain: "concilia-3e496.firebaseapp.com",
    databaseURL: "https://concilia-3e496.firebaseio.com",
    projectId: "concilia-3e496",
    storageBucket: "concilia-3e496.appspot.com",
    messagingSenderId: "930620791774",
    timestampsInSnapshots: true
  };
  firebase.initializeApp(config);
  //const firestore = firebase.firestore();
  //firestore.settings((config))
  */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
