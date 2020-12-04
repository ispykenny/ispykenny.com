import React from 'react';
import Inner from './Grid';

function Hero({title, copy}) {
  return (
    <Inner>
      <div className="content-area">
        <h1 className="page-title" dangerouslySetInnerHTML={{__html: title}}></h1>
        <p>{copy}</p>
      </div>
    </Inner>
  )
}

export default Hero;