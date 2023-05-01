import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
    document.querySelector(".hamburger").classList.toggle("active");
  }

  return (
    <div className="hamburger-container">
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={showMenu ? "menu show-menu" : "menu"}>
        <ul className="hamburger-list">
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/AboutUs">ABOUT US</Link>
          </li>
          <li>
            <Link to="/ContactUs">GET A FREE QUOTE</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
