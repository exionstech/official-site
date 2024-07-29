import { ServicesCards } from "@/components/services-card";

export default function ServiceSection() {

  return (
    <section className="" >
      <div id="services" className="flex flex-col space-y-4 items-center justify-center mb-8">
        <h1 className="text-5xl font-bold">
          Streamline your business with our
          <span className="ml-2 bg-secondary text-background inline-block px-3 py-2 rounded-md">
            Services
          </span>
        </h1>

        <p className="text-sm md:text-xl text-center w-[60%]">
          From website design to social media management, We offer a wide range
          of services to help you grow your business.
        </p>
      </div>

      <ServicesCards />
    </section>
  );
}
