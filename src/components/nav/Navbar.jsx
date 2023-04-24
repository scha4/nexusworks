import react from "react";
import Menu from "./Hamburger";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src="./photos/logo2trans.jpg" className="logo" width="290px" />
        </a>
      </div>
      <div className="section">
        <h3 className="home">
          <a href="#">HOME</a>
        </h3>
        <h3 className="aboutUs">
          <a href="#">ABOUT US</a>
        </h3>
        <button className="button">GET A FREE QUOTE </button>
      </div>
      <Menu />
    </div>
  );
}
