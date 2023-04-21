import react from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img src="./photos/logo2trans.jpg" className="logo" width="290px" />
      </div>
      <div className="section">
        <h3 className="home">HOME</h3>
        <h3 className="aboutUs">ABOUT US</h3>
        <button className="button">GET A FREE QUOTE </button>
      </div>
    </div>
  );
}
