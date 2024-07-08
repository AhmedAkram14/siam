import { unstable_setRequestLocale } from "next-intl/server";

import AuthForm from "@/components/AuthForm";
import Visit from "@/components/come-visit";
import Cover from "@/components/Cover";
import Footer from "@/components/footer";
import CarouselSpacing from "@/components/popularFood";
import Reservation from "@/components/Reservation";

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Cover />
      <CarouselSpacing />
      <Visit />
      <Reservation />
      <Footer />
      <AuthForm />
    </>
  );
}
