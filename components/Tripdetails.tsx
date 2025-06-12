"use client";

import Image from "next/image";
import { Ellipsis } from "lucide-react";

export default function TripDetailsCard() {
  return (
    <div className="h-[720px] bg-[#F6F6F6] flex flex-col md:flex-row gap-6 p-4 md:p-8 items-stretch">
      {/* Left: User Details */}
      <div className="bg-white rounded-lg shadow-sm flex-1 p-6 flex flex-col">
        {/* Profile + Buttons */}
        <div className="flex items-start justify-between ">
          <Image
            src="/bro.png"
            alt="User"
            width={100}
            height={100}
            className="rounded-lg object-cover border border-gray-200 p-1"
          />
          <div className="flex gap-2">
            <button className="bg-[#277A5F] text-white text-xs px-4 py-1 rounded font-medium">
              Basic Plan.
            </button>
            <button className="bg-black text-white text-xs px-4 py-1 rounded font-medium">
              Contact Rider
            </button>
            <button className="bg-[#F6F6F6] border border-gray-200 rounded p-1">
              <Ellipsis className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
        {/* User Info */}
        <div className="mt-6 space-y-2 text-sm leading-[2.5] ">
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">User ID:</span>
            <span className="text-[#0F101799] font-light">#USR0982</span>
          </div>
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">Name:</span>
            <span className="font-light text-[#0F101799]">Jake Olatunde</span>
          </div>
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">Phone No:</span>
            <span className="font-light text-[#0F101799]">
              +234 816 907 1955
            </span>
          </div>
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">Email:</span>
            <span className="font-light text-[#0F101799]">
              jakeolatunde@gmail.com
            </span>
          </div>
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">Gender:</span>
            <span className="font-light text-[#0F101799]">Female</span>
          </div>
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">
              Date of Birth:
            </span>
            <span className="font-light text-[#0F101799]">10-13-1980</span>
          </div>
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">Occupation:</span>
            <span className="font-light text-[#0F101799]">Student</span>
          </div>
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">
              Home Address:
            </span>
            <span className="font-light text-[#0F101799]">
              9, Asokoro road, Jos close
            </span>
          </div>
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">
              Work Address:
            </span>
            <span className="font-light text-[#0F101799]">
              707 Chestnut St, Hill Valley, CA
            </span>
          </div>
          <div className="flex">
            <span className="w-36 text-[#110000] font-light">City/County:</span>
            <span className="font-light text-[#0F101799]">Lagos / Nigeria</span>
          </div>
          <div className="flex items-center">
            <span className="w-36 text-[#110000] font-light">
              Subscription:
            </span>
            <button className="flex items-center gap-2 px-5 py-1 bg-white text-[#101828] rounded-md  transition-colors cursor-pointer shadow">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <span className="text-xs font-light text-[#0F101799]">
                Active
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right: Fare Details and Driver Card */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Fare Details */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Fare Details</h3>
          <div className="text-3xl font-bold mb-3 text-center">₦12,000</div>
          <div className="flex flex-wrap gap-4 border-t border-[#333333] pt-5 text-xs">
            <span className="pr-1 border-r border-[#8A8A8A]">
              {" "}
              {/* ✅ Added right border */}
              <div className="text-[#8A8A8A] font-normal">Wait Time</div>
              <div className="font-semibold text-[#3A3A3A] text-xs">₦200</div>
            </span>
            <span className="pr-1 border-r border-[#8A8A8A]">
              {" "}
              {/* ✅ Added right border */}
              <div className="text-[#8A8A8A] font-normal">Basic Fare</div>
              <div className="font-semibold text-[#3A3A3A] text-xs">
                ₦11,800
              </div>
            </span>
            <span className="pr-1 border-r border-[#8A8A8A]">
              {" "}
              {/* ✅ Added right border */}
              <div className="text-[#8A8A8A] font-normal">
                Trip Request Time
              </div>
              <div className="font-semibold text-[#3A3A3A] text-xs">
                10:10am
              </div>
            </span>
            <span className="pr-1 border-r border-[#8A8A8A]">
              {" "}
              {/* ✅ Added right border */}
              <div className="text-[#8A8A8A] font-normal">Pick Up</div>
              <div className="font-semibold text-[#3A3A3A] text-xs">
                10:20am
              </div>
            </span>
            <span>
              {" "}
              {/* ✅ Added right border */}
              <div className="text-[#8A8A8A] font-normal">Drop-off Time</div>
              <div className="font-semibold text-[#3A3A3A] text-xs">
                11:00am
              </div>
            </span>
          </div>
        </div>
        {/* Driver Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between">
            <Image
              src="/happy.jpg"
              alt="Driver"
              width={80}
              height={100}
              className="rounded-lg object-cover border border-gray-200 p-1"
            />
            <div className="flex gap-2">
              <button className="bg-black text-white text-xs px-4 py-1 rounded font-medium">
                Contact Driver
              </button>
              <button className="bg-[#F6F6F6] border border-gray-200 rounded p-1">
                <Ellipsis className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm leading-[2.5]">
            <div className="flex">
              <span className="w-32 text-[#110000] font-light">Driver ID:</span>
              <span className="font-light text-[#0F101799]">#USR0982</span>
            </div>
            <div className="flex">
              <span className="w-32 text-[#110000] font-light">Name:</span>
              <span className="font-light text-[#0F101799]">Jake Olatunde</span>
            </div>
            <div className="flex">
              <span className="w-32 text-[#110000] font-light">Phone No:</span>
              <span className="font-light text-[#0F101799]">
                +234 816 907 1955
              </span>
            </div>
            <div className="flex">
              <span className="w-32 text-[#110000] font-light">Email:</span>
              <span className="font-light text-[#0F101799]">
                jakeolatunde@gmail.com
              </span>
            </div>
            <div className="flex">
              <span className="w-32 text-[#110000] font-light">Gender:</span>
              <span className="font-light text-[#0F101799]">Female</span>
            </div>
            <div className="flex">
              <span className="w-32 text-[#110000] font-light">Ratings:</span>
              <span className="font-light text-[#0F101799] flex items-center">
                Ratings: 4.0
                <span className="ml-1 text-yellow-500">★★★★☆</span>
              </span>
            </div>
            <div className="flex">
              <span className="w-32 text-[#110000] font-light">
                Assigned Station
              </span>
              <span className="font-light text-[#0F101799]">Lekki Station</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 text-[#110000] font-light">Status</span>
              <button className="flex items-center gap-2 px-5 py-1 bg-white text-[#101828] rounded-md  transition-colors cursor-pointer shadow">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                <span className="text-xs font-light text-[#0F101799]">
                  Clock In
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
