"use client";

import { useState } from "react";
import Image from "next/image";
import {
  House,
  ChevronRight,
  ChevronDown,
  Map,
  UserRoundCheck,
  CarTaxiFront,
  CarFront,
  Fuel,
  BookText,
  ShieldUser,
  Ticket,
  Users2,
  Server,
} from "lucide-react";

const menu = [
  { label: "Overview", icon: <House size={18} />, link: "/dashboard" },
  {
    label: "Trips Analysis",
    icon: <Map size={18} />,
    sub: [
      { label: "Trips Overview", link: "#" },
      { label: "Trips List", link: "#" },
      { label: "Trips Map View", link: "#" },
    ],
  },
  { label: "Riders", icon: <UserRoundCheck size={18} />, link: "#" },
  { label: "Drivers", icon: <CarTaxiFront size={18} />, link: "#" },
  {
    label: "Fleet Management",
    icon: <CarFront size={18} />,
    link: "#",
  },
  {
    label: "Station Management",
    icon: <Fuel size={18} />,
    link: "#",
  },
  {
    label: "Finance & Report",
    icon: <BookText size={18} />,
    link: "#",
  },
  {
    label: "Administration",
    icon: <ShieldUser size={18} />,
    link: "#",
  },
  {
    label: "Promotional",
    icon: <Ticket size={18} />,
    link: "#",
  },
  {
    label: "Customer Care",
    icon: <Users2 size={18} />,
    link: "#",
  },
  {
    label: "Server Monitoring",
    icon: <Server size={18} />,
    link: "#",
  },
];

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <aside className="h-screen flex flex-col w-[240px] bg-[#277A5F] text-white">
      {/* Header with logo and vertical border */}
      <div className="bg-white text-black shadow px-4 py-[13px] flex justify-between items-center">
        <div className="relative flex items-center pr-6">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="rounded-md"
            />
            <span className="text-sm font-medium ml-2 text-[#101828]">
              3YP ADMIN
            </span>
          </div>
          {/* Custom shorter vertical border */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-6 border-r border-[#BEBFC5]" />
        </div>
      </div>

      {/* Sidebar Menu Scrollable */}
      <div className="overflow-y-auto flex-grow p-4 space-y-4">
        {menu.map((item, i) => {
          const isCustomerCareOrServer =
            item.label === "Customer Care" ||
            item.label === "Server Monitoring";

          const hasDropdown = item.sub && !isCustomerCareOrServer;

          const isOpen = openIndex === i;

          return (
            <div key={i} className="space-y-1">
              <div
                onClick={() => hasDropdown && toggleDropdown(i)}
                className={`flex items-center justify-between text-xs font-semibold py-2 px-3 rounded cursor-pointer leading-[1.75rem] ${
                  isOpen ? "bg-[#5BFFCA66]" : ""
                }`}
              >
                <div className="flex items-center gap-2 ">
                  {item.icon}
                  <span className="font-['Instrument_Sans']">{item.label}</span>
                </div>

                {!isCustomerCareOrServer && (
                  <div className="bg-[#48D38A80] p-1 rounded">
                    {hasDropdown ? (
                      isOpen ? (
                        <ChevronDown className="w-3 h-3 text-white" />
                      ) : (
                        <ChevronRight className="w-3 h-3 text-white" />
                      )
                    ) : (
                      <ChevronRight className="w-3 h-3 text-white opacity-50" />
                    )}
                  </div>
                )}
              </div>

              {hasDropdown && isOpen && (
                <div className="ml-3 mt-1 border border-white rounded overflow-hidden bg-[#48D38A80]">
                  {item.sub.map((subItem, j) => (
                    <a
                      key={j}
                      href={subItem.link}
                      className="group block text-sm px-3 py-2 text-white hover:bg-white/20"
                    >
                      <span className="pl-2 block group-hover:border-l-2 group-hover:border-white font-['Instrument_Sans'] font-normal text-[16px] leading-[100%] tracking-[-0.01em]">
                        {subItem.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
