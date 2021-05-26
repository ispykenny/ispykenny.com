import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Inner from './Grid';
import Socials from './Social';

function Hero({ title, copy, showSocial }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100)
  }, [])



  return (
    <Inner class="inner">
      <div className="content-area">
        <h1 className={`page-title ${mounted? 'loaded': ''}`} dangerouslySetInnerHTML={{__html: title}}></h1>
        <div dangerouslySetInnerHTML={{__html: copy}}></div>
        { showSocial === true ?  <Socials/>  : '' }
        <Link to="/letstalk" className="cta">
          🤙 Let's Talk
        </Link>
      </div>
    </Inner>
  )
}

export default Hero;