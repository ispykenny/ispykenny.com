import React, { useState, useEffect } from 'react';
import Inner from '../components/Grid';
import Hero from '../components/Hero';


const Work = () => {
  return (
    <>
      <Hero
        title='Aside from websites, I build tools that improve productivity. Tools built using JavaScript, HTML, and CSS.'
        copy="<p>Tools used by 100k+ users a month at large scale.</p>"
        hasSocial={false}
      />
    </>
  )
}

export default Work;