
import { Button } from "@/components/ui/button";
import { works } from "@/constants/projects";

import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      className="flex-wrap flex flex-col items-center justify-center gap-6 md:gap-10 overflow-hidden -mt-14 md:-mt-12 pb-14 md:pb-4 mb-4 md:mb-10"
      id="works"
    >
      <div className="flex flex-col space-y-5 items-center justify-center mt-5 md:mt-0 md:mb-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Client
          <span className="md:ml-2 bg-secondary text-background inline-block px-3 py-1 md:py-2 rounded-md">
            Works
          </span>
        </h1>

        <p className="text-md font-semibold md:text-xl text-left md:text-center w-full md:w-full">
          We have successfully delivered a variety of projects
        </p>
      </div>
      <div className="flex flex-wrap gap-6 w-full sm:grid grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <div
            key={work.title}
            className="bg-background border border-b-[6px] border-text p-1 rounded-xl flex flex-col justify-start items-center gap-3"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full max-h-64 sm:h-44 rounded-lg"
            />
            <div className="px-2.5 mb-2.5">
              <h1 className="text-lg font-medium">{work.title}</h1>
              <p className="text-sm text-text/80">{work.description}</p>
              <div className="mt-3 flex gap-3">
                <Link
                  href={work.link}
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  <Button size="sm" className="bg-text text-background">
                    View <ArrowRight className="w-4 h-4 -rotate-45" />
                  </Button>
                </Link>
                {work.github && (
                  <Link
                    href={work.github}
                    className="flex items-center gap-1"
                    target="_blank"
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="px-2.5 bg-text text-background"
                    >
                      <FaGithub className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <MainButton
          text="View All Projects"
          className="bg-secondary px-4 py-2 md:p-3 rounded-xl"
          url="/projects"
          target="_self"

        /> */}
    </section>
  );
}
