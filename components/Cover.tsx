// "use client";

import { useTranslations } from "next-intl";
import { PiForkKnifeFill } from "react-icons/pi";

import Button from "./Button";
import Overlay from "./overlay";

const Cover = () => {
  // const locale = useRouter();
  const t = useTranslations("Cover");

  return (
    <div className="relative h-[40dvh] md:h-[80vh] lg:h-[100dvh] overflow-hidden">
      <div
        className={`text-white top-1/2 md:top-1/2 -translate-y-1/2 ${
          "ar" === "ar" ? "text-right" : "text-left"
        } px-5 mt-5 sm:mt-0 md:px-32 absolute z-10`}
        data-aos="fade-right"
      >
        <p className="font-mont uppercase text-sm lg:text-xl tracking-[5px] md:tracking-[10px]">
          {t("presented the best")}
        </p>
        <h3 className="font-zilla capitalize tracking-[-1px] md:tracking-[-4px] text-[30px] md:text-[60px] lg:text-[80px] font-extrabold">
          {t("food for family")}
          <span className="text-red-500">.</span>
        </h3>
        <p className="md:w-8/12 text-xs lg:text-base">{t("get you fav")}</p>
        <Button optionalStyle="mx-auto lg:mx-0">
          <PiForkKnifeFill />
          {t("view food")}
        </Button>
      </div>

      <Overlay />
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
