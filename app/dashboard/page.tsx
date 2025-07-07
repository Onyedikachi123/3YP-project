"use client";
import AssignedVehicleCard from "@/components/AssignedVehicleCard";
import React, { useEffect } from "react";
import { Ellipsis } from "lucide-react";
import TripDetailsCard from "@/components/Tripdetails";
import Map from "@/components/Map";
import { useTripStore } from "@/store/tripStore";

const Dashboard = () => {
  const { current: trip, fetchTrip } = useTripStore();

  useEffect(() => {
    fetchTrip("trip001");
  }, [fetchTrip]);

  if (!trip) return null;

  return (
    <main className="min-h-screen bg-[#F6F6F6] pt-6 relative">
      <div className="px-4 sm:px-6 lg:px-8 mb-6">
        <h1
          className="flex space-x-2 text-[24px] leading-[100%] tracking-[-1px]"
          style={{ fontFamily: "Instrument Sans" }}
        >
          <span className="text-[#063510] font-medium">Trips List/</span>
          <span className="text-[#10101080] font-normal">{trip.id}</span>
        </h1>
      </div>

      {/* Buttons container moved down with margin-top, aligned right */}
      <div className="flex justify-end px-4 sm:px-6 lg:px-8 mt-[-2rem] mb-4 space-x-3">
        <button className="bg-[#101010] text-white px-4 py-2 rounded-md text-xs cursor-pointer">
          Re- Route Trip
        </button>
        <button className="px-2 py-1 rounded-md bg-white cursor-pointer">
          <Ellipsis className="text-[#101010]" />
        </button>
      </div>

      <AssignedVehicleCard />
      <TripDetailsCard />
      <Map />
    </main>
  );
};

export default Dashboard;
