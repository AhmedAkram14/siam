import React from 'react';

import { GiKnifeFork } from 'react-icons/gi';
import { RxDividerHorizontal } from 'react-icons/rx';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import SliderCard from './sliderCard';

interface CarouselSpacingProps { }

const CarouselSpacing: React.FC<CarouselSpacingProps> = () => {
  return (
    <div className="pt-24 pb-24  bg-stone-100 w-full">
      <h2 className="text-center text-3xl uppercase">Siam Popular Dishes</h2>
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
      <p className="w-[70%] mb-8 mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor
        provident recusandae harum omnis quae perferendis officia, ducimus
        necessitatibus fugit perspiciatis adipisci expedita corporis tenetur in
        dicta aut reprehenderit magnam.
      </p>

      <Carousel
        className="max-w-[80%] m-auto">
        <CarouselContent className="m-auto">
          {/* {Array.from({ length: 5 }).map((_, index) => ( */}
          <SliderCard
            imgsrc="/pad thai.jpg"
            imgalt="pad thai"
            title="Pad Thai with crap"
            price={50}
          />
          <SliderCard
            imgsrc="/fried tailipa with sweets.jpg"
            imgalt="fried tailipa"
            title="Fried tailipa with sweets"
            price={55}
          />
          <SliderCard
            imgsrc="/spicy minced duck salad.jpg"
            imgalt="spicy minced duck salad"
            title="Spicy minced duck salad"
            price={40}
          />
          <SliderCard
            imgsrc="/pad thai.jpg"
            imgalt="corn salad with shrimp"
            title="Corn salad with shrimp"
            price={40}
          />
          <SliderCard
            imgsrc="/pad thai.jpg"
            imgalt="corn salad with shrimp"
            title="Corn salad with shrimp"
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
