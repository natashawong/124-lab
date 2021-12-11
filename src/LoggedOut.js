import React, { useState } from 'react';
import firebase from "firebase/compat";
import { userState } from './Constants';

function LogIn(props) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState("");

    function handleLoginEmail(e) {
        setLoginEmail(e.target.value);
    }

    function handleLoginPassword(e) {
        setLoginPassword(e.target.value);
    }

    function handleLogIn() {
        firebase.auth()
        .signInWithEmailAndPassword(loginEmail, loginPassword)
        .then(() => {
            console.log("Successful log in")
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    } 

    return (
        <>
        <div className = "login-title">
            <h1>Log In</h1>
        </div>

        <div className = "login-details">
            <h3>Email Address</h3>
            <input type='text' key="loginEmail" value={loginEmail} onChange={handleLoginEmail} className="usernameInput"/>
            <h3>Password</h3>
            <input type='text' key="loginPassword"  value={loginPassword} onChange={handleLoginPassword} className="passwordInput"/>
        </div>

        <div className = "login-buttons">
            <button aria-label="Click to login" className="login-button" onClick={handleLogIn}>Log In</button>
            <button aria-label="Click to Sign up" className="signup-button" onClick={() => props.changeScreen(userState.signup)}>Sign Up</button>
        </div>
        {error !== "" && <p>{error}</p> }
        </>
    )
}

function SignUp(props) {
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const [error, setError] = useState("");

    function handleSignupEmail(e) {
        setSignupEmail(e.target.value);
    }

    function handleSignupPassword(e) {
        setSignupPassword(e.target.value);
    }

    // const FAKE_EMAIL = 'foo@bar.com';
    // const FAKE_PASSWORD = 'xyzzyxx';

    function handleSignUp() {
        firebase.auth()
        .createUserWithEmailAndPassword(signupEmail, signupPassword)
        .then(() => {
            console.log("Successful sign up")
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    return (
        <>
        <div className = "login-title">
            <h1>Create a new account</h1>
        </div>

        <div className = "login-details">
            <h3>Email Address</h3>
            <input type='text' key="signupEmail" value={signupEmail} onChange={handleSignupEmail} className="usernameInput"/>
            <h3>Password</h3>
            <input type='text' key="signupPassword" value={signupPassword} onChange={handleSignupPassword} className="passwordInput"/>
        </div>

        <div className = "login-buttons">
            <button aria-label="Click to login" className="login-button" onClick={handleSignUp}>Sign Up</button>
            <button aria-label="Click to Sign up" className="signup-button" onClick={() => props.changeScreen(userState.login)}>Log In</button>
        </div>
        {error !== "" && <p>{error}</p> }
        </>
    )    
}


export default function LoggedOut() {
    // TODO: change button UI a bit, error UI, and hide password
    const [LoginOrSignup, setLoginOrSignup] = useState(userState.login);
    return (
        LoginOrSignup === userState.signup ? <SignUp changeScreen={(state) => setLoginOrSignup(state)}/> : <LogIn changeScreen={(state) => setLoginOrSignup(state)}/>
    )
}
