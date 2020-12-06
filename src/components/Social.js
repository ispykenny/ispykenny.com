import React from 'react';

const Socials = () => {
  const socials = [
    {
      type: "Facebook",
      url: "https://facebook.com"
    },
    {
      type: "Instagram",
      url: "https://instagram.com"
    },
    {
      type: "Twitter",
      url: "https://twitter.com"
    },
    {
      type: "Github",
      url: "https://github.com"
    }
  ]

  return (
    <div className="social">
      <div className="social__inner">
        <h2>Follow me here:</h2>
        <ul>
          { socials.map((social, index) => (
            <li key={index}>
              <a rel="noopener"  href={social.url}>{social.type}</a>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}

export default Socials;