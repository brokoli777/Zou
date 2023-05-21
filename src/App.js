import './App.css';
import React, { useState } from "react";
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';

function App() {

  const [menuCollapse, setMenuCollapse] = useState(false)
    const menuClick = () =>{
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    }

  return (
  
    <div className="App">
      <Navbar className="navbar"/>
      <SideMenu/>
    </div>
    

  );
}

export default App;
