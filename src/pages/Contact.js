import React from 'react';
import Inner from '../components/Grid';

const Contact = () => {
  
  return (
    <Inner>
      <div style={{margin: 40}}>
      <form name="contact" method="POST" netlify="true" action="/result">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <input type="hidden" name="form-name" value="contact" />
        <button type="submit">Send</button>
      </form>
    </div>
    </Inner>
  )
}

export default Contact;