import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Me from '../assets/me.jpg';
import Products from '../components/Products';
const Home = () => {
  return (
    <div className="home">
      <Hero
        src={Me}
        content="<h1>Hello, I'm Kenny Krosky. I'm a Software Engineer and UX Designer.</h1><p>I'm a Type 1 diabetic, family man (2 kids and 1 on the way), and a big time coffee sipper. I'm passionate about all things Front-end, specifically JavaScript, CSS, and API related. Currently employed by Adobe, leading and maintaining the Creative Cloud growth web domain.</p>"
        cta={true}
        cta_link="/letstalk"
        cta_text="👋&nbsp;&nbsp;Let's connect"
        showSocial={false}/>
        <Products/>
        <Projects/>
    </div>
  )
}

export default Home;