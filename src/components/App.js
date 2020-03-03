import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import useGiphy from '../hooks/useGiphy';
import Heading from './Heading';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, loading] = useGiphy(query);

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const gifList = results.map((gif) => (
    <div className="gif-item" key={gif.id}>
      <a href={gif.url} target="_blank" rel="noopener noreferrer">
        <img src={gif.images.downsized_medium.url} alt={gif.title} />
      </a>
    </div>
  ));

  return (
  <div className="app">
    <Heading />
    <form onSubmit={onSubmit}>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for a GIF" />
      <button type="submit">Search</button>
    </form>
    <br />
    {loading ? (
      <>
      <ReactLoading type={"blank"} />
      </>
    ) : (
      <div className="gif-list">{gifList}</div>
    )}
  </div>
  );
};

export default App;