import React, { Component } from "react";
import Slider from "react-slick";
import SingleReview from "../../reviews/singleReview";

import "./reviewsSlider.css";


export default class ReviewsSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

render() {
  const { reviews } = this.props;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        variableWidth: false,
        centerPadding: "15px",
        afterChange: this.autoHightFix,
        onInit: this.autoHightFix,
    };

  return (
    <div className="reviews">
        <div className="reviews-header">
            <h2>Відгуки</h2>
            <div className="reviews-nav">
                <div className="reviews-nav-button prev" onClick={this.previous}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-0.5" y="0.5" width="39" height="39" rx="19.5" transform="matrix(-1 0 0 1 39 0)" stroke="#52B3CB"/>
                        <path d="M28 20H12M12 20L14.8387 23M12 20L14.8387 17" stroke="#52B3CB"/>
                    </svg>
                </div>
                <div className="reviews-nav-button next" onClick={this.next}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#52B3CB"/>
                        <path d="M12 20H28M28 20L25.1613 23M28 20L25.1613 17" stroke="#52B3CB"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="reviews-slider">
            <Slider ref={c => (this.slider = c)} {...settings}>
                {reviews.map((review, index) => (
                    <SingleReview key={index} review={review} />
                ))}
            </Slider>
        </div>
    </div>
  );
}   

    autoHightFix = () => {
        setTimeout(() => {

        if (!this.slider) return;
        
        const sliderNode = this.slider.innerSlider.list;
        const activeSlides = sliderNode.querySelectorAll('.slick-active');
        let maxHeight = 0;
        
        activeSlides.forEach(slide => {
            const height = slide.offsetHeight;
            
            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        sliderNode.style.height = maxHeight + 'px';

        }, 0);
    }
}