import React from "react";

import { useLocale, useTranslations } from "next-intl";
import { GiKnifeFork } from "react-icons/gi";
import { RxDividerHorizontal } from "react-icons/rx";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SliderCard from "./sliderCard";

interface CarouselSpacingProps {}

const CarouselSpacing: React.FC<CarouselSpacingProps> = () => {
  const t = useTranslations("popular");
  const locale = useLocale(); // Get the current locale
  return (
    <div className="pt-24 pb-24  bg-stone-100 w-full">
      <h2 className="text-center text-3xl uppercase">
        {t("siam popular dishes")}
      </h2>
      <div className="flex justify-center mt-2 mb-2">
        <span className="text-[#999999] text-[50px]">
          <RxDividerHorizontal />
        </span>
        <span className="text-[#999999] text-[50px]">
          <GiKnifeFork />
        </span>
        <span className="text-[#999999] text-[50px]">
          <RxDividerHorizontal />
        </span>
      </div>
      <p className="w-[70%] mb-8 mx-auto text-center">{t("discover")}</p>

      <Carousel className="max-w-[80%] m-auto">
        <CarouselContent className="m-auto">
          {/* {Array.from({ length: 5 }).map((_, index) => ( */}
          <SliderCard
            imgsrc="/pad thai.jpg"
            imgalt="pad thai"
            title={t("pad thai")}
            price={50}
          />
          <SliderCard
            imgsrc="/fried tailipa with sweets.jpg"
            imgalt="fried tailipa"
            title={t("Fried tilapia")}
            price={55}
          />
          <SliderCard
            imgsrc="/spicy minced duck salad.jpg"
            imgalt="spicy minced duck salad"
            title={t("Spicy minced")}
            price={40}
          />
          <SliderCard
            imgsrc="/pad thai.jpg"
            imgalt="corn salad with shrimp"
            title={t("Corn salad")}
            price={40}
          />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSpacing;
