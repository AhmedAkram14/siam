import React from "react";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Reservation = () => {
  const t = useTranslations("reservation");
  const locale = useLocale(); // Get the current locale
  return (
    <div className="pt-24 pb-24  bg-stone-100 ltr-component">
      <div className="w-[90%] sm:w-[60%]  lg:w-[50%] xl:w-[40%] bg-white shadow-xl py-8 px-6  md:px-10 lg:px-0  lg:ps-10  mx-auto relative">
        <div className="w-full lg:w-2/3">
          <h3 className="text-center uppercase  font-mono tracking-widest font-bold text-sm text-red-500">
            {t("table reservation")}
          </h3>
          <h1 className="text-center  font-zilla  capitalize font-zilla font-semiBold text-3xl lg:text-3xl xl:text-5xl mt-3 mb-3">
            {t("book your table")}
          </h1>
          <Image
            src="/resta-img20.png"
            width={100}
            height={100}
            alt="sperator"
            className="mx-auto"
          />
          <div className="flex max-w-full">
            <form action="" className="w-full pb-36 lg:pb-0 ">
              <input
                type="text"
                placeholder={t("name")}
                className="p-3 border-2 border-red-200 outline-none focus:border-red-500 mt-7 w-full block"
              />
              <div className="flex gap-6">
                <input
                  type="date"
                  className="p-3 border-2  border-red-200 outline-none focus:border-red-500 mt-7 w-1/2"
                />
                <input
                  type="time"
                  className="p-3 border-2 border-red-200 outline-none focus:border-red-500 mt-7 w-1/2"
                />
              </div>
              <div className="flex gap-6">
                <input
                  type="number"
                  placeholder={t("phone")}
                  className="p-3 border-2 border-red-200 outline-none focus:border-red-500 mt-7 w-full block"
                />
                <input
                  type="number"
                  placeholder={t("guests")}
                  className="p-3 border-2 border-red-200 outline-none focus:border-red-500 mt-7 w-full block"
                />
              </div>
              <input
                type="submit"
                value={t("book")}
                className="p-3 border-2 mt-7 bg-red-500 border-red-500 hover:border-red-500 hover:scale-90 hover:text-red-500 cursor-pointer duration-300 transition-all  hover:bg-white outline-none  w-full block font-zilla text-2xl  text-white"
              />
            </form>
            <div className="w-full lg:w-3/4 xl:w-full brrr  absolute top-full lg:top-1/2 -translate-y-1/2 left-1/2 lg:left-full -translate-x-1/2">
              <Image
                src="/ZKA_9918.png"
                width={1200}
                height={1200}
                alt="dish"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
