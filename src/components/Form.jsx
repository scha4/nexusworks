import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
        <form ref={form} onSubmit={sendEmail} className="form">
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

          <textarea
            name="message"
            className="enter-message"
            placeholder="Enter Your Message"
            required
          />
          <input type="submit" value="GET FREE QUOTE" className="form-submit" />
        </form>
      </div>
    </>
  );
};

// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     // console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
//     // Here you would typically send the data to a server-side script for processing
//   };

//   return (
//     <div className="free-quote">
//       <div className="free-quote-section1">
//         <h2>GET A FREE QUOTE</h2>
//         <p>
//           At Aequus Worldwide Logistics, Inc., we understand the importance of
//           transparency in pricing. With our no-obligation, free quote, you have
//           the best chance to make informed decisions about your freight handling
//           needs. When looking for a trusted NVOCC and import broker to manage
//           your cargo shipping needs, the dedicated professionals at Aequus
//           Worldwide Logistics, Inc. are your preferred transportation partners.
//           Contact us today to learn more and get your free quote.
//         </p>
//       </div>
//       <form className="form" onSubmit={handleSubmit}>
//         <label htmlFor="name"></label>
//         <input
//           className="enter-name"
//           type="text"
//           id="name"
//           placeholder="Enter Your Name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           required
//         />
//         <label htmlFor="email"></label>
//         <input
//           className="enter-email"
//           type="email"
//           id="email"
//           placeholder="Enter Your Email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           required
//         />
//         <label htmlFor="message"></label>
//         <textarea
//           className="enter-message"
//           id="message"
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//           required
//           placeholder="Enter Your Message"
//         ></textarea>
//         <button type="submit" className="form-submit">
//           GET A QUOTE
//         </button>
//       </form>
//     </div>
//   );
// }

export default ContactForm;