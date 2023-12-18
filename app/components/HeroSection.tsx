'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import { TypeAnimation } from 'react-type-animation';

/* eslint-disable react/no-unescaped-entities */
export const HeroSection = () => {
  return (
    <section>
      <div className="mt-6 md:my-20 grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center sm:text-left pt-4">
          <h1 className="mb-4 text-4xl md:text-6xl font-bold bg-gradient-to-br from-amber-400 via-pink-600 to-violet-900 bg-clip-text text-transparent">
            Hello, I'm Allen
          </h1>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `I'm a Web Developer`,
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              `I'm a Graphic Designer`,
              1000,
              `I'm a Nerd`,
              1000,
              `I'm also a Corgi enthusiast`,
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
            className="text-3xl md:text-4xl font-bold"
          />

          <p className="mt-3 mb-8">
            Welcome to my digital playground, where lines of code transform into
            immersive online experiences. I'm Allen, a passionate and innovative
            web developer dedicated to crafting elegant and efficient solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link href="/contact">
              <Button
                variant="default"
                className="mr-2 w-full sm:w-fit"
                size="lg"
              >
                Contact Me
              </Button>
            </Link>
            <Link href="/Allen_Larson_Resume.pdf">
              <Button variant="secondary" className="w-full sm:w-fit" size="lg">
                Download PDF
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 m-auto">
          <Image
            src="/allen-larson-circle.png"
            className=""
            alt="Allen Larson Portfolio"
            width={300}
            height={300}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
