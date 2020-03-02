import React from 'react';

const GifItem = (item) => {
    return (
        <div className="gif-item">
            <a href={item.gif.url} target="_blank">
                <img src={item.gif.images.downsized_medium.url} alt={item.gif.title} />
            </a>
        </div>
    )
};

export default GifItem;