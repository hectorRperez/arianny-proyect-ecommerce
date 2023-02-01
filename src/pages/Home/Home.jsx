import React from 'react'

import GlobalStyle from '../../globalStyles';

//Custom components
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories';

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <GlobalStyle />
      <Slider />
      <FeaturedProducts type={"Featured Products"} />
      <Categories />
      <FeaturedProducts type={"Trending Products"} />
    </div>
  )
}
