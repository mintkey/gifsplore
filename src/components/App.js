import React, { Component } from 'react';
import axios from 'axios';
import GiphyLogo from '../assets/giphy-logo.png';
import './App.css';
import Search from './Search';
import GifList from './GifList';

export const API_KEY = '7PE8Suc0Q5HIq45EvKLRubErQWS9iJwt';

class App extends Component {
  constructor () {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    axios.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}&limit=25&rating=G`)
        .then(res => {
            this.setState({gifs: res.data.data});
            console.log(res.data.data);
        });
  };

  handleTermChange = (searchTerm) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=25&rating=G`)
      .then(res => {
        this.setState({gifs: res.data.data});
        console.log(res.data.data);
      });
  };

    render() {
      return (
        <div className="app">
          <div id="heading">
            <span id="title"><a href="#" onClick={() => window.location.reload(false)}>GIFsplore</a></span>
            <span id="subtitle" data-content="">
              <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">
                Powered by &nbsp;<img id="logo" src={GiphyLogo} alt="GIPHY logo" height="25px"/>
              </a>
            </span>
          </div>
          <Search onTermChange={this.handleTermChange} />
          <div className="scroll">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      )
    }
}

export default App;