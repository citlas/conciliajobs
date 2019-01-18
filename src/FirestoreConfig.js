import firebase from 'firebase/app'
import 'firebase/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyA8D3rFLbmck-IFjIpB3kB4CA531Wpo06Y",
    authDomain: "concilia-3e496.firebaseapp.com",
    databaseURL: "https://concilia-3e496.firebaseio.com",
    projectId: "concilia-3e496",
    storageBucket: "concilia-3e496.appspot.com",
    messagingSenderId: "930620791774", 
});

let db = firebase.firestore();
db.settings({timestampsInSnapshots: true});
export default db;


   
 