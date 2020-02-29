import React, { Component } from 'react';
import axios from 'axios';
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

  handleTermChange = (searchTerm) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=25`)
      .then(res => {
        this.setState({gifs: res.data.data});
        console.log(res.data.data);
      });
  };

    render() {
      return (
        <div>
          <h1 className="title">Get a GIF</h1>
          <Search onTermChange={this.handleTermChange} />
          <GifList gifs={this.state.gifs} />
        </div>
      )
    }
}

export default App;