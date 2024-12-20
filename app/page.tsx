import HeroSection from "./_components/hero";
import About from "./_components/about";
import { MaxWrapper } from "@/components/max-wrapper";
import ServiceSection from "./_components/services";

import WorkedWith from "@/components/syntaxui/logo-cloude";
import Projects from "@/components/works";
import Community from "./_components/community";
import Testimonials from "./_components/testimonials";
import Products from "@/components/products";
import NilanjanData from "./_extra-data/nilanjan";
import PageData from "./_extra-data/page-data";

export default function Home() {
  return (
    <main>
      <MaxWrapper>
        <HeroSection />
        <WorkedWith />
        <About />
        <ServiceSection />
        <Projects />
        <Community />
        <Products />
        <Testimonials />
        <NilanjanData />
        <PageData />
      </MaxWrapper>
    </main>
  );
}
