import React from 'react'

export default function ContactMe() {
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
      </div>
    );
}
