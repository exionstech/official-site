import MainButton from "@/components/buttons/main-button";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full h-full mt-5">
      <div className="md:w-[55%]">
        <p className="text-6xl text-text font-bold">
          Create, grow and scale your business
        </p>
        <div className="md:hidden my-[35px] flex items-center justify-center">
          <img
            src="/images/banner.svg"
            alt="microphone illustration"
            className="w-80"
          />
        </div>

        <p className="text-p text-text my-[35px]">
          At Exions Tech, we specialize in providing innovative IT services and
          solutions, transforming your digital ideas into reality or your ofline
          exellence into online presence with precision and excellence.
        </p>

        <MainButton
          text="Shedule a meet"
          className="bg-secondary hover:bg-secondary/85 p-3 rounded-xl"
        />
      </div>
      <div className="hidden md:flex  items-center justify-center">
        <Image
          src="/images/banner.svg"
          alt="microphone illustration"
          width={470}
          height={470}
          className="-mt-14 object-cover pointer-events-none select-none"
        />
      </div>
    </section>
  );
}

export default HeroSection;
