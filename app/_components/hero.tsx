import MainButton from "@/components/buttons/main-button";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full h-full md:mt-5">
      <div className="w-full md:w-[55%]">
        <p className="text-4xl md:text-6xl text-black font-bold">
          Create, grow and scale your business
        </p>
        <div className="md:hidden my-5 flex items-center justify-center">
          <img
            src="/images/banner.svg"
            alt="microphone illustration"
            className="w-90"
          />
        </div>

        <p className="text-md font-semibold md:text-lg text-black my-5 md:my-10">
          At Exions Tech, we specialize in providing innovative IT services and
          solutions, transforming your digital ideas into reality or your ofline
          exellence into online presence with precision and excellence.
        </p>

        <MainButton
          text="Shedule a meet"
          className="bg-secondary px-4 py-2 md:p-3 rounded-xl"
          url="https://cal.com/exionstech/client-meet"

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
