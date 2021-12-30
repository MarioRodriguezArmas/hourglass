import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDUXf15-ndIAJ1PErDnt2uzgOnB0O0hT5o",
  authDomain: "hourglass-gallery.firebaseapp.com",
  projectId: "hourglass-gallery",
  storageBucket: "hourglass-gallery.appspot.com",
  messagingSenderId: "38677207370",
  appId: "1:38677207370:web:b51bb4c80590a67ab109b3",
})

