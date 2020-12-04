import React from 'react';


const Author = ({articles}) => {
  return (
    <div className="article__item">
      <div className="author__inner">
        <img src="https://kennykrosky.com/wp-content/uploads/2019/01/github-1.jpg"/>
        <p>Kenny Krosky</p>
      </div>
    </div>
  )
}

export default Author;