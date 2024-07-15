import {
  useLocale,
  useTranslations,
} from 'next-intl';
import { PiForkKnifeFill } from 'react-icons/pi';

import Button from './Button';
import Overlay from './overlay';

const Cover = () => {
  const t = useTranslations("Cover");
  const locale = useLocale(); // Get the current locale

  return (
    <div className="relative  h-[40dvh] md:h-[80vh] lg:h-[100dvh] overflow-hidden">
      <div
        className={`text-white top-1/2 md:top-1/2 -translate-y-1/2 ${
          locale === "ar"
            ? "text-center md:text-right"
            : "text-center md:text-left"
        } px-5 mt-5 sm:mt-0 md:px-32 absolute z-20 `}
        data-aos="fade-right"
      >
        <p
          className={`font-mont uppercase text-sm lg:text-xl ${
            locale == "en" ? "tracking-[5px] md:tracking-[10px]" : ""
          }  ${locale === "ar" ? "main-arab" : ""}`}
        >
          {t("presented the best")}
        </p>
        <h3
          className={`font-zilla capitalize ${
            locale == "en" ? "tracking-[-1px]  md:tracking-[-4px]" : ""
          }  text-[30px] md:text-[60px] lg:text-[80px] font-extrabold ${
            locale === "ar" ? "sub-arab" : ""
          }`}
        >
          {t("food for family")}
          <span className="text-red-500">.</span>
        </h3>
        <p className="md:w-8/12 text-xs lg:text-base">{t("get you fav")}</p>
        <Button optionalStyle="mx-auto lg:mx-0">
          <PiForkKnifeFill />
          {t("view food")}
        </Button>
      </div>

      <Overlay optionalStyle="z-10" />
      <div className="flex justify-center items-center h-full">
        <img
          src="/cover.jpg"
          className={`object-cover h-full w-full ${
            locale === "ar" ? "transform scale-x-[-1]" : ""
          }`}
          alt="Cover"
          // width={1000}
          // height={1000}
        />
      </div>
    </div>
  );
};

export default Cover;
