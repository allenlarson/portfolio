import Image from 'next/image';
import Link from 'next/link';

const menu = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Experience',
    url: '/#experience',
  },
  {
    title: 'Projects',
    url: '/#projects',
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <Link href="/">
          <Image
            src="/al-logo.png"
            alt="Allen Larson Logo"
            width={80}
            height={80}
            quality={100}
          />
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          {menu.map(item => {
            return (
              <ul
                className="flex flex-row p-2 md:p-0 md:space-x-8 mt-0"
                key={item.title}
              >
                <Link href={item.url}>
                  <li>{item.title}</li>
                </Link>
              </ul>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
