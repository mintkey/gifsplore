import React, { Component } from 'react';

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
                <input onChange={event => this.onInputChange(event.target.value)} placeholder="Search for GIFs..." />
            </div>
        )
    }
}

export default Search;