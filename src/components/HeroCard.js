import React from 'react';

const HeroCard = ({ heroData }) => {
  // console.log(heroData);
  return (
    <div className="rounded mx-4 my-5 shadow-xl border-4 border-aqua">
      <img
        className="h-64 w-full object-contain"
        src={heroData.image.url}
        alt="hero_image"
      />
      <h1 className="text-xl">{heroData.name}</h1>
      <div className="border-b-2 border-aqua">
        <h2 className="text-lg">Powerstats:</h2>
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
      <div className="border-b-2 border-aqua">
        <h1 className="text-lg">Personal Info:</h1>
        <p className="text-left pl-2 text-sm">
          Name: {heroData.biography['full-name']}
        </p>
        <p className="text-left pl-2 text-sm">Aliases:</p>
        <ul className="list-inside">
          {heroData.biography.aliases.slice(0, 3).map((alias) => (
            <li className="text-xs text-left pl-3">{alias}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-left pl-2 text-sm">Appearance:</p>
        <p className="text-xs text-left pl-3">
          Gender: {heroData.appearance.gender}
        </p>
        <p className="text-xs text-left pl-3">
          Height: {heroData.appearance.height[0] + '"'}
        </p>
        <p className="text-xs text-left pl-3">
          Weight: {heroData.appearance.weight[0]}
        </p>
      </div>
    </div>
  );
};
//transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
export default HeroCard;
