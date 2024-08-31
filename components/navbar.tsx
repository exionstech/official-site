"use client";

import { useEffect, useState } from "react";
import { AlignJustify, Loader2, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Logo from "./logo";
import CollapsibleBanner from "./top-Banner";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useForm } from "@formspree/react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";


function NavBar() {
  const [menu, setMenu] = useState(false);
  const [state, handleSubmit] = useForm("mnnabynv");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
  toast.success("Message sent successfully");
      setIsDialogOpen(false);
    }
  }, [state.succeeded]);
  const links = [
    {
      name: "About us",
      link: "/#about",
    },
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "Feedback",
      link: "/#feedback",
    },
    {
      name: "Projects",
      link: "/#projects",
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
   <>
   <Toaster />
    <div className="sticky top-0  left-0 right-0  md:shadow-none z-50 backdrop-blur-lg flex flex-col gap-0 border-b border-text/20">
      <CollapsibleBanner />
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in opacity-85 py-4 2xl:px-64">
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

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild className="cursor-pointer">
                <div
                  className={cn(
                    "button text-background bg-secondary px-4 py-2 md:py-2 md:px-3 rounded-xl flex items-center gap-2",
                  )}
                >
                  Get In Touch
                  <span className="button__icon-wrapper bg-background">
                    <svg
                      width={10}
                      height={10}
                      className="button__icon-svg text-text"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 15"
                    >
                      <path
                        fill="currentColor"
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      />
                    </svg>
                    <svg
                      className="button__icon-svg button__icon-svg--copy text-text"
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      fill="none"
                      viewBox="0 0 14 15"
                    >
                      <path
                        fill="currentColor"
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      />
                    </svg>
                  </span>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get in touch</DialogTitle>
                  <DialogDescription>
                    <p>Fill in the form to get in touch with us</p>
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-2">
                    <Label htmlFor="name" className="-mb-2">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Name"
                      type="text"
                      required
                      name="name"
                    />
                    <Label htmlFor="email" className="-mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="Email"
                      type="email"
                      required
                      name="email"
                    />
                    <Label htmlFor="message" className="-mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      className="max-h-[80px] resize-none"
                      required
                      name="message"
                    />
                    <Button
                      type="submit"
                      className="mt-1 bg-secondary text-background"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending" : "Send"}
                      {state.submitting ? (
                        <Loader2 className="w-5 h-5 animate-spin ml-2" />
                      ) : (
                        ""
                      )}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm px-2  fixed top-0 w-full z-[999] bg-background backdrop-blur-lg py-3 animate-in fade-in zoom-in  ${
          menu ? "py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <Logo />
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
                  onClick={handleLinkClick}
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
   </>
  );
}

export default NavBar;
