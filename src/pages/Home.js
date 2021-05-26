import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = (props) => {

  return (
    <div className="home">
      <Hero
        title="Hello, I'm Kenny Krosky. I'm a front - end developer and UX designer."
        copy="<p>I'm a family man (2 kids and 1 on the way) and a big time coffee sipper. I'm passionate about all things JavaScript, CSS, and API related. <strong>Currently a leading maintainer of <a href='https://github.com/adobe/pages' target='_blank' rel='noreferrer'>pages.adobe.com</a></strong></p>"
        cta={true}
        cta_link="https://google.com"
        cta_text="👋 Let's connect"
        showSocial={false}/>
        <Projects/>
    </div>
  )
}

export default Home;