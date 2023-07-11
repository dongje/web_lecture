import React from 'react';
import styles from './login.module.css'
import firebaseui from 'firebaseui';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth , GoogleAuthProvider , signInWithPopup,signInWithRedirect , getRedirectResult} from 'firebase/auth';


function Login(props) {

    const firebaseConfig = {
        apiKey: "AIzaSyAGSUYrl-_tEaU37Xdp65PuMOo_hYBjYi4",
        authDomain: "business-card-maker-28326.firebaseapp.com",
        projectId: "business-card-maker-28326",
        storageBucket: "business-card-maker-28326.appspot.com",
        messagingSenderId: "541680216188",
        appId: "1:541680216188:web:cefe5457d9999157d881f9",
        measurementId: "G-V7F1SEB97P"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);


      const logingoogle = () => {
          console.log('login google');
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithRedirect(auth, provider)
        .then(
        getRedirectResult(auth)
        .then((result) => {
            console.log('login complete');
            
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        }));


      }


    return (
        <div className={styles.background}>
            <div className={styles.door}>
                <h1 style={{color:"white",top:"10%",position:"relative"}}>Business Card Maker</h1>
                <div className={styles.login}>
                    <h1>Login</h1>
                    <button className={styles.loginbtn}><p style={{fontSize:"20px"}} onClick={logingoogle}>Google</p></button>
                    <button className={styles.loginbtn}><p style={{fontSize:"20px"}}>Github</p></button>
                </div>
                <h4 style={{color:"white",position:"relative",bottom:"-60px"}}>code your dream</h4>
            </div>
        </div>
    );
}

export default Login;