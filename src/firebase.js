// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCnoh2u6I_onUZzQRuCXHW6DPJfVFUQqn8",
	authDomain: "eth-portfolio-analysis.firebaseapp.com",
	projectId: "eth-portfolio-analysis",
	storageBucket: "eth-portfolio-analysis.appspot.com",
	messagingSenderId: "1027408966764",
	appId: "1:1027408966764:web:fd6f677410c15b5080d449",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
