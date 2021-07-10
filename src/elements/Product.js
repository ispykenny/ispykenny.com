import React  from 'react';
import LazyLoad from 'react-lazyload';
import Cta from './Cta';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const Product = ({product, index}) => {
  const {fields} = product
  const {title, description, hasLink, link, thumbnail } = fields;
  return (
    <div className="product__card" key={index}>
      <div className="product__content">
        <div className="product__content__inner">
          <h3>{title}</h3>
          {documentToReactComponents(description)}
          <Cta 
            cta={hasLink} 
            url={link} 
            screen_reader={`View ${title} website page`}
            text='Visit Project'
          />
        </div>  
      </div> 

      <div className="product__image">
        <div className="lazy" style={{paddingBottom: 259 / 647  * 100 + '%'}}>
          <LazyLoad height={0} firstTimeVisible>
            <img 
              src={thumbnail.fields.file.url} 
              alt={`A preview of ${product.title}`}
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  )
}

export default Product