import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6jS9btr5j1RfcjT0XOF2Sbq5hfqnMKYs",
    authDomain: "auththentication.firebaseapp.com",
    databaseURL: "https://auththentication.firebaseio.com",
    projectId: "auththentication",
    storageBucket: "auththentication.appspot.com",
    messagingSenderId: "629728093239"
  };
const fire =  firebase.initializeApp(config);

export default fire;