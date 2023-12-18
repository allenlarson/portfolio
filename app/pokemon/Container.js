import {
  fetchAllPokemon,
  fetchDamageTypes,
  fetchPokeInfo,
  fetchSpecies,
} from '../../api/pokemon/route';
import PokemonView from './View';

let pokemons = [];

const PokemonContainer = async () => {
  const data = await fetchAllPokemon();

  const getId = url => {
    return url?.split('/').slice(-2, -1)[0];
  };

  const pokemonIds = data.map(pokemon => {
    let pokemonId = getId(pokemon.url);
    return pokemonId;
  });

  let pokemonPromise = pokemonIds.map(async id => {
    const data = await fetchPokeInfo(id);
    const speciesData = await fetchSpecies(id);

    const types = data.types.map(type => {
      return type.type.name;
    });

    const damageInfoPromise = types.map(async type => {
      const typeData = await fetchDamageTypes(type);
      return typeData;
    });

    const damageInfo = await Promise.all(damageInfoPromise);

    const doubleDamageArr = damageInfo.map(dd => {
      return dd.double_damage_from.map(doubleDamage => {
        return doubleDamage.name;
      });
    });

    const halfDamageArr = damageInfo.map(hd => {
      return hd.half_damage_from.map(halfDamage => {
        return halfDamage.name;
      });
    });

    let combinedDamageArr = [
      ...new Set([...doubleDamageArr[0], ...(doubleDamageArr[1] || [])]),
    ];
    let combinedHalfDamageArr = [
      ...new Set([...halfDamageArr[0], ...(halfDamageArr[1] || [])]),
    ];

    let weakness = combinedDamageArr.filter(
      type => !combinedHalfDamageArr.includes(type)
    );

    const description = speciesData.flavor_text_entries.filter(
      flavorTextArr => {
        return flavorTextArr.language.name === 'en';
      }
    );

    const category = speciesData.genera.filter(genusArr => {
      return genusArr.language.name === 'en';
    });

    let pokemonObject = {
      id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types,
      color: speciesData.color.name,
      description: description[0].flavor_text,
      category: category[0].genus,
      generation: speciesData.generation.name,
      weakness,
    };

    return pokemonObject;
  });

  pokemons = await Promise.all(pokemonPromise);

  return (
    <>
      <PokemonView pokemons={pokemons} />
    </>
  );
};

export default PokemonContainer;
