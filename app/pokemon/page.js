import PokemonContainer from './Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Pokédex',
  description: 'Gotta Catch em all!',
};

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0c0c]">
      <Navbar />
      <PokemonContainer />
      <Footer />
    </div>
  );
};

export default Page;
