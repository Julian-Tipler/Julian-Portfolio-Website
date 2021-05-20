import React, { useState } from "react";
import emailjs from 'emailjs'

export default function ContactMe() {
  const [email, setEmail] = useState({
    subject: "",
    message: "",
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
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Subject</label>
        <input
          onChange={handleChange}
          lassName="email-form-subject"
          type="text"
          value={email.subject}
          name="subject"
        />
        <label>Message</label>
        <textarea
          onChange={handleChange}
          className="email-form-message"
          value={email.message}
          name="message"
        />
        <input type="submit" value="Send" />
      </form>
      {emailSent === "sending" ? <div>sending...</div> : undefined}
      {emailSent === true && (
        <div>
          Thank you for your interest! I will do my best to reply to you within
          1-2 days.
        </div>
      )}
    </div>
  );
}
