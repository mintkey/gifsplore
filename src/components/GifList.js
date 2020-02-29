import React, { Component } from 'react';
import axios from 'axios';
import './GifList.css';
import GifItem from './GifItem';

const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id} gif={image} />
    });

    return (
        <div className="gif-list">{gifItems}</div>
    );
    // state = {
    //     gifs: []
    // }

    // componentDidMount() {
    //     axios.get(`http://api.giphy.com/v1/gifs/search?api_key=7PE8Suc0Q5HIq45EvKLRubErQWS9iJwt&q=${searchTerm}&limit=25`)
    //     .then(res => {
    //         const gifs = res.data;
    //         this.setState({ gifs });
    //     })
    // }
    // render() {
    //     <ul>
    //         {this.state.gifs.map(gif => <li></li>)};
    //     </ul>
    // }
};

export default GifList;