import React, { Component } from 'react';
import Slider from 'react-slick';
import CatalogItem from '../../catalogItem/catalogItem';

import './productsSlider.css';

export default class ProductsSlider extends Component {
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
    const { products, categoryName, title } = this.props;
    console.log(products);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: false,
      variableWidth: false,
      centerPadding: '10px',
    };

    return (
      <div className="reviews">
        <div className="slider-header">
          {title && <h2>{title}</h2>}
          <div className="slider-nav">
            <div className="slider-nav-button prev" onClick={this.previous}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  transform="matrix(-1 0 0 1 39 0)"
                  stroke="#52B3CB"
                />
                <path
                  d="M28 20H12M12 20L14.8387 23M12 20L14.8387 17"
                  stroke="#52B3CB"
                />
              </svg>
            </div>
            <div className="slider-nav-button next" onClick={this.next}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="#52B3CB"
                />
                <path
                  d="M12 20H28M28 20L25.1613 23M28 20L25.1613 17"
                  stroke="#52B3CB"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="products-slider">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {products.map((product) => (
              <CatalogItem
                key={product.id}
                product={product}
                categoryName={categoryName}
                // subCategoryName={subCategoryName}
              />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
