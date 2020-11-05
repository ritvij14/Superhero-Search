  
import React, { useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const SearchBar = () => {
  const [isLoading, setLoading] = useState(false);
  // handling changes in search box
  const onChangeHandler = (e) => { };
  // to send request to API
  const searchHandler = async () => {
    setLoading(true);
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