import React, { useState } from "react";
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


//side-menu imports
import { AiFillHome, AiOutlineMenu, AiFillFire, AiFillLike } from "react-icons/ai";
import { BsFillCollectionPlayFill  } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

function Navbar() {

    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuClick = () =>{
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    }
    
  return (
    <div className="headerContainer">
        <div className="menu-body" >
        {/* style={{ width: menuCollapse ? '0px' : '200px', overflow: menuCollapse ? 'hidden' : 'visible'}} */}
                <ul>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <div className="side-menu-items"><AiFillHome className="side-menu-icons"/><span className="menu-text"  style={{display: menuCollapse ? 'none' :''}}>Home</span></div>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}><div className="side-menu-items"><AiFillFire className="side-menu-icons"/><span className="menu-text" style={{display: menuCollapse ? 'none':''}}>Trending</span></div></Link>
                <Link to="/subscriptions" style={{textDecoration: 'none'}}><div className="side-menu-items"><BsFillCollectionPlayFill className="side-menu-icons"/><span className="menu-text" style={{display: menuCollapse ? 'none':''}}>Subscriptions</span></div></Link>
                <Link to="/liked" style={{textDecoration: 'none'}}><div className="side-menu-items"><AiFillLike className="side-menu-icons"/><span className="menu-text" style={{display: menuCollapse ? 'none':''}}>Liked Videos</span></div></Link>
                <Link to="/settings" style={{textDecoration: 'none'}}><div className="side-menu-items"><IoSettingsSharp className="side-menu-icons"/><span className="menu-text" style={{display: menuCollapse ? 'none':''}}>Settings</span></div></Link>
            
                </ul>
        </div>
        <nav className="navbar ">
            <div className="fa fa-solid fa-bars fa-lg hamburger-menu nav-items" onClick={menuClick}></div>
            <input className="nav-items search-bar" type="text" placeholder='Search '/>
            <img className= "pfpImage nav-items"src={profileImg} alt="" />
        </nav>

        
    </div>
  )
}

export default Navbar