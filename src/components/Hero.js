import React from 'react';
import Cta from '../elements/Cta';
import Inner from './Grid';
import Richtext from './Richtext';
import Socials from './Social';

function Hero({ content, showSocial , cta, src, cta_link, cta_text }) {

  const Avatar = () => {
    if(src) {
      return <div className="avatar" style={{backgroundImage: `url(${src})`}}></div>
    } else return null
  }

  return (
    <div className="hero">
      <Inner class="inner">
        <div className="hero-area">
          <div className="hero_flex">
            <Avatar/>
            <div>
              <Richtext content={content}/>
              <Cta 
                cta={cta}
                path_name={cta_link}
                text={cta_text}
              />
              <Socials showSocial={showSocial}/>
            </div>
          </div>
        </div>
      </Inner>
    </div>
  )
}

export default Hero;