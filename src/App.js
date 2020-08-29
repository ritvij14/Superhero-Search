import React, { useState } from 'react';
import './App.css';
import HeroCard from './components/HeroCard';
import Axios from 'axios';

const url = 'https://superheroapi.com/api/257638918909912/search/';
function App() {
  const [heroes, setHeroes] = useState({ list: [], errorMessage: '' });
  const [query, setQuery] = useState('');
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const searchHandler = async (e) => {
    e.preventDefault();
    await Axios.get(url + query)
      .then((heroesData) => {
        if (heroesData.response === 'error') {
          console.log(heroesData.response);
          setHeroes({ list: [], errorMessage: heroesData.response });
        } else {
          setHeroes({ list: heroesData.data.results });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div className="flex py-10 justify-center">
        <input
          type="text"
          placeholder="Enter hero name"
          className="border-2 rounded focus:outline-none px-2"
          onChange={onChangeHandler}
        />
        <button
          onClick={searchHandler}
          className="bg-blue-500 focus:outline-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {heroes.list.length !== 0 ? (
          heroes.map((hero) => (
            <div key={hero.id}>
              <HeroCard heroData={hero} />
            </div>
          ))
        ) : (
          <h1>{heroes.errorMessage}</h1>
        )}
      </div>
    </div>
  );
}

export default App;
