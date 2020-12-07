import React from 'react';

const Socials = () => {
  const socials = [
    {
      type: "Instagram",
      url: "https://instagram.com/ispykenny"
    },
    {
      type: "Twitter",
      url: "https://twitter.com/ispykenny"
    },
    {
      type: "Github",
      url: "https://github.com/ispykenny"
    },
    {
      type: "Behance",
      url: "https://www.behance.net/kennykrosky"
    }
  ]

  return (
    <div className="social">
      <div className="social__inner">
        <h2>Follow me here:</h2>
        <ul>
          { socials.map((social, index) => (
            <li key={index}>
              <a rel="noreferrer" target="_blank" href={social.url}>{social.type}</a>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}

export default Socials;