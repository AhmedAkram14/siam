"use client";
import React, {
  useState,
  useTransition,
} from 'react';

import { useRouter } from 'next/navigation';
import { MdLanguage } from 'react-icons/md';

const LocaleSwitcher = ({ optionalStyle }: { optionalStyle?: string }) => {
  const [locale, setLocale] = useState("ar");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "en" ? "ar" : "en"));
    startTransition(() => {
      router.push(`/${locale}`);
    });
  };

  return (
    <div
      onClick={toggleLocale}
      className={`${optionalStyle}  cursor-pointer text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300 font-semibold font-zilla leading-6  items-center gap-1`}
    >
      <MdLanguage />
      <h2>{locale}</h2>
    </div>
  );
};

export default LocaleSwitcher;
