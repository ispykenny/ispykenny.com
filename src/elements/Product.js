import React from 'react';
import Lazyload from '../components/LazyLoad';
import Cta from './Cta';

const Product = ({product}) => {
  return (
    <div className="product__card">
      <div className="product__content">
        <div className="product__content__inner">
          <h4>{product.name}</h4>
          <div dangerouslySetInnerHTML={{__html: product.description}}></div>
          <Cta cta={product.has_link} url={product.url} text={'Visit Page'}/>
        </div>  
      </div> 

      <div className="product__image">
        <Lazyload aspect_ratio={259 / 647  * 100 + '%'}>
          <img 
            data_src={product.image} 
            alt={`A preview of ${product.name}`}
          />
        </Lazyload>
      </div>
    </div>
  )
}

export default Product