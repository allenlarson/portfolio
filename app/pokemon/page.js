import PokemonContainer from './Container';

export const metadata = {
  title: 'PokeDex',
  description: 'Gotta Catch em all! This is your real life Pokedex',
};

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0c0c]">
      <PokemonContainer />
    </div>
  );
};

export default Page;
