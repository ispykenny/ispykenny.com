import React from 'react';
import Inner from './Grid';
import Socials from './Social';

function Hero({ title, copy, showSocial }) {
  return (
    <Inner>
      <div className="content-area">
        <h1 className="page-title" dangerouslySetInnerHTML={{__html: title}}></h1>
        <div dangerouslySetInnerHTML={{__html: copy}}></div>
        { showSocial === true ?  <Socials/>  : '' }
      </div>
    </Inner>
  )
}

export default Hero;