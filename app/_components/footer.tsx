import React from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import MainButton from "@/components/buttons/main-button";
import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import { Avatars } from "@/components/aceternity/avatars";
import { MoveUpRight } from "lucide-react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Instagram from "@/components/icons/instagram";
import Github from "@/components/icons/github";
import LinkedIn from "@/components/icons/linkedin";

function FooterSection() {
  // const links = [
  //   { name: "Home", link: "/" },
  //   { name: "About Us", link: "/#about" },
  //   { name: "Services", link: "/#services" },
  // ];
  const socials = [
    "/images/linkedin_icon.png",
    "/images/facebook_icon.png",
    "/images/twitter_icon.png",
  ];
  return (
    <section className="bg-text border rounded-t-[45px] p-5 md:px-[40px] md:pt-7 mx-2 md:mx-14 lg:mx-16 max-w-screen-xl 2xl:mx-auto">
      <div className="flex flex-col gap-5 md:gap-8 md:flex-row justify-between">
        <Link
          className="flex items-center justify-center gap-2 cursor-pointer"
          href="/"
        >
          <Image
            src="/logo/white-logo.svg"
            alt="logo"
            width={80}
            height={80}
            className="w-10"
          />
          <h1 className="text-background text-4xl font-bold">
            Exions
            <span className="text-secondary">Tech</span>
          </h1>
        </Link>
        <div className="flex gap-[20px] items-center justify-center">
          <Avatars />
        </div>
      </div>
      <div className="mt-10 md:mt-[60px] flex flex-col md:flex-row gap-8 justify-between px-5">
        <div className="flex flex-col gap-1 items-center md:items-start justify-center w-full md:w-[30%]">
          <div className="px-2 bg-secondary inline-block font-medium text-[20px] text-background rounded-md">
            Contact Us:
          </div>

          <Link
            href="mailto://admin@exions.tech"
            className="text-white mt-[19px] cursor-pointer"
          >
            Email: admin@exions.tech
          </Link>
          <p className="text-white mt-[10px]">Phone: +91 6291240981</p>
          <p className="text-white mt-[10px] text-center md:text-left">
            Address: Kolkata, WB, India
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start justify-start w-full md:w-[30%]">
          <div className="px-2 bg-secondary inline-block font-medium text-[20px] text-background rounded-md">
            Our Community:
          </div>

          <Link
            href="https://techtonic.palashdas.tech"
            target="_blank"
            className="text-white mt-[20px] cursor-pointer flex items-center gap-1"
          >
            Techtonic Community
          </Link>
          <Link
            href="https://exlan.tech"
            target="_blank"
            className="text-white mt-[20px] cursor-pointer flex items-center gap-1"
          >
            Exlan Community
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-start justify-start w-full md:w-[20%]">
          <div className="px-2 bg-secondary inline-block font-medium text-[20px] text-background rounded-md">
            Socials:
          </div>
          <div className="flex items-center justify-center -mt-5">
            <Dock className="flex items-center">
              <DockIcon className="">
                <Link
                  href="https://www.instagram.com/exions.tech"
                  target="_blank"
                >
                  <Instagram className="size-7" />
                </Link>
              </DockIcon>
              <DockIcon className="">
                <Link
                  href="https://www.linkedin.com/company/exionstech"
                  target="_blank"
                >
                  <LinkedIn className="size-6" />
                </Link>
              </DockIcon>
            </Dock>
          </div>
        </div>
      </div>
      <div className="my-3 md:my-[25px]">
        <Separator />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-1 md:gap-[40px] items-center justify-center">
        <p className="text-white text-sm md:text-[1rem] text-center">
          © 2024 Exions Tech. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
