import React from "react";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaRegCopyright } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] flex flex-col md:flex-row justify-between py-20 px-10 md:px-24 text-white">
        <div className="flex flex-col gap-5 w-full mb-10 md:mb-0  md:w-1/3">
          <Image
            width={60}
            height={60}
            src="/logo.png"
            alt="logo"
            className="bg-white p-1 text-end"
          />
          <p className="lato-regular text-[#bcbcbc] text-sm w-72">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            debitis exercitationem! Aspernatur eius repudiandae est dolore fugit
            non, optio neque perspiciatis perferendis nesciunt, dolorum
            delectus. Ea neque vitae accusantium debitis.
          </p>
          <div className="flex gap-2">
            <Link
              href="https://www.instagram.com/siamrestaurantdubai/"
              className="p-2 bg-[#353535] transition-all duration-300 hover:bg-red-500"
            >
              <GrInstagram />
            </Link>
            <Link
              href="https://www.instagram.com/siamrestaurantdubai/"
              className="p-2 bg-[#353535] transition-all duration-300 hover:bg-red-500"
            >
              <FaFacebookSquare />
            </Link>
          </div>
        </div>
        <div className="font-mont uppercase font-semibold text-base mx-auto w-full mb-10 md:mb-0  md:w-1/3">
          <h2 className="border-b-2 border-red-500 pb-1 w-[80px]">Gallery</h2>
          <div className="mt-8 md:mt-10 w-1/2 gap-2 overflow-hidden">
            <div className="flex gap-2">
              <div className="overflow-hidden">
                <Image
                  width={120}
                  height={120}
                  src="/pad thai.jpg"
                  alt="logo"
                  className="bg-white text-end hover:scale-110 transition-all duration-300 hover:rotate-6"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  width={120}
                  height={120}
                  src="/pad thai.jpg"
                  alt="logo"
                  className="bg-white text-end hover:scale-110 transition-all duration-300 hover:rotate-6"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  width={120}
                  height={120}
                  src="/pad thai.jpg"
                  alt="logo"
                  className="bg-white text-end hover:scale-110 transition-all duration-300 hover:rotate-6"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="overflow-hidden">
                <Image
                  width={120}
                  height={120}
                  src="/pad thai.jpg"
                  alt="logo"
                  className="bg-white text-end hover:scale-110 transition-all duration-300 hover:rotate-6"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  width={120}
                  height={120}
                  src="/pad thai.jpg"
                  alt="logo"
                  className="bg-white text-end hover:scale-110 transition-all duration-300 hover:rotate-6"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  width={120}
                  height={120}
                  src="/pad thai.jpg"
                  alt="logo"
                  className="bg-white text-end hover:scale-110 transition-all duration-300 hover:rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="font-mont uppercase font-semibold text-base w-full  md:w-1/3">
          <h2 className="border-b-2 border-red-500 pb-1  w-[80px]">Contact</h2>
          <p className="lowercase lato-regular text-[#bcbcbc] text-sm mt-8 md:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            pariatur
          </p>
          <div className="mt-4">
            <p className="flex items-center gap-3 font-mont border-b-2 border-[#353535] pb-3 text-sm">
              <span className="text-red-500">
                <FaLocationDot />
              </span>
              Dubai
            </p>
          </div>
          <div className="mt-4">
            <p className="flex items-center gap-3 font-mont border-b-2 border-[#353535] pb-3 text-sm">
              <span className="text-red-500">
                <MdEmail />
              </span>
              siam@siam.com
            </p>
          </div>
          <div className="mt-4">
            <p className="flex items-center gap-3 font-mont  pb-3 text-sm">
              <span className="text-red-500">
                <IoMdCall />
              </span>
              01064592515
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black  md:flex md:justify-around py-4">
        <p className="text-[14px] font-mont text-[#717171] flex justify-center md:justify-start items-center gap-1 font-medium">
          <FaRegCopyright />
          COPYRIGHT <span className="text-white">SIAM</span>. ALL RIGHTS
          RESERVED.
        </p>
        <p className="flex justify-center md:justify-start">
          <Link
            href="/menu"
            className="text-[14px] font-mont text-[#717171] flex items-center gap-1 font-medium uppercase hover:text-white transition-all duration-300"
          >
            Menu
          </Link>
          <span className="text-[#717171] px-2">|</span>
          <Link
            href="/contact"
            className="text-[14px] font-mont text-[#717171] flex items-center gap-1 font-medium uppercase hover:text-white transition-all duration-300"
          >
            Contcat
          </Link>
          <span className="text-[#717171] px-2">|</span>
          <Link
            href="/about"
            className="text-[14px] font-mont text-[#717171] flex items-center gap-1 font-medium uppercase hover:text-white transition-all duration-300"
          >
            About
          </Link>
          <span className="text-[#717171] px-2">|</span>
          <Link
            href="/reservation"
            className="text-[14px] font-mont text-[#717171] font-medium uppercase hover:text-white transition-all duration-300"
          >
            Reservation
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
