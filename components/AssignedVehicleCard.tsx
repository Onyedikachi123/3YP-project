"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { useVehicleStore } from "@/store/vehicleStore";

const carImages = ["/car.png", "/view3.png", "/inside.png"];

const AssignedVehicleCard = () => {
  const [selectedImage, setSelectedImage] = useState(carImages[0]);
  const { vehicles, fetchVehicles } = useVehicleStore();
  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);
  const v = vehicles[0];

  return (
    <div className="w-full p-4 sm:px-6 lg:px-8">
      <div className="shadow-[0px_6px_10px_0px_#BBBBBB40] p-4 sm:px-6 bg-white">
        <div className="flex items-center justify-between ">
          <h2
            className="text-[16px] font-medium leading-[100%] tracking-[-0.8px] pb-3"
            style={{ fontFamily: "Instrument Sans" }}
          >
            Trip Assigned Vehicle
          </h2>

          <button className="px-4 py-2 text-xs  text-[#ffffff] bg-[#277A5F] rounded-md cursor-pointer font-['Instrument_Sans']">
            View Vehicle
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-[500px] bg-[#F7F7F7] rounded-md px-5 h-[280px]">
            <Image
              src={selectedImage}
              alt="Assigned Car"
              width={501} // natural width (can stay the same)
              height={165} // reduced height
              className="object-cover rounded w-full h-auto transform scale-x-[-1]  max-h-[230px] -mt-[16px]" // mb-5
            />

            {/* Thumbnail Switcher */}
            <div className=" flex flex-col items-center">
              {/* Thumbnail + progress wrapper */}
              <div className="relative w-full max-w-[50px] ">
                {/* Green progress bar */}
                <div
                  className="absolute -top-5 h-[3px] bg-[#277A5F] transition-transform duration-300"
                  style={{
                    width: `${100 / carImages.length}%`,
                    transform: `translateX(${
                      carImages.findIndex((img) => img === selectedImage) * 100
                    }%)`,
                  }}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 justify-center">
                {carImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`rounded-md overflow-hidden w-20 h-14 border cursor-pointer ${
                      selectedImage === img ? "border-green-500" : ""
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="  mx-auto w-full pt-8 md:mt-3"> {/* max-w-md py-5*/}
            {/* Assigned Car Title */}
            <h3
              className="text-[25.52px] font-medium leading-[100%] tracking-[-0.51px] mb-1 text-black"
              style={{ fontFamily: "Instrument Sans" }}
            >
              Assigned Car
            </h3>

            <p
              className="text-black text-[18.23px] font-normal leading-[100%] tracking-[0] mb-4"
              style={{ fontFamily: "Instrument Sans" }}
            >
              {/* Toyota Corolla, Silver . TBWR206HF */}
             {v?.make} {v?.model}, {v?.color} · {v?.plate}
            </p>

            {/* Details Grid */}
            <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 pt-[35px]">
              {/* Left: Energy + Ride Type */}
              <div className="flex-1 border-l-5 border-l-[#D9D9D9] pl-4">
                <div>
                  <p className="font-['Instrument_Sans'] font-normal text-[11.77px] leading-[100%] tracking-[0] text-black pb-2">
                    Energy Used
                  </p>
                  <p className="font-['Instrument_Sans'] font-normal text-[16.47px] leading-[100%] tracking-[0]">
                    1289KMH
                  </p>
                </div>
                <div className="mt-16">
                  <p className="font-['Instrument_Sans'] font-normal text-[11.77px] leading-[100%] tracking-[0] text-black pb-2">
                    Ride Type
                  </p>
                  <p className="font-['Instrument_Sans'] font-normal text-[16.47px] leading-[100%] tracking-[0] sm:text-base">
                    Standard ride
                  </p>
                </div>
              </div>
              {/* Right: Pickup/Dropoff */}
              <div className="flex-1 relative pl-4">
                {/* Custom left border */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[5.74px]"
                  style={{
                    background:
                      "linear-gradient(to bottom, #277A5F 0%, #277A5F 40%, #D9D9D9 40%, #D9D9D9 100%)",
                  }}
                />
                <div>
                  <p className="font-['Instrument_Sans'] font-normal text-[11.77px] leading-[100%] tracking-[0] text-black pb-2">
                    Pick up Station
                  </p>
                  <p className="font-['Instrument_Sans'] font-normal text-[16.47px] leading-[100%] tracking-[0] text-[#000000]">
                    Abuja Station 1<br />
                    No 27, Monrovia street,
                    <br />
                    wuse 2, Abuja
                  </p>
                </div>
                <div className="mt-8">
                  <p className="font-['Instrument_Sans'] font-normal text-[11.77px] leading-[100%] tracking-[0] text-black pb-2">
                    Drop off Station
                  </p>
                  <p className="font-['Instrument_Sans'] font-normal text-[16.47px] leading-[100%] tracking-[0]">
                    Abuja Station 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-1 mb-4">
          {["Healthy", "100% Battery", "500KM"].map((label, index) => (
            <button
              key={index}
              className="px-4 py-2 text-xs cursor-pointer rounded border border-[#BEBFC5] bg-transparent text-[#101010]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignedVehicleCard;
