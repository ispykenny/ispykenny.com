import React, {useEffect} from 'react';
import Hero from '../components/Hero';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className="about">
      <Hero
        title="About Me"
        copy="<p>I'm Kenny Krosky. A front end developer from Southern California 🌴. I'm a father of two girls, Kayden and Dakota and married to my best friend, Ramey. We own two dogs, two cats, and two fishes so we basically live on a farm at this point. I'm a huge tech and coffee nerd and love spending time with my family. I'm currently a full time dev at <strong>Adobe</strong> where I'm managing web initiatives for my team.</p>"
        showSocial={true}
      />
    </div>
  )
}

export default About;