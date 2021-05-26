import React from 'react';

const Inner = props => {
  return (
    <div className={props.class}>
      {props.children}
    </div>
  )
}

export default Inner;