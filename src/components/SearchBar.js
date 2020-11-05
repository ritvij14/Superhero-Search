import React from 'react'

const SearchBar = () => {
  const onChangeHandler = (e) => { };
  const searchHandler = async () => { };
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
    </div>
  );
};

export default SearchBar;
