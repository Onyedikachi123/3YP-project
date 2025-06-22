import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0F1017] text-white mt-10 pt-10 pb-4 px-4 md:px-0 h-[553px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-x-18 gap-y-12 justify-between border-t border-[#BEBFC5] pt-12 pb-12 md:pb-72">
        {/* Column 1: Logo + Description */}
        <div className="flex-1 ">
          <div className="flex items-center gap-8">
            <Image
              src="/logo1.png"
              alt="3YP Logo"
              width={100}
              height={60}
              className=""
            />
          </div>
          <div
            className="text-white mt-2 capitalize align-middle"
            style={{
              fontFamily: "Instrument Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "-0.54px", // -3% of 18px
            }}
          >
            Redefining Urban Mobility Through Sustainable Innovation And
            Community Empowerment.
          </div>
        </div>

        {/* Column 2: Products */}
        <div className="flex-1  flex flex-col gap-8">
          <div
            className="font-semibold mb-1 text-white"
            style={{
              fontFamily: "Instrument Sans",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-0.54px", // -3% of 18px
            }}
          >
            Products
          </div>
          <a
            className="text-white text-sm"
            href="#"
            style={{
              fontFamily: "Instrument Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "-0.54px", // -3% of 18px
            }}
          >
            Rides
          </a>
          <a
            className="text-white text-sm"
            href="#"
            style={{
              fontFamily: "Instrument Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "-0.54px", // -3% of 18px
            }}
          >
            Driver
          </a>
        </div>

        {/* Column 3: Company */}
        <div className="flex-1  flex flex-col gap-8">
          <div
            className="font-semibold mb-1 text-white"
            style={{
              fontFamily: "Instrument Sans",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-0.54px", // -3% of 18px
            }}
          >
            Company
          </div>
          <a
            className="text-white text-sm"
            href="#"
            style={{
              fontFamily: "Instrument Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "-0.54px", // -3% of 18px
            }}
          >
            About us
          </a>
          <a
            className="text-white text-sm"
            href="#"
            style={{
              fontFamily: "Instrument Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "-0.54px", // -3% of 18px
            }}
          >
            Contact us
          </a>
          <a
            className="text-white text-sm"
            href="#"
            style={{
              fontFamily: "Instrument Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "-0.54px", // -3% of 18px
            }}
          >
            Partner
          </a>
        </div>

        {/* Column 4: Social Media */}
        <div className="flex-1  flex flex-col gap-8">
          <div className="flex gap-3">
            <Link href="#" passHref>
              <span className="w-8 h-8 bg-[#09DE63] rounded-full inline-flex items-center justify-center cursor-pointer">
                <Linkedin className="w-4 h-4 text-[#0f1017]" />
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="w-8 h-8 bg-[#09DE63] rounded-full inline-flex items-center justify-center cursor-pointer">
                <Twitter className="w-4 h-4 text-[#0f1017]" />
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="w-8 h-8 bg-[#09DE63] rounded-full inline-flex items-center justify-center cursor-pointer">
                <Instagram className="w-4 h-4 text-[#0f1017]" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-[#BEBFC5] pt-5 pb-5">
        {/* Left side: Copyright */}
        <div className="w-full md:w-auto mb-2 md:mb-0">
          <p className="text-sm text-white text-start font-normal">
            &copy; All rights reserved, 3YP Technologies 2025
          </p>
        </div>

        {/* Right side: Links */}
        <div className="flex gap-4 text-sm text-white font-normal">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Terms and Condition</a>
          <a href="#">Cookie</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
