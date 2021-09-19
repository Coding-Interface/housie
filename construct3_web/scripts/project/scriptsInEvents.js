


const scriptsInEvents = {

		async Es_login_Event1_Act5(runtime, localVars)
		{
			createUserWithEmailAndPassword(globalThis.auth, runtime.globalVars.Email, runtime.globalVars.Password)
				  .then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					console.log(user);
					runtime.callFunction("UpdateUserInfo");
					runtime.goToLayout("MainLayout");	
				  })
				  .catch((error) => {
				  runtime.callFunction("hideLoader")
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log("TYPE OF ERR_MSG:", typeof(errorMessage))
					console.log("Error: "+errorMessage+" Error_Code: "+errorCode)
					
					if(errorCode== "auth/invalid-email"){
					
						runtime.callFunction("InvalidEmailOrPassword", ["Invalid email/password. Try Again!"]);
						
					
					}
					else if(errorCode =="auth/email-already-in-use"){
					
						runtime.callFunction("SignIn");
						
					}
					
				  });
		},

		async Es_login_Event1_Act6(runtime, localVars)
		{
			
		},

		async Es_login_Event6_Act2(runtime, localVars)
		{
			
		},

		async Es_login_Event14_Act1(runtime, localVars)
		{
			console.log("sign in")
			signInWithEmailAndPassword(auth, runtime.globalVars.Email, runtime.globalVars.Password)
			  .then((userCredential) => {
			    // Signed in 
			
				const user = auth.currentUser;
				console.log("current_user", user)
				if (user !== null) {
				  // The user object has basic properties such as display name, email, etc.
				  const displayName = runtime.globalVars.Name = user.displayName;
				  const email = user.email;
				  const photoURL = user.photoURL;
				  const emailVerified = user.emailVerified;
				  const uid = user.uid;
				}
				
				
			
			  })
			  .catch((error) => {
			  runtime.callFunction("hideLoader")
			    const errorCode = error.code;
			    const errorMessage = error.message;
				console.log("Error: "+errorMessage+" Error_Code: "+errorCode)	
				
			  });
			  
		},

		async Es_login_Event15_Act1(runtime, localVars)
		{
			try {
			  const docRef = await addDoc(collection(db, "users"), {
			    name: runtime.globalVars.Name,
			    email: runtime.globalVars.Email
			  });
			
			  console.log("Document written with ID: ", docRef.id);
			} catch (e) {
			  console.error("Error adding document: ", e);
			}
		},

		async Es_login_Event16_Act1(runtime, localVars)
		{
				updateProfile(auth.currentUser, {
				  displayName: runtime.globalVars.Name, photoURL: ""
				}).then(() => {
				 console.log("Profile updated!");
				  // ...
				}).catch((error) => {
				  // An error occurred
				  // ...
				});
		},

		async Es_common_Event1_Act2(runtime, localVars)
		{
			 signOut(auth).then(()=>{ console.log("Signed Out");
			 
			 if(runtime.layout.name== "LoginLayout")
			 runtime.callFunction("hideLoader");
			 else if(runtime.layout.name== "MainLayout"){
			 runtime.goToLayout("LoginLayout");
			 }
			 }
			 )
			 
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

