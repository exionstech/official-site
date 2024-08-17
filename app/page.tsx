import NavBar from "@/components/navbar";
import HeroSection from "./_components/hero";
import About from "./_components/about";
import { MaxWrapper } from "@/components/max-wrapper";
import ServiceSection from "./_components/services";
import FooterSection from "./_components/footer";
import Testimonals from "./_components/testimonials";
import WorkedWith from "@/components/syntaxui/logo-cloude";
import Projects from "@/components/projects";
import Community from "./_components/community";

export default function Home() {
  return (
    <main>
      <NavBar />
      <MaxWrapper>
        <HeroSection />
        <WorkedWith/>
        <About />
        <ServiceSection />
        <Community/>
        <Projects/>
        {/* <Testimonals/> */}
      </MaxWrapper>
      <FooterSection />
    </main>
  );
}
