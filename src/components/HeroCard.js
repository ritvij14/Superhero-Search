import React, { useState } from 'react';

const HeroCard = ({ heroData }) => {
  const [name] = useState(heroData.name);
  console.log(heroData);
  return (
    <div className="rounded mx-4 my-5 shadow-xl border-4 border-aqua">
      <img
        className="h-64 w-full object-contain"
        src={heroData.image.url}
        alt="hero_image"
      />
      <h1 className="text-xl">{name}</h1>
      <div>
        <h2 className="text-lg">Powerstats:-</h2>
        <div className="flex pl-2">
          <p className="text-xs mx-1">
            Intelligence: {heroData.powerstats.intelligence}
          </p>
          <p className="text-xs mx-1">
            Strength: {heroData.powerstats.strength}
          </p>
          <p className="text-xs mx-1">Speed: {heroData.powerstats.speed}</p>
        </div>
        <div className="flex pl-2">
          <p className="text-xs mx-1">
            Durability: {heroData.powerstats.durability}
          </p>
          <p className="text-xs mx-1">Power: {heroData.powerstats.power}</p>
          <p className="text-xs mx-1">Combat: {heroData.powerstats.combat}</p>
        </div>
      </div>
    </div>
  );
};
//transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
export default HeroCard;
