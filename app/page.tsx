import NavBar from "@/components/navbar";
import HeroSection from "./_components/hero";
import About from "./_components/about";
import { MaxWrapper } from "@/components/max-wrapper";
import ServiceSection from "./_components/services";
import FooterSection from "./_components/footer";


export default function Home() {
  return (
    <main>
      <NavBar />

      <MaxWrapper>
        <HeroSection />
        <About />
        <ServiceSection/>
        <FooterSection/>
      </MaxWrapper>
    </main>
  );
}
