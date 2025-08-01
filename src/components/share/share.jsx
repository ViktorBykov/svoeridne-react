import React from 'react';

import {
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  FacebookIcon,
  TelegramIcon,
  ViberIcon,
} from 'react-share';

import './share.css';

function Share({ name }) {
  return (
    <div className="share">
      <p className="share-title">Поділитись: </p>
      <div className="share-buttons">
        <FacebookShareButton title={name} url={window.location.href}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TelegramShareButton title={name} url={window.location.href}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <ViberShareButton title={name} url={window.location.href}>
          <ViberIcon size={32} round />
        </ViberShareButton>
      </div>
    </div>
  );
}

export default Share;
