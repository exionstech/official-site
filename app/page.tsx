import HeroSection from "./_components/hero";
import About from "./_components/about";
import { MaxWrapper } from "@/components/max-wrapper";
import ServiceSection from "./_components/services";

import WorkedWith from "@/components/syntaxui/logo-cloude";
import Projects from "@/components/works";
import Community from "./_components/community";
import Testimonials from "./_components/testimonials";
import Products from "@/components/products";

export default function Home() {
  return (
    <main>
      <MaxWrapper>
        <HeroSection />
        <WorkedWith />
        <About />
        <ServiceSection />
        <Products />
        <Community />
        <Projects />
        <Testimonials />
      </MaxWrapper>
    </main>
  );
}
