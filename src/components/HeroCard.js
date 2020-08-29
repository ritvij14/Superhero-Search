import React, { useState } from 'react';

const HeroCard = ({ heroData }) => {
  const [name] = useState(heroData.name);
  // console.log(heroData);
  return (
    <div className="rounded mx-4 my-5 shadow-xl border-4 border-aqua">
      <img
        className="h-64 w-full object-contain"
        src={heroData.image.url}
        alt="hero_image"
      />
      <h1>{name}</h1>
    </div>
  );
};
//transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
export default HeroCard;
