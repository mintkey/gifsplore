import React from 'react';

const GifItem = (image) => {
    return (
        <div className="gif-item">
            <a href={image.gif.url} target="_blank">
                <img src={image.gif.images.downsized_medium.url} alt={image.gif.title} />
            </a>
        </div>
    )
};

export default GifItem;