import React from 'react';

const Contact = () => {
  return (
    <div>
      <form netlify>
        <input type="email" name="email" id="email"/>
        <label for="email">Enter Email</label>
        <br/>
        <textarea id="message"></textarea>
        <label for="message">Enter Message</label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact;