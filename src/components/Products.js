import React, {useEffect, useState} from 'react';
import Product from '../elements/Product';

const fetch_products = () => {
  return fetch('/.netlify/functions/endpoints')
  .then((res) => res.json())
  .then((data) => data)
  .catch((err) => console.log(err))
}

const Products = () => {
  const [products_array, set_products] = useState([]);
  useEffect(() => {
    fetch_products().then((res) => {
      set_products(res.items)
    })
  }, [set_products]);

  return (
    <section>
      <div className="inner">
        <div className="section-intro">
          <h2>My Current Projects</h2>
          <p>Here are some of the products I currently built, own, and run:</p>
          <hr/>
        </div>
        <div className="product">
          {products_array && products_array.map((item, index) => <Product product={item} key={index}/>)}
        </div>
      </div>
    </section>
  )
}

export default Products;