import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBvuM_hx7q0R5jz6P2922vOs7NCxG9kBg4",
  authDomain: "turnout-9778d.firebaseapp.com",
  databaseURL: "https://turnout-9778d.firebaseio.com",
  projectId: "turnout-9778d",
  storageBucket: "",
  messagingSenderId: "688780364181",
  appId: "1:688780364181:web:bf912b838bf83eb4"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const eventsRef = firebase.database().ref().child('events');
