'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Grip, X } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#0c0c0c] bg-opacity-90 container">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <Link href="/">
          <Image
            src="/al-logo.png"
            alt="Allen Larson Logo"
            width={70}
            height={70}
            quality={100}
          />
        </Link>
        <div className="mobile block md:hidden">
          {!isOpen ? (
            <Button
              onClick={() => setIsOpen(prev => !prev)}
              variant="ghost"
              className="px-2"
            >
              <Grip className="h-6 w-6" />
            </Button>
          ) : (
            <Button
              onClick={() => setIsOpen(prev => !prev)}
              variant="ghost"
              className="px-2"
            >
              <X />
            </Button>
          )}
        </div>
        <div className="menu hidden md:flex md:flex-row md:w-auto" id="navbar">
          <ul className="flex flex-row p-3 md:space-x-8 mt-0">
            {menu.map((item, title) => (
              <li key={title}>
                <NavMenu url={item.url} title={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? (
        <ul className="flex flex-col py-6 items-center font-bold">
          {menu.map((item, title) => (
            <li key={title} className="p-2 m-1">
              <MobileMenu url={item.url} title={item.title} />
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
