import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Me from '../assets/me.jpg'
const Home = () => {
  return (
    <div className="home">
      <Hero
        src={Me}
        content="<h1>Hello, I'm Kenny Krosky. I'm a Software Engineer and UX Designer.</h1><p>I'm a family man (2 kids and 1 on the way) and a big time coffee sipper. I'm passionate about all things JavaScript, CSS, and API related.</p>"
        cta={true}
        cta_link="/letstalk"
        cta_text="👋 Let's connect"
        showSocial={false}/>
        <Projects/>
    </div>
  )
}

export default Home;