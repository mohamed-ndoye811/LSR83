import firebase from "../../_snowpack/pkg/firebase/app.js";

import "../../_snowpack/pkg/firebase/firestore.js";

var firebaseConfig = {
  apiKey: "AIzaSyB-iTs21KY9HM38jj-HJ-BGPVGwTojrpPU",
  authDomain: "lsr8300.firebaseapp.com",
  databaseURL: "https://lsr8300-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lsr8300",
  storageBucket: "lsr8300.appspot.com",
  messagingSenderId: "784956839368",
  appId: "1:784956839368:web:74b893f16c8cfd5cf55cfd",
  measurementId: "G-6LL4GN2J19",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
