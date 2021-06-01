import React, {useEffect} from 'react';
import Inner from './Grid';
import {check_in_view} from '../utils/in-view';

const Projects = () => {
  useEffect(() => {
    check_in_view(document.querySelectorAll('.animate'))
  }, [])

  let project = [
    {
      name: 'Dribbbler Players Card',
      url: 'https://dribbbler-players-card.netlify.app/',
      description: '<p>A web application that generates a sports-card-like card with user stats and generates a .jpg image of your card.</p><p>Tools used: <strong>React</strong>, <strong>Node.js</strong>, <strong>SCSS</strong>, <strong>Dribbble API</strong></p>'
    },
    {
      name: 'Shredlights',
      url: 'http://kennykrosky.com/shredlights/',
      description: '<p>Static site for a marketing page.</p><p>Tools used: <strong>JavaScript</strong>, <strong>SCSS</strong></p>'
    },
    {
      name: 'Drink Bossi',
      url: 'https://drinkbossi.com',
      description: '<p>Custom WordPress theme.</p><p>Tools used: <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>SCSS</strong></p>'
    },
    {
      name: 'Gryphon Connect',
      url: 'http://kennykrosky.com/gryphon',
      description: '<p>Custom WordPress theme with Stripe (API) payment intergration.</p> <p>Tools used: <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>SCSS</strong></p>'
    },
    {
      name: 'Browse Miniaml',
      url: 'https://browseminimal.com',
      description: '<p>Affliate Marketing Landing Page</p> <p>Tools used: <strong>React</strong>, <strong>Contentful CMS</strong>, <strong>Netlify Serverless Functions</strong></p>'
    },
    {
      name: 'Digital Me',
      url: 'https://digitalme.space/u/ispykenny',
      description: '<p>Web application to allow users to sign up and store important links.</p><p>Tools used:</p><strong>PHP</strong>, <strong>MySql</strong>, <strong>JavaScript</strong>'
    },
    {
      name: 'Kannaco (wholesale)',
      url: 'https://wholesale.kannacocbd.com/',
      description: '<p>Custom <strong>Shopify</strong> theme with a custom Side-Cart Ajax feature.</p><p>Tools used:</p><strong>Liquid</strong>, <strong>Vanilla JS</strong>, <strong>SCSS</strong>'
    },
    {
      name: 'Pixels',
      url: 'https://adobe.com/go/cc_plugins_discover_plugin?pluginId=de6be381&workflow=share',
      description: '<p>Adobe XD JavaScript plugin with over 70k monthly image downloads.</p><p>Tools Used: <strong>Node Js</strong>, <strong>Unsplash API</strong></p>'
    },
    {
      name: 'DexHub',
      url: 'https://dex-hub.herokuapp.com/',
      description: '<p>Web Application to display blood glucose results for Type 1 Diabetics.</p><p>Tools used: <strong>Node Js</strong>, <strong>Firebase AUTH</strong>, <strong>Dexcom API</strong></p>'
    },
    {
      name: 'Tasklist',
      url: 'https://adobe.com/go/cc_plugins_discover_plugin?pluginId=4e1ee53d&workflow=share',
      description: '<p>Adobe XD JavaScript plugin.</p><p> Reads, Writes, and Updates TO-DO list.</p>'
    }
  ];

  return (
    <Inner class="inner">
      <h2 className="animate">Projects</h2>
      <div className="cards">
        { project.map((pro, index) => (
          <a className="cards__item animate" href={pro.url} target="_blank" rel="noreferrer" key={index}>
            <div className="cards__inner">
              <h3>{pro.name}</h3>
              <div dangerouslySetInnerHTML={{__html: pro.description}}></div>
            </div>
            <div className="cards__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </Inner>
  )
}

export default Projects