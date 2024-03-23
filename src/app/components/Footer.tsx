"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-b-[#121212] border-l-transparent border-r-transparent text-white mb-0">
      <div className="container p-8 flex justify-between">
        <div className="relative w-[130px] h-11">
          <Image
            fill
            alt="Logo"
            src="/images/small-Image.jpeg"
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
