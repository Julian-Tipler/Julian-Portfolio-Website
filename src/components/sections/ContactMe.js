import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [email, setEmail] = useState({
    name: "",
    address: "",
    message: ""
  });
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e, state, setState) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  function sendEmail(e) {
    e.preventDefault();
    setEmailSent("sending");
    emailjs
      .sendForm(
        "service_w6igvfk",
        "contact_form",
        e.target,
        "user_p0OijmXOMzDtOf8rMKWjR"
      )
      .then(
        (result) => {
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      {emailSent === true ? (
        <div>
          Thank you for your interest! I will do my best to reply to you within
          1-2 days.
        </div>
      ) : (
        <div className='form-one-level-up'>
          <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input
              onChange={(e) => handleChange(e, email, setEmail)}
              className="email-form-name"
              type="text"
              value={email.name}
              name="name"
            />
            <label>Email Address</label>
            <input
              onChange={(e) => handleChange(e, email, setEmail)}
              className="email-form-address"
              type="text"
              value={email.address}
              name="address"
            />
            <label>Message</label>
            <textarea
              onChange={(e) => handleChange(e, email, setEmail)}
              className="email-form-message"
              value={email.message}
              name="message"
            />
            <input type="submit" value="Send" />
          </form>
          {emailSent === "sending" && <div>sending...</div>}
        </div>
      )}
    </>
  );
}
