import { useState, useEffect } from 'react';
import axios from 'axios';

// Required key to use for GIPHY API
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGiphy = (query) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
  
    // Makes a GET request to trending endpoint and sets results state to trending gifs data
    useEffect(() => {
      async function fetchTrending() {
        try {
          setLoading(true);
          const response = await axios(
            `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=G&lang=en`
          );
  
          setResults(response.data.data);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }
  
      fetchTrending();
    }, []);
  
    // Makes a GET request to search endpoint using query variable and sets results state to search results gifs data
    useEffect(() => {
      async function fetchData() {
        try {
          setLoading(true);
          const response = await axios(
            `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=G&lang=en`
          );
  
          setResults(response.data.data);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }
  
      if (query !== '') {
        fetchData();
      }
    }, [query]);
  
    return [results, loading];
  };

  export default useGiphy;