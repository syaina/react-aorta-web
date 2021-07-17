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
            fontSize: `50`,
            transform: `translate(0, 0%)`,
            top: `93%`,
            right: `10%`}}
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
            fontSize: `50`,
            transform: `translate(0, 0%)`,
            top: `93%`,
            left: `83%`}}
        onClick={onClick}
      />
    );
}

export default class SoalSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      // autoplay: true,
      // autoplaySpeed: 5000
    };

    return (
        <div className="">
            <div className="bg-butterscotch container-question-box">
                <Slider {...settings}>
                    <div className="bg-white question-box">
                        <div className="py-5 px-5">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestias voluptatem. Fuga veniam ullam, suscipit adipisci iusto vel quisquam temporibus ducimus deserunt amet natus qui repellendus rem rerum animi iure!</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="bg-white question-box">
                        <div className="py-5 px-5">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestias voluptatem. Fuga veniam ullam, suscipit adipisci iusto vel quisquam temporibus ducimus deserunt amet natus qui repellendus rem rerum animi iure!</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="bg-white question-box">
                        <div className="py-5 px-5">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestias voluptatem. Fuga veniam ullam, suscipit adipisci iusto vel quisquam temporibus ducimus deserunt amet natus qui repellendus rem rerum animi iure!</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
  }
}