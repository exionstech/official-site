"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import Logo from "./logo";
import MainButton from "./buttons/main-button";
import CollapsibleBanner from "./top-Banner";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      name: "About us",
      link: "/#about",
    },
    {
      name: "Services",
      link: "/#services",
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="sticky top-0  left-0 right-0  md:shadow-none z-50 backdrop-blur-lg flex flex-col gap-0 ">
      <CollapsibleBanner />
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in opacity-85 py-4 border-b border-text/20">
        <div className="flex justify-between items-center px-20">
          <Logo />
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className={`hover:text-secondary transition-all cursor-pointer flex items-center gap-2 text-[1.05rem]  font-bold text-black relative `}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-[40px] select-none">
              <MainButton
                text="Get Started"
                className="px-2 py-2 rounded-xl bg-secondary"
              />
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm px-2  fixed top-0 w-full z-[999] bg-background backdrop-blur-lg py-2 animate-in fade-in zoom-in  ${
          menu ? "py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
        <Logo/>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-text"
                onClick={toggleMenu}
              />
            ) : (
              <AlignJustify
                className="size-6 text-text cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className={`hover:text-primary transition-all cursor-pointer flex items-center gap-2  font-[500] text-gray  relative`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
