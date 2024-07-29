import NavBar from "@/components/navbar";
import HeroSection from "./_components/hero";
import About from "./_components/about";
import { MaxWrapper } from "@/components/max-wrapper";
import ServiceSection from "./_components/services";

export default function Home() {
  return (
    <main>
      <NavBar />

      <MaxWrapper className="pt-[5rem] flex flex-col gap-36 px-20">
        <HeroSection />
        <About />
        <ServiceSection/>
      </MaxWrapper>
    </main>
  );
}
