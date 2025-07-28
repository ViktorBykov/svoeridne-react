import React from 'react';

import {
    FacebookShareButton,
    TelegramShareButton,
    ViberShareButton,
} from 'react-share';

import { FacebookIcon, TelegramIcon, ViberIcon } from 'react-share';

import './share.css';

function Share({ name }) {
    return (
        <div className="share">
            <p className="share-title">Поділитись: </p>
            <div className="share-buttons">
                <FacebookShareButton title={name} url={window.location.href}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TelegramShareButton title={name} url={window.location.href}>
                    <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
                <ViberShareButton title={name} url={window.location.href}>
                    <ViberIcon size={32} round={true} />
                </ViberShareButton>
            </div>
        </div>
    );
}

export default Share;
