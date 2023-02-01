import { Key } from '@mui/icons-material';
import React from 'react'

import { imagesForFeaturedProducts } from "../../data";
import Card from '../Card/Card';

import "./FeaturedProducts.scss";

function FeaturedProducts({ type }) {
  return (
    <div className='featured'>
      <div className="featureHeader">
        <h2 className='featureHeader__title'>{type}</h2>
        <p className='featureHeader__content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi odit sit voluptate inventore non porro! Blanditiis explicabo delectus, tenetur alias tempore eos quis eligendi vel provident quod ad voluptatem maxime?</p>
      </div>
      <div className="featuredWrapper">
        {
          imagesForFeaturedProducts.map((item) => (
            <div key={item.id} className="item">
              <Card
                img={item.img}
                img2={item.img2}
                id={item.id}
                productName={item.productName}
                oldPrice={item.oldPrice}
                price={item.price}
                isNew={item.isNew}
              ></Card>
            </div>
          )
          )}
      </div>
    </div >
  )
}

export default FeaturedProducts