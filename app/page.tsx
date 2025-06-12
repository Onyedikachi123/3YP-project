// app/page.tsx or app/home/page.tsx
"use client";

import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";

// --- Animation variants for the road ---


const Home = () => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* How to get started */}
      <GetStarted />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
