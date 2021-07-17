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

export default class TestimoniSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      // autoplay: true,
      // autoplaySpeed: 5000
    };

    return (
        <div className="">
            <div className="">
                <Slider {...settings}>
                    <div class="testimoni-card-container">
                        <div className="testimoni-card bg-butterscotch">
                            <div class="card-img-container" style={{backgroundImage: `url(http://localhost:3000/images/image-2.jpg)`}}>
                            </div>
                            <p class="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, expedita animi eos voluptatem temporibus doloremque qui sed fugit voluptates, labore vero nulla error esse ipsum adipisci mollitia necessitatibus, eaque suscipit aut!</p>
                        </div>
                    </div>
                    <div class="testimoni-card-container">
                        <div className="testimoni-card bg-butterscotch">
                            <div class="card-img-container" style={{backgroundImage: `url(http://localhost:3000/images/image-2.jpg)`}}>
                            </div>
                            <p class="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, expedita animi eos voluptatem temporibus doloremque qui sed fugit voluptates, labore vero nulla error esse ipsum adipisci mollitia necessitatibus, eaque suscipit aut!</p>
                        </div>
                    </div>
                    <div class="testimoni-card-container">
                        <div className="testimoni-card bg-butterscotch">
                            <div class="card-img-container" style={{backgroundImage: `url(http://localhost:3000/images/image-2.jpg)`}}>
                            </div>
                            <p class="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, expedita animi eos voluptatem temporibus doloremque qui sed fugit voluptates, labore vero nulla error esse ipsum adipisci mollitia necessitatibus, eaque suscipit aut!</p>
                        </div>
                    </div>
                    <div class="testimoni-card-container">
                        <div className="testimoni-card bg-butterscotch">
                            <div class="card-img-container" style={{backgroundImage: `url(http://localhost:3000/images/image-2.jpg)`}}>
                            </div>
                            <p class="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, expedita animi eos voluptatem temporibus doloremque qui sed fugit voluptates, labore vero nulla error esse ipsum adipisci mollitia necessitatibus, eaque suscipit aut!</p>
                        </div>
                    </div>
                    <div class="testimoni-card-container">
                        <div className="testimoni-card bg-butterscotch">
                            <div class="card-img-container" style={{backgroundImage: `url(http://localhost:3000/images/image-2.jpg)`}}>
                            </div>
                            <p class="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, expedita animi eos voluptatem temporibus doloremque qui sed fugit voluptates, labore vero nulla error esse ipsum adipisci mollitia necessitatibus, eaque suscipit aut!</p>
                        </div>
                    </div>
                    <div class="testimoni-card-container">
                        <div className="testimoni-card bg-butterscotch">
                            <div class="card-img-container" style={{backgroundImage: `url(http://localhost:3000/images/image-2.jpg)`}}>
                            </div>
                            <p class="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, expedita animi eos voluptatem temporibus doloremque qui sed fugit voluptates, labore vero nulla error esse ipsum adipisci mollitia necessitatibus, eaque suscipit aut!</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
  }
}