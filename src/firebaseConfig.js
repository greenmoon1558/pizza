import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBjGBT8DvmAWzjS9xwVg3b0Edogh52LK1A",
  authDomain: "dylanroy-firebase.firebaseapp.com",
  databaseURL: "https://dylanroy-firebase.firebaseio.com",
  projectId: "dylanroy-firebase",
  storageBucket: "dylanroy-firebase.appspot.com",
  messagingSenderId: "1094222932192"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')