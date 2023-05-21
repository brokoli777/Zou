import React from 'react';
import './Navbar.css';
import profileImg from './Assets/ProfileImg.jpg'
import youtubeLogo from './Assets/YoutubeLogo.avif'
import 'font-awesome/css/font-awesome.min.css'

function Navbar() {

    
    
  return (
    <>
        <nav className="navbar ">
            <i className="fa fa-solid fa-bars fa-lg hamburger-menu nav-items" ></i>
            <input className="nav-items search-bar" type="text" placeholder='Search '/>
            <img className= "pfpImage nav-items"src={profileImg} alt="" />
        </nav>
    </>
  )
}

export default Navbar