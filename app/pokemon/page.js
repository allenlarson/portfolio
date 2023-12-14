import React from 'react';
import PokemonContainer from './Container';

export const metadata = {
  title: 'PokeDex',
  description: 'Gotta Catch em all! This is your real life Pokedex',
  robots: 'noindex',
};

const Page = () => {
  return (
    <>
      <PokemonContainer />
    </>
  );
};

export default Page;
