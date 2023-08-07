/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Subscribe: React.FC = () => (
  <div className=" flex items-center cursor-pointer mt-2 px-4 ">
    <Link
      href="https://sendfox.com/vonnaden"
      style={{ textDecoration: 'none' }}
    >
      <button className=" bg-primary h-auto p-2 rounded-md text-white  ">
        Subscribe
      </button>
    </Link>
  </div>
);

const NavBar = () => {
  return (
    <nav className="flex justify-between gap-40">
      <Link
        href="/"
        className='className="flex items-center cursor-pointer mt-5'
      >
        <div className="flex ">
          <Image
            alt="profile icon"
            src="/github_image.png"
            width={90}
            height={90}
            className="md:ml-0 h-20 w-20 mt-6 md:h-32 md:w-32 md:mt-0"
          />
          <span className="text-primary text-6xl mt-7 ml-2 font-black pb-4 hidden md:block">
            Existential Nihilism
          </span>
          <span className="text-primary text-3xl mt-7 ml-2 font-black pb-4 block md:hidden">
            Existential Nihilism
          </span>
        </div>
      </Link>

      <Subscribe />
    </nav>
  );
};

export default NavBar;
