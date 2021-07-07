import React from 'react';


const Lazyload = (props, {aspect_ratio}) => {
  return (
    <div className="lazy" style={{ paddingBottom: props.aspect_ratio }}>
      {props.children}
    </div>
  )
}

export default Lazyload;