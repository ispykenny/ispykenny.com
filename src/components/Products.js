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
        {products_array.length > 1 ? (
        <>
          <div className="section-intro">
            <h2>My Current Projects</h2>
            <p>Here are some of the products I currently built, own, and run:</p>
            <hr/>
          </div>
          <div className="product">
            {products_array.map((item, index) => <Product product={item} key={index}/>)}
          </div>
        </>
        ) : <div style={{minHeight: 900}}><h1>Loading My Products...</h1></div> }
      </div>
    </section>
  )
}

export default Products;