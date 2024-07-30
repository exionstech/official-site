import React from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import MainButton from "@/components/buttons/main-button";
import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

function FooterSection() {
  const links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/#about" },
    { name: "Services", link: "/#services" },
    { name: "Contact", link: "/#contact" },
  ];
  const socials = [
    "/images/linkedin_icon.png",
    "/images/facebook_icon.png",
    "/images/twitter_icon.png",
  ];
  return (
    <section className="bg-text border rounded-t-[45px] p-5 md:p-[50px] mx-3 md:mx-14 lg:mx-16">
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
        <div className="hidden lg:flex flex-col md:flex-row gap-[40px] items-center">
          {links?.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="text-white underline cursor-pointer text-p"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-[20px] items-center justify-center">
          {socials.map((social, index) => (
            <Link href="/" className="cursor-pointer" key={index}>
              <img src={social} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 md:mt-[66px] flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col items-center md:items-start justify-center">
          <div className="px-2 bg-secondary inline-block font-medium text-[20px] text-background rounded-md">
            Contact Us:
          </div>

          <p className="text-white mt-[27px]">Email: info@positivus.com</p>
          <p className="text-white mt-[27px]">Phone: 555-567-8901</p>
          <p className="text-white mt-[27px] text-center md:text-left">
            Address: 1234 Main St Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:gap-[20px] py-16 px-[40px] rounded-[14px]">
          <Input placeholder="Email" className="h-[58px] rounded-[14px]" />
          <MainButton
            text="Subscribe to news "
            className="bg-secondary w-full px-3 py-4 rounded-xl"
            url="/"
          />
        </div>
      </div>
      <div className="my-3 md:my-[25px]">
        <Separator />
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-[40px]">
        <p className="text-white text-sm md:text-lg">
          © 2023 Exions Tech. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
