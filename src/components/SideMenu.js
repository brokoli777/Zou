// import React from 'react'
import React, { useState } from "react";
//import "react-pro-sidebar/dist/css/styles.css";
import './SideMenu.css'
import { AiFillHome, AiOutlineMenu, AiFillFire, AiFillLike } from "react-icons/ai";
import { BsFillCollectionPlayFill  } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

  //import icons from react icons

function SideMenu() {

 
  return (
    <div className="menu-body">
      {/* <Sidebar collapsed={menuCollapse}>
          <div className="menuIcon"><AiOutlineMenu/></div>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Subscriptions</MenuItem>
            <MenuItem>Liked Videos</MenuItem>
            <MenuItem>Settings</MenuItem>
          </Menu>
      </Sidebar>; */}
      <ul>
        <div className="side-menu-items"><AiFillHome/><span className="menu-text">Home</span></div>
        <div className="side-menu-items"><AiFillFire /><span className="menu-text">Trending</span></div>
        <div className="side-menu-items"><BsFillCollectionPlayFill/><span className="menu-text">Subscriptions</span></div>
        <div className="side-menu-items"><AiFillLike /><span className="menu-text">Liked Videos</span></div>
        <div className="side-menu-items"><IoSettingsSharp /><span className="menu-text">Settings</span></div>
      </ul>
    </div>
  )
}

export default SideMenu