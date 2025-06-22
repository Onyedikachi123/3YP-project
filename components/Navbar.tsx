"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2 md:px-12 bg-white shadow-md">
  {/* Logo */}
  <div className="flex items-center gap-2">
    <Image
      src="/logo1.png"
      alt="3YP Logo"
      width={130}
      height={60}
      className=""
    />
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:flex gap-8 text-lg font-medium text-[#0F1017] leading-[100%] tracking-[-0.05em]">
    <a href="#">Rider</a>
    <a href="#">Driver</a>
    <a href="#">About us</a>
    <a href="#">Careers</a>
    <a href="#">Help/Support</a>
  </div>

  {/* Mobile Download Button + Menu Icon */}
  <div className="flex items-center gap-4 md:hidden">
    <button className="bg-[#0A5F56] text-white px-4 py-2 rounded-full text-[7.76px] font-medium hover:bg-[#277A5F]">
      <span className="inline-block align-middle mr-2">
        <Download className="w-[8.87px] h-[8.87px] -mt-1" />
      </span>
      Download app
    </button>

    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="text-[#0F1017]"
    >
      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Desktop Download Button */}
  <button className="hidden md:block bg-[#0A5F56] text-white px-5 py-2 rounded-full text-lg font-medium transition hover:bg-[#277A5F] cursor-pointer">
    <span className="inline-block align-middle mr-2">
      <Download className="w-4 h-4 -mt-1" />
    </span>
    Download app
  </button>

  {/* Mobile Dropdown Menu */}
  {mobileMenuOpen && (
    <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 flex flex-col items-start px-4 py-4 gap-4 text-lg font-medium text-[#0F1017] transition-all duration-300 ease-in-out md:hidden">
      <a href="#">Rider</a>
      <a href="#">Driver</a>
      <a href="#">About us</a>
      <a href="#">Careers</a>
      <a href="#">Help/Support</a>
    </div>
  )}
</nav>

    </>
  );
}
