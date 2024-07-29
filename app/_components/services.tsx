import { ServicesCards } from "@/components/services-card";

export default function ServiceSection() {

  return (
    <section className="" >
      <div id="services" className="flex flex-col space-y-5 items-center justify-center mt-5 md:mt-0 md:mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Streamline your business with our
          <span className="md:ml-2 bg-secondary text-background inline-block px-3 py-1 md:py-2 rounded-md">
            Services
          </span>
        </h1>

        <p className="text-md font-semibold md:text-xl text-left md:text-center w-full md:w-[60%]">
          From website design to social media management, We offer a wide range
          of services to help you grow your business.
        </p>
      </div>

      <ServicesCards />
    </section>
  );
}
