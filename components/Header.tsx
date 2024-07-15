"use client";
import React, { useContext, useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from '../navigation';
import LocaleSwitcher from "./Locale-Switcher";
import { AuthContext } from "@/context/AuthContext";

const Header = ({ locale }: { locale: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-colors duration-300 ${scrolled ? "bg-black bg-opacity-50" : "bg-transparent"
        }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" locale={locale as "ar" | "en" | undefined} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              // className="h-8 w-auto"
              width="75"
              height="75"
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen((mobileMenu) => !mobileMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            locale={locale as "ar" | "en" | undefined}
            className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300 font-semibold font-zilla leading-6 "
          >
            {t("home")}
          </Link>
          <Link
            href="/menu"
            locale={locale as "ar" | "en" | undefined}
            className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300 font-semibold font-zilla leading-6 "
          >
            {t("menu")}
          </Link>
          <Link
            href="#"
            locale={locale as "ar" | "en" | undefined}
            className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300 font-semibold font-zilla leading-6 "
          >
            {t("about")}
          </Link>
          <Link
            href="#"
            locale={locale as "ar" | "en" | undefined}
            className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300 font-semibold font-zilla leading-6 "
          >
            {t("reservation")}
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? <h2>{user.displayName}</h2> : <Link
            href="/login"
            locale={locale as "ar" | "en" | undefined}
            className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300 font-semibold font-zilla leading-6 "
          >
            {t("login")} <span aria-hidden="true">→</span>
          </Link>}

        </div>
        <LocaleSwitcher locale={locale} optionalStyle="hidden lg:flex ms-12" />
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div
        className={!mobileMenuOpen ? "hidden" : ""}
        role="dialog"
        aria-modal="true"
      >
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-30" />
        <div className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" locale={locale as "ar" | "en" | undefined} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                // className="h-8 w-auto"
                width="75"
                height="75"
                src="/logo.png"
                alt="logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen((mobileMenu) => !mobileMenu)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  locale={locale as "ar" | "en" | undefined}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t("home")}
                </Link>
                <Link
                  href="/menu"
                  locale={locale as "ar" | "en" | undefined}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t("menu")}
                </Link>
                <Link
                  href="#"
                  locale={locale as "ar" | "en" | undefined}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t("about")}
                </Link>
                <Link
                  href="#"
                  locale={locale as "ar" | "en" | undefined}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t("reservation")}
                </Link>
                <LocaleSwitcher locale={locale} optionalStyle="flex lg:hidden text-black mt-4" />
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  locale={locale as "ar" | "en" | undefined}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t("login")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
