import { Hero } from "../components/Hero";
import { ProductList } from "../components/ProductList";
import { HarvestJourney } from "../components/HarvestJourney";
import { SellYourApples } from "../components/SellYourApples";
import { Values } from "../components/Values";
import { Testimonials } from "../components/Testimonials";
import { Gallery } from "../components/Gallery";
import { Faq } from "../components/Faq";

export function Home() {
  return (
    <>
      <Hero />
      <ProductList />
      <HarvestJourney />
      <SellYourApples />
      <Values />
      <Testimonials />
      <Gallery />
      <Faq />
    </>
  );
}
