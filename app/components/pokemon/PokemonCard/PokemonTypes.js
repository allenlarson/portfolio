import React from 'react';

function PokemonTypes({ types, id }) {
  const typeBg = {
    grass: '#40B55B',
    poison: '#A040A0',
    fire: '#F08030',
    ice: '#98D8D8',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: 'green',
    water: 'blue',
    normal: 'gray',
    fairy: 'pink',
    ground: 'brown',
    fighting: 'orange',
    electric: '#ffd400',
    steel: 'silver',
    rock: '#b99045',
    dragon: '#910091',
    ghost: '#550055',
    dark: '#313131',
  };

  const pokemonType = types.map(type => {
    return (
      <span
        key={`${id} ${type}`}
        style={{ backgroundColor: typeBg[type] }}
        className="text-right capitalize text-sm text-white m-1 p-1 px-3 rounded-lg inline-block"
      >
        {type}
      </span>
    );
  });

  return (
    <div>
      <div>{pokemonType}</div>
    </div>
  );
}

export default PokemonTypes;
