import MainButton from "@/components/buttons/main-button";
import Image from "next/image";


function About() {
  return (
    <section
      className="rounded-[45px] p-[50px] md:px-10 md:py-10 border border-b-[6px] border-text flex"
      id="about"
    >
      <div className="space-y-5 w-[65%] pl-6">
      <div className="flex items-center gap-2">
      <div className="text-5xl px-2 bg-secondary inline-block font-bold rounded-md">
          Who
        </div>
        <p className="font-bold text-5xl">we are !</p>

      </div>
        <p className="my-[26px] text-lg font-medium">
          Welcome to Exions Tech, a premier IT services and consultancy service.
          We specialize in website and app design, development, and social media
          services, delivering customized solutions for your business needs.
          Through Tectonic, our student community, we support future tech
          professionals with opportunities, resources, and industry connections.
        </p>
        <p className="text-lg font-medium">
          Join Extions Tech and turn your digital vision into reality.
        </p>
        <MainButton text="Join Our Community" className="bg-secondary p-3 rounded-xl hover:bg-secondary/85" />
      </div>
      <div className="flex items-center justify-center w-[35%]">
        <Image
          src="/images/about.svg"
          alt="proposal illustration"
          width={350}
          height={350}
          className="w-90 object-cover pointer-events-none select-none"
        />
      </div>
    </section>
  );
}

export default About;
