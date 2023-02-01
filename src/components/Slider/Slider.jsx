import React, { useState } from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { bannersForSlider } from "../../data";

import "./Slider.scss";

export default function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlider = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  }

  const nextSlider = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  }

  return (
    <div className="slider">
      <div className="containerSlider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <img src={bannersForSlider[0].src} alt="" />
        <img src={bannersForSlider[1].src} alt="" />
        <img src={bannersForSlider[2].src} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlider}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextSlider}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  )
}
