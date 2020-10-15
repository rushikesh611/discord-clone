import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAroBkpuWtEwZXXJc2YIhQLvZsskSWTHwE",
    authDomain: "discord-clone-a9025.firebaseapp.com",
    databaseURL: "https://discord-clone-a9025.firebaseio.com",
    projectId: "discord-clone-a9025",
    storageBucket: "discord-clone-a9025.appspot.com",
    messagingSenderId: "413420278814",
    appId: "1:413420278814:web:5255c66daf22f6050d4a0f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;