import React from 'react';
import Inner from '../components/Grid';

const Contact = () => {
  
  return (
    <Inner>
      <div style={{margin: 40}}>
      <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>

      <form name="contact" method="POST" netlify="true">
      <input type="hidden" name="contact" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
      </form>
    </div>
    </Inner>
  )
}

export default Contact;