import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyBGNY_hnj-yDucoBJWolX5WgbaAnZOrUAc',
  authDomain: 'authexample-ee1a1.firebaseapp.com',
  databaseURL: 'https://authexample-ee1a1.firebaseio.com',
  projectId: 'authexample-ee1a1',
  storageBucket: '',
  messagingSenderId: '203256370363',
  appId: '1:203256370363:web:c1578905935e6983'
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
