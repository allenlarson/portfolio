'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css';
import PokemonTypes from './PokemonTypes';

const PokemonCard = ({ pokemon }) => {
  const [flip, setFlip] = useState(false); // flip cards

  return (
    <>
      <div
        key={pokemon.id}
        onClick={() => setFlip(!flip)}
        className={`${
          styles.pokemonCard
        } rounded-2xl p-3 m-2 bg-cover bg-top flex justify-center items-center ${
          flip ? styles.flip : ''
        }`}
        style={{
          backgroundImage: `url(/images/pokemonBg/front/${pokemon.color}_front.png)`,
        }}
      >
        <div className={styles.front}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            width={286}
            height={286}
            className="m-2"
          />
        </div>
        <div className={`${styles.pokecard} ${styles.back} p-3`}>
          <div className="top-card flex flex-row">
            <div className="pokemon-image flex-grow">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
                width={162}
                height={162}
                className=""
              />
            </div>
            <div className="pokemon-details text-right flex-col">
              <p className="text-zinc-600 text-right bg-white bg-opacity-80 p-2 rounded-3xl inline-block m-0">
                #{pokemon.id}
              </p>
              <h2 className="text-zinc-600 text-right capitalize text-xl leading-3">
                {pokemon.name}
              </h2>

              <PokemonTypes types={pokemon.types} id={pokemon.id} />
            </div>
          </div>
          <div className="middle-card">
            <p className="pokemon-desc text-zinc-600 text-base">
              {pokemon.description.replace('\f', ' ')}
            </p>
            <div className="rounded-xl pokemon-stats text-zinc-600 flex text-base p-1 bg-white bg-opacity-50">
              <span className="flex-auto leading-3">
                <p className="text-center">Height</p>
                <p className="text-center">{pokemon.height} m</p>
              </span>
              <span className="flex-auto p-0 leading-3">
                <p className="text-center p-0">Category</p>
                <p className="text-center p-0">
                  {pokemon.category.replace('Pokémon', '')}
                </p>
              </span>
              <span className="flex-auto p-0 leading-3">
                <p className="text-center p-0">Weight</p>
                <p className="text-center p-0">{pokemon.weight} kgs</p>
              </span>
            </div>
          </div>
          <div>
            <p className="text-zinc-600 text-base text-left">Weaknesses</p>
            <span className="weakness-pills flex flex-wrap">
              <PokemonTypes types={pokemon.weakness} id={pokemon.id} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
