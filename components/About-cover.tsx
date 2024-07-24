import React from 'react';

import {
  useLocale,
  useTranslations,
} from 'next-intl';

import Overlay from './overlay';

const AboutCover = () => {
  const t = useTranslations("about");
  const locale = useLocale(); // Get the current locale
  return (
    <div className="relative  h-[40dvh] md:h-[80vh] lg:h-[90dvh] overflow-hidden">
      <div
        className={`text-white w-2/3 top-1/2 mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-5 mt-5 sm:mt-0 md:px-32 absolute z-20 `}
        data-aos="fade-right"
      >
        <p
          className={`font-mont uppercase text-sm lg:text-xl ${
            locale == "en" ? "tracking-[5px] md:tracking-[10px]" : ""
          }  ${locale === "ar" ? "main-arab" : ""}`}
        >
          {t("history")}
        </p>
        <h3
          className={`font-zilla capitalize ${
            locale == "en" ? "tracking-[-1px] md:tracking-[-4px]" : ""
          }  text-[30px] md:text-[60px] lg:text-[90px] font-extrabold ${
            locale === "ar" ? "sub-arab" : ""
          }`}
        >
          {t("about us")}
          <span className="text-red-500">.</span>
        </h3>
        <p className="text-xs lg:text-lg w-full">{t("get you fav")}</p>
      </div>

      <Overlay optionalStyle="z-10" />
      <div className="flex justify-center items-center h-full">
        <img
          src="/IMG-20240414-WA0066.jpg"
          className={`object-cover h-full w-full `}
          alt="Cover"
          // width={1000}
          // height={1000}
        />
      </div>
    </div>
  );
};

export default AboutCover;
