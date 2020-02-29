import React, { Component } from 'react';
import axios from 'axios';

const GifItem = (image) => {
    return (
        <div className="gif-item">
            <img src={image.gif.images.downsized.url} />
        </div>
    )
};

export default GifItem;