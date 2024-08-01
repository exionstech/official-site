import StaticLogo from "@/components/syntaxui/static-logo";

export default function Community() {
  return (
    <section className="flex-wrap flex flex-col items-center justify-center gap-6 md:gap-10 overflow-hidden -mt-10 md:-mt-12 pb-14 md:pb-4">
      <div className="flex flex-col space-y-5 items-center justify-center mt-5 md:mt-0 md:mb-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="md:mr-2 bg-secondary text-background inline-block px-3 py-1 md:py-2 rounded-md">
            Community
          </span>
          Partners
        </h1>

        <p className="text-md font-semibold md:text-xl text-left md:text-center w-full md:w-[60%]">
        We take pride in our association with some of the best student and developer communities.
        </p>
      </div>
      <StaticLogo/>
    </section>
  );
}
