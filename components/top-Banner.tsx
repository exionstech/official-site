"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CloseIcon = ({ className, ...props }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function CollapsibleBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleRedirect = () => {
    window.open("https://jaymabioinnovations.com/", "_blank");
  }

  return (
    <>
      <div
        className={`fixed top-0 w-full hidden md:block z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex w-full items-center gap-x-6 bg-secondary px-6 py-3 sm:px-3.5 sm:before:flex-1">
          <div className="flex items-center text-sm font-medium leading-6 text-white">
            <p
              onClick={handleRedirect}
              className="cursor-pointer"
            >{`Enhance IT efficiency with Extion Tech – Recently delivered for Jayma Bio Innovation Pvt. Ltd.`}</p>
            {/* <Link
              href="mailto://admin@exions.tech"
              target="_blank"
              className="ml-3 flex-none rounded-lg bg-white px-3 py-1 text-xs text-black shadow-sm hover:bg-text hover:text-background transition"
            >
              Contact
            </Link> */}
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Dismiss"
            >
              <CloseIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
      {/* Placeholder for spacing */}
      <div
        className={`transition-all duration-300 ${isVisible ? "h-12" : "h-0"}`}
      />
    </>
  );
}
