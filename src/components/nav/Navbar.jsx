import { Link } from "react-router-dom";
import Menu from "./Hamburger";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/Home">
          <img src="./photos/logo2trans.jpg" className="logo" width="290px" />
        </Link>
      </div>
      <div className="section">
        <h3 className="home">
          <Link to="/Home">HOME</Link>
        </h3>
        <h3 className="aboutUs">
          <Link to="/AboutUs">ABOUT US</Link>
        </h3>
        <Link to="/ContactUs">
          <button className="button">GET A FREE QUOTE </button>
        </Link>
      </div>
      <Menu />
    </div>
  );
}
