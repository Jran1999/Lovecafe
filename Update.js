
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  import { getAuth, GoogleAuthProvider, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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

const user = auth.currentUser;

function updateUserProfile(user){
  const username = user.displayName;
  const useremail = user.email;
  const userprofilepic = user.photoURL;
  
  document.getElementById("txt_username").textContent = username;
  documant.getElementById("txt_email").textContent = useremail;
  document.getElementById("img_avatar").src = userprofilepic;
}

onAuthStateChanged(auth, (user) => {
  if(user){
    updateUserProfile(user);
    const uid = user.uid;
    return uid;
  }
  else{
    alert("create account and log in");
  }
});