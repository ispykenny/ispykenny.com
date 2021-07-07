import React from 'react';
import { Link } from 'react-router-dom';


const Cta = ({cta, path_name, url, text}) => {
  if(cta && path_name) {
    return (
      <Link className="cta" to={path_name}><span>{text}</span></Link>
    )
  } else if(cta && url) {
    return <a href={url} target="_blank" className="cta" rel="noreferrer">{text}</a>
  } else {
    return null;
  }
}

export default Cta;