import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
    // Map each GIF item with its image and return image ID as key
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id} gif={image} />
    });

    return (
        <div className="gif-list">{gifItems}</div>
    );
};

export default GifList;