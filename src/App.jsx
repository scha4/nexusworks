import Navbar from "./components/nav/Navbar";
import Body from "./components/Body";
import "./App.css";
import "./slider.css";
import ContactForm from "./components/Form";
import About from "./components/About";
import "./components/nav/hamburger.css";
import TestimonialSlider from "./components/Slider";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />

      <Body />
      <About />
      <TestimonialSlider />

      <ContactForm />

      <Contact />
    </div>
  );
}
