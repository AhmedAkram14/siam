import React from "react";

import { AiFillCar } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";

import Button from "./Button";
import Overlay from "./overlay";

const Visit = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="relative w-full lg:w-1/2">
        <Overlay />
        <img
          className="w-full h-full object-cover"
          src="/outside.png"
          alt="outside"
        />
      </div>
      <div className="text-center w-full  lg:w-1/2 p-12 lg:p-24 ">
        <div className="border-2 border-gray-300 w-[100px] h-[100px] mx-auto rounded-full flex justify-center items-center">
          <BsBuilding className="text-6xl text-gray-300" />
        </div>
        <h2 className="font-zilla text-5xl font-extrabold mb-5 mt-[-20px]">
          Come&Visit<span className="text-red-500">.</span>
        </h2>
        <p className="text-neutral-500 text-lg italic mb-3">
          Come and choose your favorite thai food
        </p>
        <img
          src="https://theme.ridianur.com/gehou/wp-content/uploads/2018/03/divider.png"
          alt="tree"
          className="mx-auto opacity-30 mb-8"
        />
        <p className="text-neutral-500 mx-auto mb-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
          iste sed tenetur dolores eveniet beatae officia autem nulla provident?
          Similique nostrum corporis dolore alias assumenda suscipit expedita
          vero veritatis laborum!
        </p>
        <Button optionalStyle="mx-auto border-2 border-red-500 hover:scale-90	">
          <AiFillCar />
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Visit;
