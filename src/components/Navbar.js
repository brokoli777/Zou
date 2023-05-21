import React from 'react';
import './Navbar.css';
import profileImg from './Assets/ProfileImg.jpg'
import youtubeLogo from './Assets/YoutubeLogo.avif'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css'

//library.add(fab, faCheckSquare, faCoffee)

function Navbar() {
  return (
    <>
        <nav className="navbar ">
            <i className="fa fa-solid fa-bars fa-lg hamburger-menu nav-items"></i>
            <input className="nav-items search-bar" type="text" placeholder='Search '/>
            <img className= "pfpImage nav-items"src={profileImg} alt="" />
        </nav>
    </>
  )
}

export default Navbar