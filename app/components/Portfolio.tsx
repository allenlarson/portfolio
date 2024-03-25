import { PortfolioData } from '@/data/Portfolio';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="pb-20 md:pb-20 flex flex-row w-full flex-wrap"
    >
      <div className="w-full">
        <h2 className="font-bold uppercase tracking-widest text-2xl md:text-xl mb-6 text-center">
          Portfolio
        </h2>
      </div>
      <div className="container m-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {PortfolioData.map((data, index) => (
          <Link href={data.url} key={index} target="_blank">
            <div>
              <img className="rounded-md" alt={data.title} src={data.image} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
