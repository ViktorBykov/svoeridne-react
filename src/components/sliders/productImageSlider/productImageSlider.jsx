import ImageGallery from 'react-image-gallery';
import React from 'react';

import './productImageSlider.css';

export default class ProductImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showNav: true,
      slideVertically: false,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'bottom',
      showVideo: false,
      useWindowKeyDown: true,
    };
  }

  render() {
    const { images } = this.props;

    const galleryImages = images.map((url) => ({
      original: url,
      thumbnail: url,
    }));

    return <ImageGallery items={galleryImages} {...this.state} />;
  }
}
