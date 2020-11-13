import React, { useState } from 'react';
import Axios from 'axios';
import MoonLoader from 'react-spinners/MoonLoader';

const url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${process.env.REACT_APP_GAPI_KEY}/search/`;

const SearchBar = () => {
  const [isLoading, setLoading] = useState(false);
  const [heroes, setHeroes] = useState({ list: [] });
  const [query, setQuery] = useState('');
  // handling changes in search box
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  // to send request to API
  const searchHandler = async () => {
    setLoading(true);
    await Axios.get(url + query)
      .then((heroesData) => {
        if (Array.isArray(heroesData.data.results)) {
          console.log(heroesData.response);
          setHeroes({ list: heroesData.data.results });
          setLoading(false);
        } else {
          setHeroes({ list: [] });
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };
  // handling enter key pressed
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };
  return (
    <div className="App">
      <div className="lg:flex py-10 justify-center">
        <input
          type="text"
          placeholder="Enter hero name"
          className="mt-2 border-2 rounded focus:outline-none px-2"
          onChange={onChangeHandler}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={searchHandler}
          className="mt-2 bg-blue-500 focus:outline-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
      <div className="lg:flex justify-center">
        <MoonLoader loading={isLoading} size={40} />
      </div>
    </div>
  );
};

export default SearchBar;