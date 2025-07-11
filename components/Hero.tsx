"use client";

import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  // ✅ FIXED: Moved inside the component function
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }} // ✅ Add opacity animation here
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full  flex flex-col items-center text-center bg-white
                 pt-[100px] pb-4 md:pt-[290px] md:pb-8 overflow-x-hidden"
    >
      <h1 className="font-['Instrument_Sans'] text-[36px] sm:text-[87.49px] font-medium leading-[100%] tracking-[-1.69px] sm:tracking-[-4.1px] text-[#277A5F] mb-4 text-center">
        Your ride’s a tap away
      </h1>
      <p
        className="font-['Instrument_Sans'] font-medium text-[14px] leading-[100%] tracking-[-0.05em] text-center text-[#101010] mx-auto mb-12
          md:text-[24px] md:leading-[100%] md:tracking-[-0.05em]
          lg:text-[24px] lg:leading-[100%] lg:tracking-[-0.05em]"
        style={{ maxWidth: "769px" }}
      >
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
        className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4 md:px-0 md:mb-[93px]"
      >
        {[
          { icon: faGooglePlay, label: "Download app" },
          { icon: faApple, label: "Download app" },
        ].map(({ icon, label }, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#277A5F] text-white px-6 py-5 rounded-full text-sm font-medium flex items-center gap-2 shadow cursor-pointer font-['Instrument_Sans']"
          >
            <FontAwesomeIcon icon={icon} />
            {label}
          </motion.button>
        ))}
      </motion.div>

      {/* --- Static Road and Cars --- */}
      <div className="relative w-full h-[300px] mt-8 overflow-hidden">
        <Image
          src="/road.png"
          alt="Road"
          fill
          className="absolute top-0 left-0 object-cover z-0"
        />
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/Car1.png"
            alt="Green Car"
            width={320}
            height={200}
            className="absolute z-10"
            style={{
              top: "-9px",
              left: "238px",
              transform: "rotate(-1.82deg)",
            }}
          />
          <Image
            src="/Car2.png"
            alt="White Car"
            width={250}
            height={130}
            className="absolute z-10"
            style={{
              top: "20px",
              right: "220px",
              transform: "rotate(2.77deg) scaleX(1)",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
