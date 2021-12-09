import React, { useEffect, useState } from 'react';

export default function Login(props) {

    return (
        <div>
            <div className = "title">
                <h1>Log In</h1>
                </div>
            
            <h3>Email Address</h3>
            <input type='text' name={'username'} onChange={} className="usernameInput"/>
            <h3>Password</h3>
            <input type='text' name={'password'} onChange={} className="passwordInput"/>

            <button aria-label="Click to login" className="login-button" onClick={props.onNewTab}>+Log In</button>
            <button aria-label="Click to Sign up" className="signup-button" onClick={props.onNewTab}>SignUp</button>
        </div>
    )
}