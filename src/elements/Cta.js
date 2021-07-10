import React from 'react';
import { Link } from 'react-router-dom';


const Cta = ({cta, path_name, url, text, screen_reader}) => {
  if(cta && path_name) {
    return (
      <Link className="cta" to={path_name}>
        {screen_reader && <span className="screen-reader">{screen_reader}</span>}
        <span>{text}</span>
      </Link>
    )
  } else if(cta && url) {
    return <a href={url} target="_blank" className="cta" rel="noreferrer">{screen_reader && <span className="screen-reader">{screen_reader}</span>}{text}</a>
  } else {
    return null;
  }
}

export default Cta;