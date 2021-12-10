import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import firebase from "firebase/compat";

export default function Login(props) {
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleLogIn(email, password) {
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            setLoginError(errorMessage);
        });
    }

    return (
        <div>
            <div className = "login-title">
                <h1>Log In</h1>
                </div>

            <div className = "login-details">
                <h3>Email Address</h3>
                <input type='text' name={'username'} onChange={handleEmail} className="usernameInput"/>
                <h3>Password</h3>
                <input type='text' name={'password'} onChange={handlePassword} className="passwordInput"/>
            </div>

            <div className = "login-buttons">
                <button aria-label="Click to login" className="login-button" onClick={() => handleLogIn(email, password)}>Log In</button>
                <button aria-label="Click to Sign up" className="signup-button" onClick={props.signup}>Sign Up</button>
            </div>
                {loginError !== "" && <p>{loginError}</p> }
        </div>
    )
}
