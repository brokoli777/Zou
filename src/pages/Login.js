import React, { useState } from 'react';
import './Login.css'
import axios from "axios"

function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLogin = async(e) =>{
        e.preventDefault()
        const name = username;
        axios.post("/auth/signin", {name, password}).then((res)=>{
            console.log(res.data)
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