import React from 'react';
import Hero from '../components/Hero';
import WorkList from '../components/WorkList';


const Work = () => {
  return (
    <>
      <Hero
        title='Aside from websites, I build tools that improve productivity. Tools built using JavaScript, HTML, and CSS.'
        copy="<p>Tools used by 100k+ users a month at large scale.</p>"
        hasSocial={false}
      />
      <WorkList/>
    </>
  )
}

export default Work;