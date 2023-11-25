import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Video from './pages/Video.js';
import Login from './pages/Login.js'
import { useSelector } from "react-redux";

function App() {

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
                <Route path="/">
                  <Route index element={<Home type="random"/>} />
                  <Route path="trending" element={<Home type="trending"/>} />
                  <Route path="subscriptions" element={<Home type="sub"/>} />
                  <Route path="login" element={<Login />} />
                  {/* <Route path="video" element={<Video />} /> */}
                  <Route path="video">
                    <Route path=":id" element={<Video />} /> 
                    
                  </Route>
                </Route>
          </Routes>
        {/* <SideMenu/> */}
      </BrowserRouter>
    </div>
    

  );
}

export default App;
