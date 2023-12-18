'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import PokemonList from '../components/pokemon/PokemonList/PokemonList';
import SearchBar from '../components/pokemon/SearchBar/SearchBar';
import GenFilter from '../components/pokemon/GenFilter/GenFilter';

function PokemonView({ pokemons }) {
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const [filteredGen, setFilteredGen] = useState(pokemons);
  const [searchInput, setSearchInput] = useState('');

  const resetSearchBar = () => {
    setSearchInput('');
    setSearchedPokemon([]); // Reset search results
  };

  return (
    <div className="pokedex mt-52 container">
      <div
        className={`${styles.pokeSearch} flex p-2 m-4 bg-black rounded-xl items-center`}
      >
        <GenFilter
          pokemons={pokemons}
          filteredGen={setFilteredGen}
          resetSearchBar={resetSearchBar}
        />
        <SearchBar
          pokemons={filteredGen}
          search={setSearchedPokemon}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <div className="pokemon-list flex flex-wrap justify-center">
        {searchedPokemon.length !== 0 ? (
          <PokemonList pokemons={searchedPokemon} />
        ) : (
          <PokemonList pokemons={filteredGen} />
        )}
      </div>
    </div>
  );
}

export default PokemonView;
