import React, { useState, useEffect  } from "react";
import './Navbar.css';
import profileImg from '../Assets/ProfileImg.jpg'
import 'font-awesome/css/font-awesome.min.css'
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess, logout } from '../redux/userSlice';


//side-menu imports
import { AiFillHome, AiOutlineMenu, AiFillFire, AiFillLike } from "react-icons/ai";
import { BsFillCollectionPlayFill  } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

function Navbar() {

    const [menuCollapse, setMenuCollapse] = useState(true)
    const menuClick = () =>{
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    }

  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser)

  function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  const dispatch = useDispatch()
    
  return (
    <div className="headerContainer">
        <div className="menu-body" style={{width: menuCollapse ? '0px' : '185px'}} > 
        {/* style={{ width: menuCollapse ? window.innerWidth < 600 ? '0':'60px' : '185px',
            transition: 'width 0.3s',
            overflow: 'hidden'}} */}
        
        {/* style={{ width: menuCollapse ? '0px' : '200px', overflow: menuCollapse ? 'hidden' : 'visible'}} */}
                <ul>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <div className="side-menu-items" style={{display: menuCollapse ? 'none' :''}}>
                    <AiFillHome className="side-menu-icons"/>
                    <span className="menu-text"  >Home</span>
                  </div>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <div className="side-menu-items" style={{display: menuCollapse ? 'none':''}}>
                    <AiFillFire className="side-menu-icons"/>
                    <span className="menu-text" >Trending</span>
                  </div>
                </Link>
                <Link to="/subscriptions" style={{textDecoration: 'none'}}>
                  <div className="side-menu-items" style={{display: menuCollapse ? 'none':''}}>
                    <BsFillCollectionPlayFill className="side-menu-icons"/>
                    <span className="menu-text" >Subscriptions</span>
                  </div>
                </Link>
                <Link to="/liked" style={{textDecoration: 'none'}}>
                  <div className="side-menu-items" style={{display: menuCollapse ? 'none':''}}>
                    <AiFillLike className="side-menu-icons"/>
                    <span className="menu-text" >Liked Videos</span>
                  </div>
                </Link>
                <Link to="/settings" style={{textDecoration: 'none'}}>
                  <div className="side-menu-items" style={{display: menuCollapse ? 'none':''}}>
                    <IoSettingsSharp className="side-menu-icons"/>
                    <span className="menu-text" >Settings</span>
                  </div>
                </Link>
            
                </ul>
        </div>
        <nav className="navbar ">
            <div className="fa fa-solid fa-bars fa-lg hamburger-menu nav-items" onClick={menuClick}></div>
            <input className="nav-items search-bar" type="text" placeholder='Search '/>
            <div className="rightSideButtons nav-items">
            
              {!currentUser ? (
                <Link to="/login">
                  <button className="loginButton nav-items">Log In</button>
                </Link>
              ) : (
                <>
                <button className="loginButton nav-items" onClick={()=>{deleteCookie("access_token"); dispatch(logout())}}>Log Out</button>
                <img className="pfpImage" src={profileImg} alt="" />
                
                </>
              )}
  
              {/* <Link to='/login'><button className="loginButton nav-items">Log In</button></Link>
              <img className= "pfpImage "src={profileImg} alt="" /> */}
            </div>
            
        </nav>
        
        <div className="overlay" style={{display: menuCollapse ? 'none':'block'}}></div>
        
    </div>
  )
}

export default Navbar