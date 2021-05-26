import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = (props) => {

  return (
    <div className="home">
      <Hero
        title="Hello, I'm Kenny Krosky. I'm a front - end developer and UX designer."
        copy="<p>I'm a family man with two little girls (and 1 little boy on the way!) and a rad wife. When I'm not coding or designing things for the web or software then I could usually be found sipping on a cup of coffee while playing some board games with my girls. I'm passionate about front-end development and creating tools that improve day-to-day tasks. <strong>Currently a leading maintainer of <a href=''>pages.adobe.com</a></strong></p>"
        cta={true}
        cta_link="https://google.com"
        cta_text="👋 Let's connect"
        showSocial={false}/>
        <Projects/>
    </div>
  )
}

export default Home;