import React from 'react';

const Richtext = ({content}) => {
  return <div dangerouslySetInnerHTML={{__html: content}}></div>
}

export default Richtext;