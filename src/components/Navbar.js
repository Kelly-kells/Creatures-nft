import React, { useState } from "react";
import {  NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false); 

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
        
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item animate__animated animate__delay-2s animate__fadeInLeft">
            <NavLink to="/"
             activeclassName="active" id="nav-links"
             onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li className="nav-item animate__animated  animate__delay-2s animate__fadeInLeft">
            <NavLink to="/summon" 
            activeclassName="active" id="nav-links"
            onClick={handleClick}>
              Summon
            </NavLink>
          </li>
          <li className="nav-item animate__animated animate__delay-2s animate__fadeInLeft">
            <NavLink to="/docs" 
            activeclassName="active" id="nav-links"
            onClick={handleClick}>
              Docs
            </NavLink>
          </li>
          <li className="nav-item animate__animated animate__delay-2s animate__fadeInLeft">
            <NavLink to="/connect" 
            activeclassName="active" id="nav-links"
            onClick={handleClick}>
              Connect
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;