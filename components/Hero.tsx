// Hero.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center pt-8 pb-4 md:pt-16 md:pb-8 overflow-x-hidden">
      {" "}
      {/* ✅ Added overflow-x-hidden here */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#277A5F] mb-4 leading-tight">
        Your ride’s a tap away
      </h1>
      <p className="text-gray-700 max-w-xl mx-auto mb-6 text-base md:text-lg">
        Whether you’re catching a flight, going out for the night, commuting to
        the office, or running errands, the 3YP app helps you get there quickly
        and easily.
      </p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4 md:px-0"
      >
        {[
          { icon: faGooglePlay, label: "Download app" },
          { icon: faApple, label: "Download app" },
        ].map(({ icon, label }, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#277A5F] text-white px-6 py-3 rounded-full text-base font-medium flex items-center gap-2 shadow cursor-pointer"
          >
            <FontAwesomeIcon icon={icon} />
            {label}
          </motion.button>
        ))}
      </motion.div>
      {/* --- Static Road and Cars --- */}
      <div className="relative w-full h-[300px] mt-8 overflow-hidden">
        {" "}
        {/* ✅ Added overflow-hidden here */}
        {/* Road */}
        <Image
          src="/road.png"
          alt="Road"
          fill
          className="absolute top-0 left-0 object-cover z-0"
        />
        {/* Cars */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Car 1 */}
          <Image
            src="/Car1.png"
            alt="Green Car"
            width={180}
            height={60}
            className="absolute bottom-[50px] z-10 animate-car"
            style={{ left: 0 }}
          />

          {/* Car 2 (flipped horizontally if needed) */}
          <Image
            src="/Car2.png"
            alt="White Car"
            width={160}
            height={50}
            className="absolute bottom-[100px] z-10 animate-car animate-car-2"
            style={{ left: 0, transform: "scaleX(1)" }} // Change to scaleX(-1) if image is reversed
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
