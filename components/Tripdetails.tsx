"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Ellipsis } from "lucide-react";
import { useTripStore } from "@/store/tripStore";
import { useDriverStore } from "@/store/driverStore";
import { useRiderStore } from "@/store/riderStore";

export default function TripDetailsCard() {
  const { current: trip } = useTripStore();
  const { drivers, fetchDrivers } = useDriverStore();
  const { riders, fetchRiders } = useRiderStore();

  // fetch on mount only once
  useEffect(() => {
    fetchDrivers();
    fetchRiders();
  }, [fetchDrivers, fetchRiders]);

  if (!trip) return null;
  const driver = drivers.find((d) => d.id === trip.driverId);
  const rider = riders.find((r) => r.id === trip.riderId);

  return (
    <div className="h-[720px] bg-[#F6F6F6] flex flex-col md:flex-row gap-6 p-4 md:p-8 items-stretch">
      {/* Left: User Details */}
      <div className="bg-white rounded-lg shadow-sm flex-1 p-6 flex flex-col">
        {/* Profile + Buttons */}
        <div className="flex items-start justify-between ">
          <Image
            src="/bro.png"
            alt="User"
            width={145.13}
            height={145.13}
            className="rounded-lg object-cover border-2 border-[#D7D7D7] p-1"
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
        {rider && (
          <div className="mt-6 space-y-2 text-sm leading-[2.5] ">
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017] ">
                User ID:
              </span>

              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                {rider.id}
              </span>
            </div>
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                Name:
              </span>
              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                {rider.name}
              </span>
            </div>
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                Phone No:
              </span>
              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                {rider.phone}
              </span>
            </div>
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                Email:
              </span>
              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                {rider.email}
              </span>
            </div>
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                Gender:
              </span>
              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                {rider.gender ?? "—"}
              </span>
            </div>
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                Date of Birth:
              </span>
              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                {rider.dob ?? "—"}
              </span>
            </div>
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                Occupation:
              </span>
              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
               {rider.occupation ?? "—"}
              </span>
            </div>
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                Home Address:
              </span>
              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
               {rider.homeAddress ?? "—"}
              </span>
            </div>
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                Work Address:
              </span>
              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                {rider.workAddress ?? "—"}
              </span>
            </div>
            <div className="flex">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                City/County:
              </span>
              <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
               {rider.country ?? "—"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                Subscription:
              </span>
              <button className="flex items-center gap-2 px-5 py-1 bg-white text-[#101828] rounded-md  transition-colors cursor-pointer shadow">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                <span className="text-[12.93px] font-medium text-[#101828]">
                  {rider.subscription}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right: Fare Details and Driver Card */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Fare Details */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Fare Details</h3>

            {/* 🔧 Added wallet button */}
            <button className="flex items-center gap-1 border border-[#EEEEEE] text-[#333] text-sm font-medium px-3 py-1 rounded-md">
              <img
                src="/wallet.png"
                alt="Wallet"
                className="h-[19px] w-[19px]"
              />
              Wallet
            </button>
          </div>
          <div className="text-4xl font-semibold mb-3 text-center font-['Instrument_Sans']">
            ₦{trip.fareTotal.toLocaleString()}
          </div>
          <div className="flex flex-wrap gap-4 border-t border-[#333333] text-xs">
            <span className="flex flex-col pr-1 pt-5 border-r border-r-[#8A8A8A]">
              <div className="text-[#8A8A8A] font-normal">Wait Time</div>
              <div className="font-semibold text-[#3A3A3A] text-xs">
                ₦{trip.waitTime}
              </div>
            </span>

            <span className="flex flex-col pr-1 pt-5 border-r border-r-[#8A8A8A]">
              <div className="text-[#8A8A8A] font-normal">Basic Fare</div>
              <div className="font-semibold text-[#3A3A3A] text-xs">
                ₦{trip.baseFare}
              </div>
            </span>

            <span className="flex flex-col pr-1 pt-5 border-r border-r-[#8A8A8A]">
              <div className="text-[#8A8A8A] font-normal">
                Trip Request Time
              </div>
              <div className="font-semibold text-[#3A3A3A] text-xs">
                {trip.requestedAt}
              </div>
            </span>

            <span className="flex flex-col pr-1 pt-5 border-r border-r-[#8A8A8A]">
              <div className="text-[#8A8A8A] font-normal">Pick Up</div>
              <div className="font-semibold text-[#3A3A3A] text-xs">
                {trip.pickupAt}
              </div>
            </span>

            <span className="flex flex-col pt-5">
              <div className="text-[#8A8A8A] font-normal">Drop-off Time</div>
              <div className="font-semibold text-[#3A3A3A] text-xs">
                {trip.dropoffAt}
              </div>
            </span>
          </div>
        </div>
        {/* Driver Card */}
        {driver && (
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col flex-1">
            <div className="flex items-start justify-between">
              <Image
                src={driver.image}
                alt={driver.name}
                width={93}
                height={93}
                className="rounded-[4.65px] object-cover border-[1.45px] border-[#D7D7D7] p-1"
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
                <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                  Driver ID:
                </span>
                <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                  {driver.id}
                </span>
              </div>
              <div className="flex">
                <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                  Name:
                </span>
                <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                  {driver.name}
                </span>
              </div>
              <div className="flex">
                <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                  Phone No:
                </span>
                <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                  {driver.phone}
                </span>
              </div>
              <div className="flex">
                <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                  Email:
                </span>
                <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                  {driver.email}
                </span>
              </div>
              <div className="flex">
                <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                  Gender:
                </span>
                <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                  {driver.gender ?? "—"}
                </span>
              </div>
              <div className="flex">
                <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                  Ratings:
                </span>
                <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans'] flex items-center">
                  {driver.ratings.toFixed(1)}
                  <span className="ml-1 text-yellow-500">★★★★☆</span>
                </span>
              </div>
              <div className="flex">
                <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                  Assigned Station
                </span>
                <span className="text-[#0F101799] font-normal text-[19.16px] leading-[100%] tracking-[-0.089em] font-['Instrument_Sans']">
                  {driver.station}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-36 mb-3 font-['Instrument_Sans'] font-normal text-[18.4px] leading-[100%] tracking-[-0.089em] text-[#0F1017]">
                  Status
                </span>
                <button className="flex items-center gap-2 px-5 py-1 bg-white text-[#101828] rounded-md  transition-colors cursor-pointer shadow">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                  <span className="text-[12.93px] font-medium text-[#101828]">
                    {driver.status}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
