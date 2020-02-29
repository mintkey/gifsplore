import React, { Component } from 'react';

class Search extends Component {
    // Set state to searchTerm string
    constructor () {
        super();
        this.state = { searchTerm: ''};
    }

    // Updates searchTerm state with value of input whenever input changes
    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.onTermChange(searchTerm);
    }

    // Render search field
    render () {
        return (
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} placeholder="Search for GIFs..." />
            </div>
        )
    }
}

export default Search;