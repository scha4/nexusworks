import Navbar from "./components/nav/Navbar";

import "./App.css";
import "./slider.css";
import "./formpage.css";

import "./components/nav/hamburger.css";

import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactPage />} />
      </Routes>
    </>
  );
}
