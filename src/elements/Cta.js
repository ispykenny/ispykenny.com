import React from 'react';
import { Link } from 'react-router-dom';


const Cta = ({cta, path_name, text}) => {
  if(cta) {
    return (
      <Link className="cta" to={path_name}>{text}</Link>
    )
  } else return null;
}

export default Cta;