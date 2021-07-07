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
    description: "<p>Pixels is an Adobe XD application that allows users to pull in beautiful Unsplash images into their design, without having to leave the Adobe product.</p><p>Pixels is currently used by tens of thousands of people each month with an average of 1.4 millions images being downloaded from this app into Adobe XD each month. This app was built using the Adobe XD API, Unsplash API, with Vanilla and Node JS.</p>",
    image: Pixels,
    has_link: true,
    url: 'https://adobe.com/go/cc_plugins_discover_plugin?pluginId=de6be381&workflow=share'
  },
  {
    name: "Minimal To Do List",
    description: "<p>Pixels is an Adobe XD application that allows users to pull in beautiful Unsplash images into their design, without having to leave the Adobe product.</p><p>Pixels is currently used by tens of thousands of people each month with an average of 1.4 millions images being downloaded from this app into Adobe XD each month. This app was built using the Adobe XD API, Unsplash API, with Vanilla and Node JS.</p>",
    image: Minimal,
    has_link: true,
    url: 'https://minimaltodolist.com/'
  },
  {
    name: "Dribbbler Player Cards",
    description: "<p>Pixels is an Adobe XD application that allows users to pull in beautiful Unsplash images into their design, without having to leave the Adobe product.</p><p>Pixels is currently used by tens of thousands of people each month with an average of 1.4 millions images being downloaded from this app into Adobe XD each month. This app was built using the Adobe XD API, Unsplash API, with Vanilla and Node JS.</p>",
    image: Dribbbler,
    has_link: true,
    url: 'https://dribbbler-players-card.netlify.app/'
  },
]

const Products = () => {
  return (
    <section>
      <div className="inner">
        <h2>My Current Projects</h2>
        <div className="product">
          {products_items.map((item) => <Product product={item}/>)}
        </div>
      </div>
    </section>
  )
}

export default Products;