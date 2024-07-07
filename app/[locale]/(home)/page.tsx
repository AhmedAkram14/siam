import { unstable_setRequestLocale } from 'next-intl/server';
import Visit from "@/components/come-visit";
import Cover from "@/components/Cover";
import Footer from "@/components/footer";
import CarouselSpacing from "@/components/popularFood";
import Reservation from "@/components/Reservation";
import Header from '@/components/Header';

export default function Home({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <>
      {/* <Header /> */}
      <Cover />
      <CarouselSpacing />
      <Visit />
      <Reservation />
      <Footer />
    </>
  );
}
