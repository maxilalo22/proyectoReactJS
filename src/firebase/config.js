import firebase from "firebase/app"
import "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ2zC60kQCFz4biQ14fK_1sO0Mbcd6Dxg",
  authDomain: "react-coder-app-3b824.firebaseapp.com",
  projectId: "react-coder-app-3b824",
  storageBucket: "react-coder-app-3b824.appspot.com",
  messagingSenderId: "144368484307",
  appId: "1:144368484307:web:a89832c1032bde69f8b926"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}