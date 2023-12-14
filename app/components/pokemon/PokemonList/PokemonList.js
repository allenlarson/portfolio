import PokemonCard from '../PokemonCard/PokemonCard';
import React from 'react';

function PokemonList({ pokemons }) {
  const renderCards = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
  });
  return renderCards;
}

export default PokemonList;
