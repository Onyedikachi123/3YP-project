"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";
import type * as LType from "leaflet"; // ✅ FIX 1: Import Leaflet types for type safety

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

let L: typeof LType; // ✅ FIX 2: Explicitly type L instead of using `any`

const LiveMap = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "adminLogs">(
    "overview"
  );

  useEffect(() => {
    const init = async () => {
      try {
        const leaflet = await import("leaflet"); // ✅ FIX 3: Use dynamic `import()` instead of `require()`
        L = leaflet;

        delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })
          ._getIconUrl; // ✅ FIX 4: Avoid `any`
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "/leaflet/marker-icon-2x.png",
          iconUrl: "/leaflet/marker-icon.png",
          shadowUrl: "/leaflet/marker-shadow.png",
        });

        if (!navigator.geolocation) {
          setErrorMessage("Geolocation is not supported by your browser.");
          return;
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setPosition({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            });
            setErrorMessage(null);
          },
          (err) => {
            const errorMessages: { [key: number]: string } = {
              1: "Permission denied for location access.",
              2: "Position unavailable.",
              3: "Timeout while fetching location.",
            };
            setErrorMessage(
              errorMessages[err.code] || "Failed to get current location."
            );
          },
          { enableHighAccuracy: true, timeout: 10000 }
        );

        const watchId = navigator.geolocation.watchPosition(
          (pos) => {
            setPosition({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            });
            setErrorMessage(null);
          },
          (err) => {
            const errorMessages: { [key: number]: string } = {
              1: "Permission denied for live location.",
              2: "Live position unavailable.",
              3: "Timeout occurred for live tracking.",
            };
            setErrorMessage(
              errorMessages[err.code] || "Error watching location."
            );
          },
          { enableHighAccuracy: true }
        );

        return () => navigator.geolocation.clearWatch(watchId);
      } catch (error) {
        setErrorMessage("Error initializing map. Please reload.");
        console.error("Leaflet init error:", error);
      }
    };

    init();
  }, []);

  const RecenterAutomatically = ({
    lat,
    lng,
  }: {
    lat: number;
    lng: number;
  }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng], map.getZoom());
    }, [lat, lng, map]);
    return null;
  };

  return (
    <div className="px-8">
      <div className="flex space-x-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-5 font-['Instrument_Sans'] font-medium text-[18px] leading-[100%] tracking-[-0.066em] ${
            activeTab === "overview"
              ? "border-b-2 border-[#277A5F] text-[#277A5F]"
              : "text-gray-500"
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActiveTab("adminLogs")}
          className={`pb-5 font-['Instrument_Sans'] font-normal text-[18px] leading-[100%] tracking-[-0.066em] ${
            activeTab === "adminLogs"
              ? "border-b-2 border-[#277A5F] text-[#277A5F]"
              : "text-[#0F1017]"
          }`}
        >
          Admin Logs
        </button>
      </div>

      {activeTab === "overview" && (
        <>
          <div className="shadow-md bg-white p-3">
            <h3 className="font-['Instrument_Sans'] font-medium text-[25.29px] leading-[100%] tracking-[-0.065em] mb-2">
              Live Operation Map
            </h3>
          </div>
          {errorMessage ? (
            <div className="flex items-center justify-center h-[300px] rounded-md overflow-hidden text-red-600">
              {errorMessage}
            </div>
          ) : !position ? (
            <div className="flex items-center justify-center h-[300px] rounded-md overflow-hidden text-gray-500">
              Loading location...
            </div>
          ) : (
            <div className="w-full h-[300px] rounded-md overflow-hidden">
              <MapContainer
                center={[position.lat, position.lng]}
                zoom={13}
                scrollWheelZoom={true}
                className="w-full h-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[position.lat, position.lng]}
                  zIndexOffset={1000}
                >
                  <Popup>Your current location</Popup>
                </Marker>
                <RecenterAutomatically lat={position.lat} lng={position.lng} />
              </MapContainer>
            </div>
          )}
        </>
      )}

      {activeTab === "adminLogs" && (
        <div className="text-sm text-gray-700">
          <p>Admin Logs will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default LiveMap;
