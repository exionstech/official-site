import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="flex items-center justify-center gap-1 md:gap-2 cursor-pointer" href="/">
      <Image
        src="/logo/logo.svg"
        alt="logo"
        width={80}
        height={80}
        className="w-8 md:w-10"
      />
      <h1 className="text-black text-3xl md:text-4xl font-bold">Exions 
        <span className="text-secondary">Tech</span>
      </h1>
    </Link>
  );
};

export default Logo;
