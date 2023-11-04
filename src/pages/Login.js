import React, { useState } from 'react';
import './Login.css'
import axios from "axios"
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import {auth, provider} from "../firebase.js"
import {signInWithPopup} from "firebase/auth"

function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const handleLogin = async(e) =>{
        e.preventDefault()
        dispatch(loginStart())
        const name = username;
        axios.post("/auth/signin", {name, password}).then((res)=>{
            console.log(res.data)
            dispatch(loginSuccess(res.data))
        }).catch((err)=>{
            dispatch(loginFailure())
        })
    }

    const loginWithGoogle = () =>{
        dispatch(loginStart())
        signInWithPopup(auth, provider).then((result)=>{
            axios.post("/auth/google", {
                name:result.user.displayName,
                email:result.user.email,
                img:result.user.photoURL,
            }).then((res)=>{
                dispatch(loginSuccess(res.data))
            })
            console.log(result)
        }).catch((err)=>{
            console.log(err);
            dispatch(loginFailure())
        })
    }

  return (
    <>
    <div className='loginPage'>

        <div className="mainLoginBox">
        <div className="loginContainer">
            <div className="loginHeader">
                Login
            </div>
            <input type="text" placeholder='Username' className='input inputUsername' onChange={e=>setUsername(e.target.value)}/>
            <input type="password" name="userPassword" className='input inputPassword' id="userPassword" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Log in</button>
        </div>
        
        <div className="or">Or</div>

        <button onClick={loginWithGoogle}>Log in with Google</button>

        <div className="or">Or</div>

        <div className="signupContainer">
            <div className="signupHeader">
                Signup
            </div>
            <input type="text" className='input inputUsername' placeholder='Username'onChange={e=>setUsername(e.target.value)}/>
            <input type='email' className='input inputEmail' placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
            <input type="password" className='input inputPassword' name="userPassword" id="userPassword" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
            <button>Log in</button>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Login