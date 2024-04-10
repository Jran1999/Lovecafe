
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAFcIBaFWL866C0P_NADTfASm_n-3W-4BU",
    authDomain: "love-cafe-ph.firebaseapp.com",
    databaseURL: "https://love-cafe-ph-default-rtdb.firebaseio.com",
    projectId: "love-cafe-ph",
    storageBucket: "love-cafe-ph.appspot.com",
    messagingSenderId: "496884300612",
    appId: "1:496884300612:web:b67661fa9aaebe2f447511",
    measurementId: "G-S01TN8XKLF"
  };
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
  
const btngoogle = document.getElementById("btngoogle");

btngoogle.addEventListener("click", function(){
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.href = "Main.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
})