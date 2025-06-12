"use client";
import React, {useState} from "react";
import { Search, Bell, User, ChevronDown, ChevronUp } from "lucide-react";

export default function Topbar() {
   const [role, setRole] = useState('Super Admin');
  const [open, setOpen] = useState(false);
  const roles = ['Super Admin', 'Admin'];
  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center sticky top-0 z-10">
      {/* 🔧 Input with search icon on the right */}
      <div className="relative flex-grow max-w-5xl">
        <input
          placeholder="Search anything"
          className=" rounded-md pr-10 pl-4 py-2 w-full focus:outline-none text-xs bg-[#F6F6F6] placeholder:text-[#B5B5B5] font-light "
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1E1E1E] h-4 w-4" />
      </div>

      {/* 🔧 Right section with bell, border, and user */}
      <div className="flex items-center gap-4 relative ml-6">
        <div className="relative">
          <Bell className="text-[#0F101799] mr-4 font-light cursor-pointer" />
          {/* 🔧 Vertical border right after Bell */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-6 border-r border-[#BEBFC5]" />
        </div>

          <div className="relative pl-4">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <span className="bg-[#277A5F] p-1 text-white rounded-md">
              <User className="w-4 h-4 cursor-pointer" />
            </span>
            <span className="text-[#101010] font-light text-sm">{role}</span>
            {open ? (
              <ChevronUp className="w-4 h-4 text-gray-500 cursor-pointer" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500 cursor-pointer" />
            )}
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 bg-white shadow border rounded w-32 z-50">
              {roles.map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setRole(r);
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
