import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor () {
        super();
        this.state = { searchTerm: ''};
    }

    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.onTermChange(searchTerm);
    }

    render () {
        return (
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} placeholder="Search for a GIF" />
            </div>
        )
    }
}

export default Search;