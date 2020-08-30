import React, { useState } from 'react';
import './App.css';
import HeroCard from './components/HeroCard';
import Axios from 'axios';

const url = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/257638918909912/search/';
function App() {
  const [heroes, setHeroes] = useState(
    sessionStorage.getItem('list')
      ? { list: JSON.parse(sessionStorage.getItem('list')) }
      : { list: [] }
  );
  const [query, setQuery] = useState(
    sessionStorage.getItem('query') ? sessionStorage.getItem('query') : ''
  );
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
    sessionStorage.setItem('query', e.target.value);
  };
  const searchHandler = async () => {
    await Axios.get(url + query).then((heroesData) => {
      if (heroesData.response === 'error') {
        console.log(heroesData.response);
        setHeroes({ list: [] });
      } else {
        setHeroes({ list: heroesData.data.results });
        sessionStorage.setItem('list', JSON.stringify(heroesData.data.results));
      }
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
          value={query}
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {typeof heroes.list !== undefined && Array.isArray(heroes.list) ? (
          heroes.list.map((hero) => (
            <div key={hero.id}>
              <HeroCard heroData={hero} />
            </div>
          ))
        ) : (
          <h1>Sorry no heroes found for your search.</h1>
        )}
      </div>
    </div>
  );
}

export default App;
