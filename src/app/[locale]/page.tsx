import { useTranslations } from "next-intl";

import Visit from "@/components/come-visit";
import Cover from "@/components/Cover";
import Footer from "@/components/footer";
import CarouselSpacing from "@/components/popularFood";
import Reservation from "@/components/Reservation";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <Cover />
      <CarouselSpacing />
      <Visit />
      <Reservation />
      <Footer />
    </>
  );
}
