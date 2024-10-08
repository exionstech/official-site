"use client";
import React from "react";
import { AnimatedTooltip } from "./avtar-tooltip";

const people = [
  {
    id: 1,
    name: "Suman Mondal",
    designation: "Founder",
    image:
      "/avtar/suman.png",
  },
  {
    id: 2,
    name: "Atmajo Chowdhury",
    designation: "Co Founder & CEO",
    image:
      "/avtar/atmajo.png",
  },
  {
    id: 3,
    name: "Nilanjan Joarder",
    designation: "Co Founder",
    image:
      "/avtar/nilanjan.png",
  },
];

export function Avatars() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
