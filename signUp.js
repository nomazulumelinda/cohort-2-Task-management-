import {firebaseApp, initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from firebase-auth

const firebaseConfig = {
    apikey: "ALzaSyDQmkU7STywHnIFTZK20_s4XIIcfwi4La8",
    authDomain: "plp-cohort-2-web.firebaseapp.com",
    projectId: "plp-cohort-2-web",
    storangeBucket: "plp-cohort-2-web.appspot.com",
    messagingSenderId: "1066601616662",
    appId: "1:1066601616662:web:f13130836fb27d4961ec37",
    measurentId: "G-R5VZ5J19Q"
   
}

const app =  initializeApp(firebaseConfig);
const auth = getAuth();


const emailInput = document.getElementById("email");
const passwordInput = documen.getElementById("password");
const submitInput = documen.getElementById("submit");

const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const confirmSignupPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupButton = document.getElementById("sign-up");
const returnBtn= document.getElementById("return-btn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignupPassword;

createacctbtn.addEventListener("click", () => {
     var isVerified = true;

      signupEmail = signupEmailIn.value;
      confirmSignupEmail = confirmSignupEmailIn.value;
     if (signupEmail != confirmSignupEmail) {
        window.alert("Email field do not match. Try again.");
        isVerified = false;
     }

      signupPassword = signupPasswordIn.value;
      confirmSignupPassword = confirmSignupPasswordIn.value;
     if (signupPassword != confirmSignupPasswordIn) {
        window.alert("Password field do not match. Try again.")
        isVerifiedf = false;
     } 
     
     if (
        signupEmail == null ||
        confirmSignupEmail == null ||
        signupPassword == null ||
        confirmSignupPassword == null
     ) {
        window.alert("Please fill out all required fields.");
        isVerified = false;
     }
}
    );

    if(isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then((userCredentials) => {
       const user = userCredentials.user;
       window.alert("success! Account Created");
       window.location = "./createTask.html";
    })

    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert("Erro occurred. Try Again");
   });

   submitButton.addEventListener("click", function () {
    email = emailInput.value;
    console.log(email);
    password = passwordInput.value;
    console.log(password);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        window.alert("Success! Welcome back!");
        window.location = "./createTask.html";
    })
    .catch((erro) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     window.alert("Erro occurred. Try Again");  
    });
   });
   
signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacct.style.display = "block";
});
    returnBtn.addEventListener("click", function () {
        main.style.display = "block";
        createacct.style.display = "none";
        
} )}
