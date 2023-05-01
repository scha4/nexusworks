import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";
import swal from "sweetalert";

export default function ContactPage() {
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
          swal("Success", "Your Form was successfully sent!", "success");
        },
        (error) => {
          console.log(error.text);
          console.log("ran");
        }
      );
  };

  return (
    <>
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

      <Contact />
    </>
  );
}
