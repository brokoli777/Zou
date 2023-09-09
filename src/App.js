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
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import Login from './pages/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
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
