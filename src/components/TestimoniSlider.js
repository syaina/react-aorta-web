import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            fontSize: `15`,
           }}
        onClick={onClick}
      />
    );
}
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            fontSize: `15`,
           }}
        onClick={onClick}
      />
    );
}

export default function TestimoniSlider (props) {
 
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      // autoplay: true,
      // autoplaySpeed: 5000
    };

    return (
        <div className="">
            <div className="">
                <Slider {...settings}>
                    {
                        props.data.map((item) => 

                            <div class="testimoni-card-container">
                                <div className="testimoni-card bg-butterscotch">
                                    <div class="card-img-container" style={{backgroundImage: `url(${item.url_gambar})`}}>
                                    </div>
                                    <p class="font-small">{item.testimoni}</p>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
}