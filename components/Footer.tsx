import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
  <footer className="bg-[#0F1017] text-white mt-10 pt-10 pb-4 px-4 md:px-0 h-[597px]">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 border-t border-[#BEBFC5] pt-12 pb-12 md:pb-72"> {/* ✅ made pb responsive */}
    <div className="flex-1">
      <div className="font-bold text-lg mb-2">3YP</div>
      <div className="text-white text-sm">
        Redefining Urban Mobility Through Sustainable Innovation And
        Community Empowerment.
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-2">
      <div className="font-semibold mb-1">Products</div>
      <a className="text-white text-sm" href="#">
        Rides
      </a>
    </div>
    <div className="flex-1 flex flex-col gap-2">
      <div className="font-semibold mb-1">Company</div>
      <a className="text-white text-sm" href="#">
        About us
      </a>
      <a className="text-white text-sm" href="#">
        Contact us
      </a>
      <a className="text-white text-sm" href="#">
        Partner
      </a>
    </div>
  </div>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 border-t border-[#BEBFC5] pt-5">
    <div className="w-full flex justify-center md:justify-center mb-2 md:mb-0">
      <p className="text-xs text-white text-center">
        &copy; All rights reserved, 3YP Technologies 2025
      </p>
    </div>

    <div className="flex gap-3 md:ml-auto">
      <Link href="#" passHref>
        <span className="w-8 h-8 bg-[#09DE63] rounded-full inline-flex items-center justify-center cursor-pointer">
          <Linkedin className="w-4 h-4 text-[#0f1017]" />
        </span>
      </Link>
      <Link href="#" passHref>
        <span className="w-8 h-8 bg-[#09DE63] rounded-full inline-flex items-center justify-center">
          <Twitter className="w-4 h-4 text-[#0f1017]" />
        </span>
      </Link>
      <Link href="#" passHref>
        <span className="w-8 h-8 bg-[#09DE63] rounded-full inline-flex items-center justify-center">
          <Instagram className="w-4 h-4 text-[#0f1017]" />
        </span>
      </Link>
    </div>
  </div>
</footer>

  );
};

export default Footer;
