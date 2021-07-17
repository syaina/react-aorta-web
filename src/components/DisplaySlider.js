import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class DisplaySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 5000
    };

    return (
      <div className="center mt-5">
        <Slider {...settings}>
          <div className="slider-img-container">
            <img src="../images/dummy.png"/>
          </div>
          <div className="slider-img-container">
            <h3>2</h3>
          </div>
          <div className="slider-img-container">
            <h3>3</h3>
          </div>
          <div className="slider-img-container">
            <h3>4</h3>
          </div>
          <div className="slider-img-container">
            <h3>5</h3>
          </div>
          <div className="slider-img-container">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}