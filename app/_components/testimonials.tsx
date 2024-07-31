import { FC } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ethan Pollack",
    description:
      "I've been using SyntaxUI for a few months now and I'm really impressed with the results. The components are easy to use and the documentation is great.",
    profession: "Software Developer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "Aiko",
    profession: "Design Engineer",
    description:
      "SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
    image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a",
  },
  {
    name: "Alena Zhukova",
    profession: "Software Engineer",
    description:
      "SyntaxUI is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results. The components are easy to use and the documentation is great.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];
interface TestimonalCardProps {
  name: string;
  description: string;
  image: string;
  profession: string;
}

const TestimonialCard: FC<TestimonalCardProps> = ({
  name,
  description,
  image,
  profession,
}) => {
  return (
    <div
      className={`card-shadow dark:border-neutral-90 relative flex h-auto max-w-[22rem] select-none flex-col items-start justify-center overflow-hidden rounded-2xl border border-text/15 p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm dark:border-neutral-800 dark:hover:shadow-white/10 bg-background`}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-2xl bg-gradient-to-r from-primary  to-secondary opacity-30 blur-3xl"></div>
      <div className="mb-0 flex h-fit flex-row items-center gap-3">
        <Image
          className="m-0 block h-11 w-11 rounded-full object-cover"
          src={image}
          alt={image}
          width={120}
          height={80}
        />
        <div className="mb-0 flex h-fit flex-col items-start">
          <h3 className="m-0 text-base font-medium text-gray-900 dark:text-gray-100">
            {name}
          </h3>
          <p className="font-regular m-0 text-center text-sm text-gray-600 dark:text-gray-400">
            {profession}
          </p>
        </div>
      </div>
      <p className="mb-0 mt-3 text-left text-sm font-light text-gray-600 md:text-base dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div id="feedback" className="flex flex-col items-center justify-center gap-3 pb-10 md:pb-20 -mt-10 md:space-y-2">
      <h1 className="mb-1 max-w-2xl text-left md:text-center text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl dark:text-gray-100 leading-snug md:leading-normal">
        Why people love <span className="bg-secondary text-background px-2 py-0.5 rounded-md"> Exions</span>
      </h1>
      <p className="max-w-2xl text-left md:text-center text-md md:text-lg font-semibold text-gray-600  dark:text-gray-400">
        SyntaxUI is loved by the community and is used by many companies. It is
        a great tool for rapid development and launching projects.
      </p>
      <div className="flex flex-wrap justify-center gap-5 mt-6 w-full md:pt-5">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
