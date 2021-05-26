
import React from 'react';
import Inner from '../components/Grid';
import Hero from '../components/Hero'

const Contact = () => {
  
  return (
      <div className='contact'>
      <Hero
        title="Let's Connect 🤙"
        copy="<p>Feel free to reach out on social or fill out the form below.</p>"
        showSocial={true}
        cta={false}
        />
      <Inner class="inner inner-narrow">
        <form name="contact" netlify="true" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <label>Your Name: <input type="text" name="name"/></label>
          <label>Your Email: <input type="email" name="email"/></label>
          <label>Message: <textarea name="message"></textarea></label>
          <button type="submit">Send</button>  
        </form>
      </Inner>
    </div>
  )
}

export default Contact;