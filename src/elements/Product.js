import React  from 'react';
import LazyLoad from 'react-lazyload';
import Cta from './Cta';
const Product = ({product, index}) => {
  return (
    <div className="product__card" key={index}>
      <div className="product__content">
        <div className="product__content__inner">
          <h4>{product.name}</h4>
          <div dangerouslySetInnerHTML={{__html: product.description}}></div>
          <Cta cta={product.has_link} url={product.url} text={'Visit Page'}/>
        </div>  
      </div> 

      <div className="product__image">
        <div className="lazy" style={{paddingBottom: 259 / 647  * 100 + '%'}}>
          <LazyLoad height={0} firstTimeVisible>
          
            <img 
              src={product.image} 
              alt={`A preview of ${product.name}`}
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  )
}

export default Product