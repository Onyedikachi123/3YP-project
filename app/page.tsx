"use client";

import React from "react";
import Hero from "@/components/Hero";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Fixed Hero (background layer) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </div>

      {/* Placeholder to allow scroll past Hero */}
      <div className="h-screen" />

      {/* Scrolling content layered above Hero */}
      <div className="relative z-10">
        <GetStarted />
        <Footer />
      </div>
    </main>
  );
}
