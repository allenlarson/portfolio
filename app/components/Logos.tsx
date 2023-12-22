import Image from 'next/image';

const Logos = () => {
  const logos = [
    {
      name: 'Revance',
      url: '/images/logos/revance.webp',
    },
    {
      name: 'Revance Aesthetics',
      url: '/images/logos/RA.webp',
    },
    {
      name: 'Merz',
      url: '/images/logos/merz.webp',
    },
    {
      name: 'RHA Collection',
      url: '/images/logos/rha-collection.webp',
    },
    {
      name: 'Xperience',
      url: '/images/logos/Xperience.webp',
    },
    {
      name: 'Daxxify',
      url: '/images/logos/daxxify.webp',
    },
    {
      name: 'Opul',
      url: '/images/logos/opul.webp',
    },
    {
      name: 'Onyx Realty',
      url: '/images/logos/onyx-realty.webp',
    },
  ];

  return (
    <div className="flex flex-row flex-wrap contain md:gap-4 justify-center mt-20 md:mt-40">
      {logos.map(logo => (
        <span
          className="flex w-1/2 md:w-1/5 p-1 md:p-2 rounded-md hover:bg-slate-500/10 justify-center"
          key={logo.name}
        >
          <Image width={183} height={103} src={logo.url} alt={logo.name} />
        </span>
      ))}
    </div>
  );
};

export default Logos;
