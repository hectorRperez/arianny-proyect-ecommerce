import React from 'react'
import { Link } from 'react-router-dom';

import "./Card.scss";

export default function Card(props) {
  const { img, img2, productName, oldPrice, price, id, isNew } = props;
  return (
    <Link to={`/product/${id}`}>
      <div className='card'>
        {/* 54:48 */}
        {/* Continuar mejorando el CSS */}
        <div className="images">
          {isNew && <span className='isNew'>New Season</span>}
          <img className='mainImg' src={img} alt="product img" />
          <img className='secondImages' src={img2} alt="product img" />
        </div>
        <div className="itemWrapper">
          <small className='productName'>{productName}</small>
          <div className="priceItem">
            <span className='old-price'>{oldPrice}</span>
            <span> <strong>{price}</strong> </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
