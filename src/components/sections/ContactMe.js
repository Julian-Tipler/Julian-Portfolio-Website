import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [email, setEmail] = useState({
    name: "",
    email_address: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

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
    console.log(e.target);
    emailjs
      .sendForm(
        // "service_w6igvfk",
        "service_fzglrxk",
        "template_j999mfm",
        form.current,
        // "user_p0OijmXOMzDtOf8rMKWjR"
        "BL4q56RTnt78SIS0x"
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
        <div className="form-one-level-up">
          {emailSent === "sending" ? (
            <div>sending...</div>
          ) : (
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <h6 className="m-0">Name</h6>
              <input
                onChange={(e) => handleChange(e, email, setEmail)}
                className="email-form-name"
                type="text"
                value={email.name}
                name="name"
              />
              <h6 className="m-0">Email Address</h6>
              <input
                onChange={(e) => handleChange(e, email, setEmail)}
                className="email-form-address"
                type="text"
                value={email.address}
                name="email_address"
              />
              <h6 className="m-0">Message</h6>
              <textarea
                style={{ resize: "none" }}
                onChange={(e) => handleChange(e, email, setEmail)}
                className="email-form-message"
                value={email.message}
                name="message"
              />
              <input type="submit" value="Send" />
            </form>
          )}
        </div>
      )}
    </>
  );
}
