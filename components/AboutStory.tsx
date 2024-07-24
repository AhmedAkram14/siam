import React from 'react';

import {
  useLocale,
  useTranslations,
} from 'next-intl';

const AboutStory = () => {
  const t = useTranslations("about");
  const locale = useLocale(); // Get the current locale

  return (
    <div className="flex flex-col lg:flex-row px-10 md:px-16 lg:px-24 mt-20 mb-20 items-center justify-between gap-10">
      <div className="w-full lg:w-1/2">
        <h1 className="uppercase text-[80px] md:text-[100px]  lg:text-[150px] font-bold text-zinc-200">
          {t("about")}
        </h1>
        {locale == "en" ? (
          <h2 className="font-zilla -mt-14 md:-mt-16 lg:-mt-20 text-3xl md:text-4xl lg:text-4xl font-extrabold leading-[60px]">
            {t("the long story of")} <br />{" "}
            <span className="bg-red-500 text-white p-1 pt-2 ps-2 italic">
              {t("our")}
            </span>{" "}
            {t("journey")}
          </h2>
        ) : (
          <h2 className="font-zilla -mt-8 md:-mt-16 lg:-mt-20 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[55px]">
            {t("the long story of")} <br /> {t("journey")}{" "}
            <span className="bg-red-500 text-white p-1 pt-2 ps-2 italic">
              {t("our")}
            </span>{" "}
          </h2>
        )}
        <p className="mt-10 text-[#898989] open-font leading-7">
          {t("story1")}
        </p>
        <p className="mt-5 text-[#898989] open-font leading-7">{t("story2")}</p>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          className="object-cover"
          src="https://theme.ridianur.com/gehou/wp-content/uploads/2018/03/about.jpg"
          alt="about story"
        />
      </div>
    </div>
  );
};

export default AboutStory;
