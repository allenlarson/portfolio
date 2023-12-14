import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

/* eslint-disable react/no-unescaped-entities */
export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left pt-4">
          <h1 className="text-white mb-4 text-4xl md:text-6xl font-bold">
            Hello, I'm Allen
          </h1>
          <p className="mb-6">
            Welcome to my digital playground, where lines of code transform into
            immersive online experiences. I am Allen, a passionate and
            innovative web developer dedicated to crafting elegant and efficient
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button variant="default" className="mr-2 w-full sm:w-fit">
                Contact Me
              </Button>
            </Link>
            <Link href="#">
              <Button variant="secondary" className="w-full sm:w-fit">
                Download CSV
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
