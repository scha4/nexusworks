import React, { useState } from "react";

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
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">GET A FREE QUOTE</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
