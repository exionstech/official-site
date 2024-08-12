"use client";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";

import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import MainButton from "./buttons/main-button";

export default function Projects() {
  return (
    <section
      className="flex-wrap flex flex-col items-center justify-center gap-6 md:gap-10 overflow-hidden -mt-14 md:-mt-12 pb-14 md:pb-4"
      id="projects"
    >
      <div className="flex flex-col space-y-5 items-center justify-center mt-5 md:mt-0 md:mb-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Open Source
          <span className="md:ml-2 bg-secondary text-background inline-block px-3 py-1 md:py-2 rounded-md">
            Projects
          </span>
        </h1>

        <p className="text-md font-semibold md:text-xl text-left md:text-center w-full md:w-[60%]">
          Check out some of our open source projects that we have built and
          contributed to.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 w-full sm:grid grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-background border border-b-[6px] border-text p-1 rounded-xl flex flex-col justify-center items-center gap-3"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-64 sm:h-44 rounded-lg"
            />
            <div className="px-2.5 mb-2.5">
              <h1 className="text-lg font-medium">{project.title}</h1>
              <p className="text-sm text-text/80">{project.description}</p>
              <div className="mt-3 flex gap-3">
                <Link
                  href={project.link}
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  <Button size="sm" className="bg-text text-background">
                    View <ArrowRight className="w-4 h-4 -rotate-45" />
                  </Button>
                </Link>
                {project.github && (
                  <Link
                    href={project.github}
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
