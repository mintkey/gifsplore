import React from 'react';

const GifItem = (image) => {
    return (
        <div className="gif-item">
            <img src={image.gif.images.downsized_medium.url} alt="GIF search result" />
        </div>
    )
};

export default GifItem;