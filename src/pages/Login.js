import React from 'react';
import './Login.css'

function Login() {
  return (
    <>
    <div className='loginPage'>

        <div className="mainLoginBox">
        <div className="loginContainer">
            <div className="loginHeader">
                Login
            </div>
            <input type="text" placeholder='Username' className='input inputUsername'/>
            <input type="password" name="userPassword" className='input inputPassword' id="userPassword" placeholder='Password' />
            <button>Log in</button>
        </div>
        <div className="or">Or</div>

        <div className="signupContainer">
            <div className="signupHeader">
                Signup
            </div>
            <input type="text" className='input inputUsername' placeholder='Username'/>
            <input type='email' className='input inputEmail' placeholder='Email'/>
            <input type="password" className='input inputPassword' name="userPassword" id="userPassword" placeholder='Password' />
            <button>Log in</button>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Login