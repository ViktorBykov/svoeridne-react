import React from "react";
import FavoritesAddButton from "../../components/buttons/favoritesAddButton";
import Share from "../../components/share/share";
import RatingOutput from "../../components/rating/ratingOutput";
import SellerSocialLinks from "../../components/sellerSocialLinks/sellerSocialLinks";
import ProductImageSlider from "../../components/sliders/productImageSlider/productImageSlider";
import Reviews from "../../components/reviews/reviews";

import "react-image-gallery/styles/css/image-gallery.css";
import "./productPage.css";

import location from "../../assets/location.png";
import name from "../../assets/name.png";
import phone from "../../assets/phone.png";

function PremiumProductPage({product}) {

  const { name: productName, images, seller, fullDescription, price, rating } = product;
  const { name: sellerName, contacts, workingHours } = seller;
  const { phone: sellerPhone, address: sellerAddress } = contacts;

  return (
    <div className="catalog-item-page">
      <div className="container">
        <div className="item-image-wrapper">
          {images.length > 1 ? 
          (<ProductImageSlider images={images}/> ) : 
          (<img src={images[0]} alt={productName} />)}  
        </div>
        <div className="item-details">
          <RatingOutput rating={rating} />
          <h1>{productName}</h1>
          <div className="item-details-row">
            <p className="item-price">{price} &euro;</p>
            <FavoritesAddButton id={product.id} />
            <Share name={name}/>
          </div>
          <div className="owner-details">
            <div className="owner-details-col">
              <p className="item-details-title">Графік роботи</p>
                {Object.entries(workingHours).map(([key, value]) => (
                  <span key={key}>
                    {key}: {value}
                  </span>
                ))}
            </div>
            <div className="owner-details-col">
              <p className="item-details-title">Контакти</p>
              <p><img src={name} alt="name" className="item-details-icon"/><span>{sellerName}</span></p>
              <p><img src={phone} alt="phone" className="item-details-icon"/><a className={"phone-link"} href={`tel:${sellerPhone}`}>{sellerPhone}</a></p>
              <p><img src={location} alt="location" className="item-details-icon"/><span>{sellerAddress}</span></p>
            </div>
            <div className="owner-details-col">
             <SellerSocialLinks socialLinks={seller.socialLinks} />
            </div>
          </div>
            <p className="item-details-title">Опис</p>
            <p>{fullDescription}</p>
        </div>
      </div>
      <Reviews productId={product.id} />
    </div>
  );
}

export default PremiumProductPage;
