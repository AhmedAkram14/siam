import React from "react";

import { useLocale, useTranslations } from "next-intl";
import { BiCartAdd } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card";

import Overlay from "./overlay";
import { CarouselItem } from "./ui/carousel";

interface CardContent {
  title: string;
  price: number;
  imgsrc: string;
  imgalt: string;
}

const SliderCard: React.FC<CardContent> = ({
  title,
  imgsrc,
  price,
  imgalt,
}) => {
  const t = useTranslations("popular");
  const locale = useLocale(); // Get the current locale
  return (
    <CarouselItem className=" lg:basis-1/3 p-0">
      <Card className="max-w-[450px]  mx-auto">
        <CardContent className="p-0 aspect-square relative overflow-hidden ">
          <div className="relative">
            <Overlay optionalStyle=" flex items-center justify-center gap-4">
              <BiCartAdd className="text-orange-500 text-4xl cursor-pointer" />
              <MdOutlineFavoriteBorder className="text-red-500 text-4xl cursor-pointer" />
            </Overlay>
            <img src={imgsrc} alt={imgalt} />
          </div>
          <div className="p-4 text-center">
            <h2 className="font-zilla text-2xl font-extrabold">{title}</h2>
            <div className="flex gap-1 justify-center my-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>

            <p className="text-red-500 font-bold">
              {price} {t("curr")}
            </p>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default SliderCard;
