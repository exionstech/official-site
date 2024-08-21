import MainButton from "@/components/buttons/main-button";
import Image from "next/image";

function About() {
  return (
    <section
      className="rounded-3xl md:rounded-[45px] md:px-10 md:py-10 border border-b-[6px] border-text flex flex-col md:flex-row"
      id="about"
    >
      <div className="space-y-4 md:space-y-7 w-full py-6 px-4  md:w-[65%] pl-3 md:pl-6">
        <div className="flex items-center gap-1 md:gap-2">
          <div className="text-4xl md:text-5xl px-2 bg-secondary text-background inline-block font-bold rounded-md">
            Who
          </div>
          <p className="font-bold text-4xl md:text-5xl">we are !</p>
        </div>
        <p className="my-[26px] text-lg font-medium">
          Welcome to Exions Tech, a premier IT services and consultancy service.
          We specialize in website and app design, development, and social media
          services, delivering customized solutions for your business needs.
          Through Tectonic, our student community, we support future tech
          professionals with opportunities, resources, and industry connections.
        </p>
        <p className="text-lg font-medium">
          Join Exions Tech and turn your digital vision into reality.
        </p>
        <MainButton
          text="Join Our Community"
          url="https://chat.whatsapp.com/Ck0cK90PbdkAaTjLzSDjP1"
          className="bg-secondary px-3 py-2 md:p-3 rounded-xl hover:bg-secondary/85"
        />
      </div>
      <div className="flex items-center justify-center w-full md:w-[35%] p-4 md:p-0">
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
