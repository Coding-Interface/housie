
//import { } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-SERVICE.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";    
import { getAuth,updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

// firebase config & initialize

globalThis.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
globalThis.signInWithEmailAndPassword = signInWithEmailAndPassword;
globalThis.signOut = signOut;


  globalThis.firebaseConfig =  {
    apiKey: "AIzaSyBG89BLDz27kf_3_mfwolx3ZGTbBoYF85w",
    authDomain: "practice-4d678.firebaseapp.com",
    projectId: "practice-4d678",
    storageBucket: "practice-4d678.appspot.com",
    messagingSenderId: "873118001818",
    appId: "1:873118001818:web:035bce48c23ef74b020d23",
    measurementId: "G-7KPGRCVVJD"
  };
  	  // Initialize Firebase
	  globalThis.app = initializeApp(firebaseConfig);
	  globalThis.analytics = getAnalytics(app);
	  globalThis.auth = getAuth();
	  globalThis.updateProfile = updateProfile;
	  

globalThis.actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for
  // this URL must be whitelisted in the Firebase Console.
  url: 'noreply@practice-4d678.firebaseapp.com',
  // This must be true for email link sign-in.
  handleCodeInApp: true,
 
  // FDL custom domain.
  dynamicLinkDomain: 'noreply@practice-4d678.firebaseapp.com',
};

	
globalThis.setRuntime = function (runtime){
	onAuthStateChanged(auth, (user) => {

	  if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		console.log("onAuthStateChanged:: ", user.email)
		

		  const currentUser = auth.currentUser;
		  console.log("current_user", currentUser)
		  if (currentUser !== null) {
			  // The user object has basic properties such as display name, email, etc.
			  const displayName = runtime.globalVars.Name = currentUser.displayName;
			  const email = currentUser.email;
			  const photoURL = currentUser.photoURL;
			  const emailVerified = currentUser.emailVerified;
			  const uid = user.uid;
	}
		runtime.goToLayout("MainLayout")
		// ...
	  } else {
		console.log("User is not signed in.");
		// LoginLayout
		runtime.goToLayout("LoginLayout")

	  }
	});
}
	