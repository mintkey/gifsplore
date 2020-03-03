import React from 'react';
import GiphyLogo from '../assets/giphy-logo.png';
import './Heading.css';

const Heading = () => {
    return (
    <div id="heading">
      <span id="title"><a href="#" onClick={() => window.location.reload(false)}>GIFsplore</a></span>
      <span id="subtitle">
        <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">
          Powered by<img id="logo" src={GiphyLogo} alt="GIPHY logo" height="25px"/>
        </a>
      </span>
    </div>
    )
}

export default Heading;