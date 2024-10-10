import { FC } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Punnyartha Banerjee",
    description:
      "I had the pleasure of working with Suman, the founder of Exions Tech, on our Xconics website, and I couldn't be more satisfied. From concept to launch, Suman showcased exceptional technical expertise and creativity. He was highly responsive to our needs and went the extra mile to ensure the final product exceeded our expectations.",
    profession: "Software Engineer | XCONICS",
    image: "/testimonials/punnyarthada.png",
  },
  {
    name: "Akash Singh",
    description:
      "I had the pleasure of managing Nilanjan, co-founder of Exions Tech, as a web designer. His performance consistently exceeded expectations. Nilanjan is an exceptional team player, skilled in web design, and delivers projects ahead of schedule. I wholeheartedly recommend him for any web design role; he is a valuable asset to any team.",
    profession: "Graphic Designer | iLEAD Kolkata",
    image: "/testimonials/akash-singh.png",
  },
  {
    name: "Susovan Ghosh",
    description:
      "I had the pleasure of working with Exons Tech, and their performance consistently exceeded expectations. The team is highly skilled, professional, and always delivers projects ahead of schedule. I highly recommend Exons Tech for any web development or design needs—they are a valuable asset to any project.",
    profession: "CTO | Medggy",
    image: "/testimonials/susovanda.png",
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
    <div
      id="feedback"
      className="flex flex-col items-center justify-center gap-3 pb-10 md:pb-20 -mt-10 md:space-y-2"
    >
      <h1 className="mb-1 max-w-2xl text-left md:text-center text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl dark:text-gray-100 leading-snug md:leading-normal">
        Why people love{" "}
        <span className="bg-secondary text-background px-2 py-0.5 rounded-md">
          {" "}
          Exions
        </span>
      </h1>
      <p className="max-w-2xl text-left md:text-center text-md md:text-lg font-semibold text-gray-600  dark:text-gray-400">
        Here's what our clients have to say about us and our work
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
