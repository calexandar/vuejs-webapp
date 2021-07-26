import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDpucCNDFTgH_k2AFmNXSgkY2fKjzpPZSQ",
    authDomain: "fireblogsyt-e2e4d.firebaseapp.com",
    projectId: "fireblogsyt-e2e4d",
    storageBucket: "fireblogsyt-e2e4d.appspot.com",
    messagingSenderId: "704669105117",
    appId: "1:704669105117:web:5a7aebd25554785d81d434"
  };


 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 export {timestamp};
 export default firebaseApp.firestore();