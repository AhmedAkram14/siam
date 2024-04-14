import React from 'react';

import Button from './Button';

const Cover = () => {
  return (
    <div className="relative h-[40dvh] md:h-[80vh] lg:h-[100dvh] overflow-hidden">
      <div className="text-white top-1/2 md:top-1/2 -translate-y-1/2 text-center md:text-left px-5 mt-5 sm:mt-0 md:px-32 absolute z-10">
        <p className="font-mont uppercase text-sm lg:text-xl tracking-[5px] md:tracking-[10px]	">
          presented the best
        </p>
        <h3 className=" font-zilla capitalize tracking-[-1px] md:tracking-[-4px] text-[30px] md:text-[60px] lg:text-[80px] font-extrabold">
          food for family<span className="text-red-500">.</span>
        </h3>
        <p className="md:w-8/12 text-xs lg:text-base">
          Get Your Favourite Thai Food Delivered to Your Doorstep from Siam
          Restaurant! Enjoy the taste of your favourite Thai cuisine from the
          comfort of your own home.
        </p>
        <Button>view food</Button>
      </div>

      <div className="absolute inset-0 bg-black opacity-70 "></div>
      <div className="flex justify-center items-center h-full">
        <img
          src="/cover.jpg"
          className="object-cover h-full w-full"
          alt="Cover"
        />
      </div>
    </div>
  );
};

export default Cover;
