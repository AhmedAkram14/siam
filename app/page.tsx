import Visit from "@/components/come-visit";
import Cover from "@/components/Cover";
import Footer from "@/components/footer";
import CarouselSpacing from "@/components/popularFood";
import Reservation from "@/components/Reservation";

export default function Home() {
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
