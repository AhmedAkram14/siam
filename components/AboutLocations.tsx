import React from 'react';

import {
  useLocale,
  useTranslations,
} from 'next-intl';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';

import Overlay from './overlay';

const AboutLocations = () => {
  const f = useTranslations("footer");
  const t = useTranslations("about");
  const locale = useLocale(); // Get the current locale

  return (
    <div className="relative  w-full  h-[40dvh] md:h-[80vh] lg:h-[90dvh]  mb-20">
      <div
        className={`text-white w-full sm:mt-0 md:px-32 absolute z-20 top-1/2 -translate-y-1/2 justify-center items-center`}
        data-aos="fade-right"
      >
        <h3
          className={`uppercase text-center text-[80px] md:text-[100px]  lg:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/40 to-red-500/40`}
        >
          {t("invite")}
          <span className="text-red-500 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/40 to-red-500/40">
            .
          </span>
        </h3>
        <p
          className={`font-zilla text-center ${
            locale == "en" ? "-mt-14" : "-mt-8"
          }  md:-mt-16 lg:-mt-20 text-2xl md:text-4xl lg:text-5xl font-extrabold leading-[55px]`}
        >
          {t("Visit our")}{" "}
          <span className="bg-red-500 text-white p-1 pt-2 ps-2 italic">
            {t("locations")}
          </span>{" "}
          {t("around dubai")}
        </p>
        <div className="mx-auto justify-center px-7 gap-8 md:gap-14 lg:gap-20 flex mt-8 md:mt-20 lg:mt-32">
          <div className="flex flex-col items-start">
            <h3 className="bg-red-500 w-fit font-bold text-lg md:text-xl lg:text-2xl p-2  italic">
              {t("port rashid")}
            </h3>
            <p className="flex md:items-center gap-2 md:gap-6 text-base md:text-lg mt-6">
              <FaLocationDot className="mt-2" /> {f("address1")}
            </p>
            <p className="flex md:items-center gap-2 md:gap-6 mt-3">
              <BiSolidPhoneCall className="mt-2" /> 1237-654-321
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="bg-red-500 w-fit font-bold text-lg md:text-xl lg:text-2xl p-2  italic">
              {t("alghurir")}
            </h3>
            <p className="flex md:items-center gap-2 md:gap-6 text-base md:text-lg mt-6">
              <FaLocationDot className="mt-2" /> {f("address2")}
            </p>
            <p className="flex md:items-center gap-2 md:gap-6 mt-3">
              <BiSolidPhoneCall className="mt-2" /> 1237-654-321
            </p>
          </div>
        </div>
      </div>

      <Overlay optionalStyle="z-10" />
      <div className="flex justify-center items-center h-full">
        <img
          src="/IMG-20240414-WA0056.png"
          className={`object-cover h-full w-full `}
          alt="Cover"
          // width={1000}
          // height={1000}
        />
      </div>
    </div>
  );
};

export default AboutLocations;
