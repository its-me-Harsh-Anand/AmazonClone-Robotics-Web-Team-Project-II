import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Login.css"
import { auth } from './firebase'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = (e) => {
        e.preventDefault()

        //firebase stuff on this function
    }
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            console.log(auth)
        }).catch(error => alert(error.message))
        //firebase stuff on this function
    }
    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt="login amazon logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="post">
                    <label htmlFor="email"><h5>E-mail</h5></label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label htmlFor="password"><h5>Password</h5></label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        className="login__signInButton"
                        type="submit"
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button
                    className="login__registerButton"
                    onClick={register}
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
