"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const pdfUrl = "/Niv Nomdar-Resume.pdf";

    const tempLink = document.createElement("a");
    tempLink.href = pdfUrl;
    tempLink.setAttribute("download", "Niv Nomdar-Resume.pdf"); // Set the filename for download
    tempLink.click(); // Simulate click to trigger the download
  };

  return (
    <section id="heroSection">
      <div className="grid grid-cols-1 sm:grid-cols-12 my-4 lg:my-[90px]">
        <div className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl place-self-center sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Niv Nomdar",
                2000,
                "Web Developer",
                2000,
                "Mobile Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {/* I'm open to work! Please feel free to contact me. */}I am
            currently available for new projects. Please feel free to contact
            me.
          </p>

          <div>
            <Link
              href="/#emailSection"
              className="px-6 inline-block py-3 w-[150px] sm:w-fit rounded-full 
              mr-4 bg-gradient-to-r from-orange-400 to-orange-900 font-bold text-white">
              Hire Me
            </Link>

            <a
              onClick={handleDownloadCV}
              className="px-1 inline-block py-1 w-[200px]
              sm:w-fit rounded-full bg-slate-400 bg-gradient-to-br from-orange-400 
               to-orange-900 hover:bg-orange-500 hover:text-black text-white mt-3 mb-3">
              <span
                className="block bg-[#121212] hover:bg-slate-900 hover:text-white
              rounded-full px-5 py-2 hover:cursor-pointer">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-4 place-self-center">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile-img.JPG"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
