import React from 'react';
import styles from '../../../pokemon/styles.module.css';

function SearchBar({ pokemons, search }) {
  const handleSearch = event => {
    const searchText = event.target.value;
    const newSearch = pokemons.filter(pokemon => {
      return pokemon.name.includes(searchText.toLowerCase());
    });
    if (searchText === '') {
      search([]);
    } else {
      search(newSearch);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon (1-151)..."
        className={`${styles.search} flex-end`}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
