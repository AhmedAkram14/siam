"use client";
import React, {
  useState,
  useTransition,
} from 'react';
import { usePathname, useRouter } from '../navigation';
// import { useRouter } from 'next/navigation';
import { MdLanguage } from 'react-icons/md';

const LocaleSwitcher = ({ optionalStyle, locale }: { optionalStyle?: string, locale: string }) => {
  const [lang, setLang] = useState<"en" | "ar" | undefined>(locale == 'en' ? 'ar' : 'en');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const toggleLocale = () => {
    setLang((prevLang) => (prevLang === "en" ? "ar" : "en"));
    startTransition(() => {
      router.push(pathname, { locale: lang });
    });
  };
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div
      onClick={toggleLocale}
      className={`${optionalStyle}  cursor-pointer  text-opacity-70 hover:text-opacity-100 transition-all duration-300 font-semibold font-zilla leading-6  items-center gap-1`}
    >
      <MdLanguage />
      <h2>{lang}</h2>
    </div>
  );
};

export default LocaleSwitcher;
