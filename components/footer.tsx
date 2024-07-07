import React from "react";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaRegClock, FaRegCopyright } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  const t = useTranslations("footer");
  const n = useTranslations("nav");

  const locale = useLocale(); // Get the current locale
  return (
    <>
      <div className="bg-[#1E1E1E] flex flex-col md:flex-row justify-between py-20 px-10 md:px-24 text-white">
        <div className="flex flex-col gap-5 w-full mb-10 md:mb-0  md:w-1/3">
          <Image
            width={80}
            height={80}
            src="/logo.png"
            alt="logo"
            className="bg-white p-1 text-end"
          />
          <p className="lato-regular mt-2 text-[#bcbcbc] text-sm w-72">
            {t("discover")}
          </p>
          <div className="flex gap-2">
            <Link
              href="https://www.instagram.com/siamrestaurantdubai/"
              className="p-2 bg-[#353535] transition-all duration-300 hover:bg-red-500"
            >
              <GrInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/siamrestaurantdubai/"
              className="p-2 bg-[#353535] transition-all duration-300 hover:bg-red-500"
            >
              <FaFacebookSquare />
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full mb-6 md:mb-0  md:w-1/3">
          <h2 className="font-zilla text-2xl -tracking-tight font-extrabold pb-1">
            {/* <span className={`text-red-500 ${locale == "en" ? "hidden" : ""}`}>
              .
            </span> */}
            {t("address")}
            <span className={`text-red-500 `}>.</span>
          </h2>
          <div className="mt-8 md:mt-10 w-full md:w-1/2 gap-2 flex flex-col ">
            <div className="flex items-start gap-3 border-b-2 border-[#353535] pb-3">
              <FaLocationDot className="mt-1 text-red-500 " /> {t("address1")}
            </div>
            <div className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-red-500" /> {t("address2")}
            </div>
          </div>
        </div>
        <div className="mx-auto w-full mb-6 md:mb-0   md:w-1/3">
          <h2 className="font-zilla text-2xl -tracking-tight font-extrabold pb-1">
            {t("hours")}
            <span className={`text-red-500 text-2xl font-bold  `}>.</span>
          </h2>
          <p className="lowercase lato-regular text-[#bcbcbc] text-sm mt-6 md:mt-10">
            {t("we are open")}
          </p>
          <div className="mt-4">
            <p className="flex items-center gap-3 font-mont border-b-2 border-[#353535]  pb-3 text-sm">
              <span className="text-red-500">
                <FaRegClock />
              </span>
              {t("days1")}
            </p>
          </div>
          <div className="mt-4">
            <p className="flex items-center gap-3 font-mont  pb-3 text-sm">
              <span className="text-red-500">
                <FaRegClock />
              </span>
              {t("days2")}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black  md:flex md:justify-around py-4">
        <p className="text-[14px] font-mont text-[#717171] flex justify-center md:justify-start items-center gap-1 font-medium">
          <FaRegCopyright />
          <span className={`${locale == "ar" ? "hidden" : " "}`}>
            COPYRIGHT
          </span>
          <span className={`text-white ${locale == "ar" ? "hidden" : ""}`}>
            {t("siam")}
          </span>
          {t("copyrights")}
          <span className={`text-white ${locale == "en" ? "hidden" : ""}`}>
            {t("siam")}
          </span>
        </p>
        <p className="flex justify-center md:justify-start">
          <Link
            href="/menu"
            className="text-[14px] font-mont text-[#717171] flex items-center gap-1 font-medium uppercase hover:text-white transition-all duration-300"
          >
            {n("menu")}
          </Link>
          <span className="text-[#717171] px-2">|</span>
          <Link
            href="/login"
            className="text-[14px] font-mont text-[#717171] flex items-center gap-1 font-medium uppercase hover:text-white transition-all duration-300"
          >
            {n("reservation")}
          </Link>
          <span className="text-[#717171] px-2">|</span>
          <Link
            href="/about"
            className="text-[14px] font-mont text-[#717171] flex items-center gap-1 font-medium uppercase hover:text-white transition-all duration-300"
          >
            {n("about")}
          </Link>
          <span className="text-[#717171] px-2">|</span>
          <Link
            href="/reservation"
            className="text-[14px] font-mont text-[#717171] font-medium uppercase hover:text-white transition-all duration-300"
          >
            {n("login")}
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
