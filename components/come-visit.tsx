import React from "react";

import { useLocale, useTranslations } from "next-intl";
import { AiFillCar } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";

import Button from "./Button";
import Overlay from "./overlay";

const Visit = () => {
  const t = useTranslations("visit");
  const locale = useLocale(); // Get the current locale

  return (
    <div className="flex flex-col lg:flex-row ltr-component lg:h-[80vh]">
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
          <span className={`text-red-500 ${locale == "en" ? "hidden" : ""}`}>
            .
          </span>
          {t("come")}
          <span className={`text-red-500 ${locale == "ar" ? "hidden" : ""}`}>
            .
          </span>
        </h2>
        <p className="text-neutral-500 font-mont text-lg italic mb-3">
          {t("choose")}
        </p>
        <img
          src="https://theme.ridianur.com/gehou/wp-content/uploads/2018/03/divider.png"
          alt="tree"
          className="mx-auto opacity-30 mb-8"
        />
        <p className="text-neutral-500 mx-auto mb-3 lg:px-10 font-mont">
          {t("Experience the authentic")}
        </p>
        <Button optionalStyle="mx-auto border-2 border-red-500 hover:scale-90	">
          <AiFillCar />
          {t("contact")}
        </Button>
      </div>
    </div>
  );
};

export default Visit;
