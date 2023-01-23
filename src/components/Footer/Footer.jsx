import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div className='footer'>
      <div className="top-footer">
        <div className="column-footer">
          <span className='titleFooter'>Categories</span>
          <Link to="/products/1">Women</Link>
          <Link to="/products/1">Men</Link>
          <Link to="/products/1">Shoes</Link>
          <Link to="/products/1">Accessories</Link>
          <Link to="/products/1">New Arrivals</Link>
        </div>
        <div className="column-footer">
          <span className='titleFooter'>Links</span>
          <Link to="/products/1">Women</Link>
          <Link to="/products/1">Men</Link>
          <Link to="/products/1">Shoes</Link>
          <Link to="/products/1">Accessories</Link>
          <Link to="/products/1">New Arrivals</Link>
        </div>
        <div className="column-footer">
          <span className='titleFooter'>About</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores cupiditate autem unde, cumque delectus at alias fugit explicabo voluptatibus eveniet magnam molestiae similique ab. Fugiat.</p>
        </div>
        <div className="column-footer">
          <span className='titleFooter'>Contact</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui labore aut numquam deleniti laudantium.</p>
        </div>
      </div>
      <div className="row-footer">
        <div className="item-footer">
          <span>ariadnystore</span>
          <p>© Copyright 2023. All Rights Reserved</p>
        </div>
        <div className="img">
          <img src="/img/logo-stripe.png" alt="" />
        </div>
      </div>
    </div >
  )
}
