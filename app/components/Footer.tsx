import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex flex-col text-center text-sm text-slate-500  py-8">
        <p className="">Copyright © 2024 AllenLarson.net</p>
        <p>
          Build with{' '}
          <Link href="https://nextjs.org" target="_blank">
            Next.js
          </Link>{' '}
          and{' '}
          <Link href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </Link>
          .
        </p>
        <p>
          Deployed with{' '}
          <Link href="https://vercel.com" target="_blank">
            Vercel
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
