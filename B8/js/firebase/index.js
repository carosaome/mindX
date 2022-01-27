const firebaseConfig = {
  apiKey: "AIzaSyAeB3jPSJT0Kkez1QuSakUjfTNw9BlQ00o",
  authDomain: "ci70-ff6d3.firebaseapp.com",
  projectId: "ci70-ff6d3",
  storageBucket: "ci70-ff6d3.appspot.com",
  messagingSenderId: "538755972330",
  appId: "1:538755972330:web:89b80587fb84998ba4eb93",
  measurementId: "G-NKHSFKS582"
};

const appFb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
