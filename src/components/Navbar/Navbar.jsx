import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="menu-izquierdo">
          <div className="item">
            <Link to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
          <div className="item">
            <span>Accessories</span>
          </div>
        </div>
        <div className="logo">
          <Link to="/">LAMASTORE</Link>
        </div>
        <div className="menu-derecho">
          <div className="item">
            <Link to="/">About Us</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />
            <div className="shopping-cart">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
