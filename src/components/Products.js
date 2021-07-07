import React from 'react';
import DigitalMe from '../assets/Digitalme@2x.png';
import Pixels from '../assets/Pixels@2x.png';
import Minimal from '../assets/Minimal-To-Do-List@2x.png';
import Dribbbler from '../assets/Dribbbler-Player-cards@2x.png';
import Product from '../elements/Product';

const products_items = [
  {
    name: "Digital Me",
    description: "<p>Digital Me is a place where you can upload, promote, and feature important links so your customers and audience can find you online.</p><p>Digitalme was built using PHP and MySql for the backend and powered by Vanilla JS for the frontend. With this project I built a login system and the ability to reset your password. You would also be able to create, remove, update, and delete links that were shared on your profile.</p>",
    image: DigitalMe,
    has_link: true,
    url: 'https://digitalme.space/u/ispykenny'
  },
  {
    name: "Pixels",
    description: "<p>Pixels is an Adobe XD application that allows users to pull in beautiful Unsplash images into their design, without having to leave the Adobe product.</p><p>Pixels is currently used by tens of thousands of people each month with an average of <strong>1.4 million images being downloaded from this app</strong> into Adobe XD each month. This app was built using the <strong>Adobe XD API</strong>, <strong>Unsplash API</strong>, with <strong>Vanilla JS</strong> and <strong>Node JS</strong>.</p>",
    image: Pixels,
    has_link: true,
    url: 'https://adobe.com/go/cc_plugins_discover_plugin?pluginId=de6be381&workflow=share'
  },
  {
    name: "Minimal To Do List",
    description: "<p>Minimal To Do List is a simple To Do List tool built using <strong>React</strong>. Data is stored in a localStorage so if I user refreshes the page they won't need to recreate their to do list. This project is hosted on Netlify</p>",
    image: Minimal,
    has_link: true,
    url: 'https://minimaltodolist.com/'
  },
  {
    name: "Dribbbler Player Cards",
    description: "<p>Dribbbler player cards is an image generator that creates a sports-like card that includes stats, such as total Likes, post views, and follower count.</p> <p>This app was built using <strong>React</strong>, <strong>Node JS</strong>, and <strong>Dribbble API for AUTH and data</strong></p>",
    image: Dribbbler,
    has_link: true,
    url: 'https://dribbbler-players-card.netlify.app/'
  },
]

const Products = () => {
  return (
    <section>
      <div className="inner">
        <div className="section-intro">
          <h2>My Current Projects</h2>
          <p>Here are some of the products I currently built, own, and run:</p>
          <hr/>
        </div>
        <div className="product">
          {products_items.map((item, index) => <Product product={item} key={index}/>)}
        </div>
      </div>
    </section>
  )
}

export default Products;