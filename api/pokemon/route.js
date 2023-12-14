import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2';

// Function to fetch all Pokemon from 1 to 999, etc
export const fetchAllPokemon = async () => {
  try {
    const response = await axios.get(`${baseURL}/pokemon`, {
      params: { limit: 251 },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return [];
  }
};

// Function to fetch the pokemon's BG color, Description, and category.
export const fetchSpecies = async id => {
  try {
    const response = await axios.get(`${baseURL}/pokemon-species/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon color:', error);
    return [];
  }
};

// Function to fetch the pokemon's height and weight
export const fetchPokeInfo = async name => {
  try {
    const response = await axios.get(`${baseURL}/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return [];
  }
};

// Function to fetch the pokemon's type effectiveness
export const fetchDamageTypes = async type => {
  try {
    const response = await axios.get(`${baseURL}/type/${type}`);
    return response.data.damage_relations;
  } catch (error) {
    data;
    console.error('Error fetching Pokemon :', error);
    return [];
  }
};
