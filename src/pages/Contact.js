import React from 'react';

const Contact = () => {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="email" name="email" id="email"/>
        <label for="email">Enter Email</label>
        <br/>
        <textarea id="message"></textarea>
        <label for="message">Enter Message</label>
        <br/>
        <input type="hidden" name="form-name" value="contact"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact;