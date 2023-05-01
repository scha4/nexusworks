import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zkm8k2s",
        "template_3am00ie",
        form.current,
        "qVfevDoQknnGtSzIJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("ran");
        }
      );
  };

  return (
    <>
      <div className="free-quote">
        <div className="free-quote-section1">
          <h2>GET A FREE QUOTE</h2>

          <p>
            // At Aequus Worldwide Logistics, Inc., we understand the importance
            of // transparency in pricing. With our no-obligation, free quote,
            you have // the best chance to make informed decisions about your
            freight handling // needs. When looking for a trusted NVOCC and
            import broker to manage // your cargo shipping needs, the dedicated
            professionals at Aequus // Worldwide Logistics, Inc. are your
            preferred transportation partners. // Contact us today to learn more
            and get your free quote. //{" "}
          </p>
        </div>
        <div className="contact-page-container">
          <h1>TELL US WHAT YOU NEED</h1>

          <form ref={form} onSubmit={sendEmail} className="contact-page-form">
            <input
              type="text"
              name="product_name"
              className="enter-product"
              placeholder="Enter Product/Service Name"
              required
            />
            <input
              type="text"
              name="user_name"
              className="enter-name"
              placeholder="Enter Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              className="enter-email"
              placeholder="Enter Your Email"
              required
            />
            <input
              type="tel"
              name="user_number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="enter-number"
              placeholder="Phone/Mobile"
              required
            />

            <textarea
              name="message"
              className="contact-page-message"
              placeholder="Enter Your Message"
              required
            />
            <input
              type="submit"
              value="GET FREE QUOTE"
              className="contact-page-form-submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
