"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "../lib/utils";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`padding-container relative z-30 bg-white shadow-xl ring-1 ring-slate-500 ${
        isSticky && "sticky top-0 py-0"
      }`}>
      <div className="flex items-center">
        <div className="relative w-[170px] ml-5 h-11">
          <Image
            fill
            alt="Logo"
            src="/images/small-Image.jpeg"
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </div>

        {/* Large Screen Navbar */}
        <div
          id="large-screen-navbar"
          className="hidden h-full gap-4 lg:flex px-6 py-3 w-full justify-end">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                `flex text-center text-[15px] font-[500]
                hover:text-black hover:bg-orange-400
                px-3 py-1 rounded-full cursor-pointer transition-all duration-300`
              )}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Small Screen Navbar */}
        <div
          id="small-screen-navbar"
          className="lg:hidden h-full flex px-6 py-2 w-full justify-end">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              title={link.label}
              className={cn(
                `flex text-center mr-2 px-2 py-1
               font-medium cursor-pointer hover:text-black hover:bg-orange-400
             text-black bg-orange-300 rounded-full transition-all`
              )}>
              <div className="flex items-center py-1">
                <link.icon className={cn("h-5 w-5")} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
