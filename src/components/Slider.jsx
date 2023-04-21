import React, { useState } from "react";
import { testimonialsData } from "../data";

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const handleNextClick = () => {
    setFadeOut(true); // add fade-out effect
    setTimeout(() => {
      if (currentTestimonial === testimonialsData.length - 1) {
        setCurrentTestimonial(0);
      } else {
        setCurrentTestimonial(currentTestimonial + 1);
      }
      setFadeOut(false); // remove fade-out effect
    }, 500); // delay for fade-out effect
  };

  const handlePrevClick = () => {
    setFadeOut(true); // add fade-out effect
    setTimeout(() => {
      if (currentTestimonial === 0) {
        setCurrentTestimonial(testimonialsData.length - 1);
      } else {
        setCurrentTestimonial(currentTestimonial - 1);
      }
      setFadeOut(false); // remove fade-out effect
    }, 500); // delay for fade-out effect
  };

  return (
    <div className="testimonial-slider">
      <div
        className={`testimonial-content ${fadeOut ? "fade-out" : "fade-in"}`}
      >
        <h2 className="testimonials-heading">CLIENT TESTIMONIALS</h2>
        <img
          className="testimonial-image"
          src={testimonialsData[currentTestimonial].image}
          alt={testimonialsData[currentTestimonial].author}
        />

        <h2 className="testimonial-author">
          {testimonialsData[currentTestimonial].author}
        </h2>
        <p className="testimonial-text">
          "{testimonialsData[currentTestimonial].text}"
        </p>
      </div>
      <div className="testimonial-controls">
        <button className="testimonial-control-prev" onClick={handlePrevClick}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>

        <button className="testimonial-control-next" onClick={handleNextClick}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
