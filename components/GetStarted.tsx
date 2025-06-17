import React from "react";
import Image from "next/image";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const GetStarted: React.FC = () => {
  return (
    <section className="bg-white w-full py-10 px-4">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:px-12 items-start">
        {/* Left Column: Heading + Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // ✅ Ease in from left
          whileInView={{ opacity: 1, x: 0 }} // ✅ Trigger on scroll into view
          viewport={{ once: false, amount: 0.2 }} // ✅ Animate when 20% in view, only once
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start w-full space-y-8 mb-12 md:mb-0"
        >
          {/* Heading */}
          <div className="w-full px-4 md:px-8 lg:px-16">
            <h1
              className="text-[32px] md:text-6xl font-medium leading-[110%] tracking-[-0.04em] text-transparent bg-clip-text"
              style={{
                fontFamily: "Instrument Sans",
                backgroundImage:
                  "linear-gradient(149.44deg, #1A1A1A 40.45%, rgba(56, 56, 56, 0.6) 123.45%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              How to get started
              <br className="block md:hidden" />
              <span className="md:ml-2">in few steps</span>
            </h1>
          </div>

          {/* Phone image */}
          <div className="w-full flex justify-center md:justify-start pt-8 px-8">
            <Image
              src="/phone.png"
              alt="3YP Rider App"
              width={400}
              height={600}
              className="w-[70%] md:w-[320px] lg:w-[400px] h-auto"
              priority
            />
          </div>
        </motion.div>
        {/* Right Column: Steps */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // ✅ Ease in from right
          whileInView={{ opacity: 1, x: 0 }} // ✅ Trigger on scroll into view
          viewport={{ once: false, amount: 0.2 }} // ✅ Animate when 20% in view, only once
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col space-y-8 px-2 md:px-0 md:pt-48"
        >
          {" "}
          {/* ✅ removed pt-48 */}
          {/* Step 1 */}
          <div className="flex gap-4 md:gap-12 items-start">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-[#267b5f] mb-5 flex items-center justify-center text-white font-bold text-base p-1">
                1
              </div>
              <div className="h-18 border-l-2 border-dotted border-[#267b5f]"></div>
            </div>
            <div>
              <h1 className="font-medium text-[#267b5f] text-xl md:text-3xl -mt-4">
                {" "}
                {/* ✅ responsive text size */}
                Download the 3YP mobile app
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-2 font-normal">
                {" "}
                {/* ✅ responsive text size */}
                <span className="block">
                  Get the 3YP mobile app on your Android or iOS devices
                </span>
                <span className="block">
                  and set up your account in a minute.
                </span>
              </p>

              <div className="flex gap-2">
                <button className="bg-black text-white rounded-full px-4 py-2 text-xs flex items-center gap-1">
                  <FontAwesomeIcon icon={faGooglePlay} /> Play store
                </button>
                <button className="bg-black text-white rounded-full px-4 py-2 text-xs flex items-center gap-1">
                  <FontAwesomeIcon icon={faApple} /> App store
                </button>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex gap-4 md:gap-12 items-start">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-[#267b5f] mb-5 flex items-center justify-center text-white font-bold text-base p-1">
                2
              </div>
              <div className="h-18 border-l-2 border-dotted border-[#267b5f]"></div>
            </div>
            <div>
              <h3 className="font-medium text-[#101010] text-xl md:text-3xl -mt-2">
                {" "}
                {/* ✅ responsive text size */}
                Create an account
              </h3>
              <p className="text-gray-600 text-base md:text-lg mb-2 font-normal">
                {" "}
                {/* ✅ responsive text size */}
                <span className="block">
                  Sign up for an account with your name,
                </span>
                <span className="block">email, and phone number.</span>
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex gap-4 md:gap-12 items-start">
            <div className="w-6 h-6 rounded-full bg-[#267b5f] flex items-center justify-center text-white font-bold text-base p-1">
              3
            </div>
            <div>
              <h3 className="font-medium text-[#101010] text-xl md:text-3xl -mt-4">
                {" "}
                {/* ✅ responsive text size */}
                Relax and Your ride’s a tap away
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-normal">
                {" "}
                {/* ✅ responsive text size */}
                Sit back and relax. Your ride’s a tap away. Enjoy the platform
                seamlessly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
