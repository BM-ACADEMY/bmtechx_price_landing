import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <div className="text-sm text-gray-500" id="home">
      <div className="h-[580px] flex flex-col items-center justify-center px-4 text-center relative">
        {/* Tagline */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-gray-300/15 p-1 text-sm text-gray-800 max-w-full">
          <p>Unlock the New Era of Simplicity</p>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-6xl text-gray-800 relative z-10 flex flex-wrap justify-center gap-2">
          Launch Your  Website in 1 Days - From {" "}
          <span className="relative inline-block">
            {/* Word to highlight */}
            <span className="relative z-10 text-[#7d39e8]">₹1999 Only</span>

            {/* Underline Animation */}
            <motion.svg
              viewBox="0 0 200 30"
              preserveAspectRatio="none"
             className="absolute left-0 -bottom-5  w-full h-[0.7em] pointer-events-none"

              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M5 20 C 50 35, 150 5, 195 20"
                fill="none"
                stroke="#5245e5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={draw}
              />
            </motion.svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-center mt-6 px-4">
          Unlock potential with tailored strategies designed for success.
          Discover customized strategies built to drive real results.
          Streamline your processes, boost productivity, and stay competitive in today’s fast-changing market.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button onClick={() => {
            window.location.href = "tel:+919944288271";
          }} className="px-7 py-3 rounded bg-indigo-500 text-white font-medium">
            Talk to Our Team
          </button>
          <button
  onClick={() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="group px-7 py-2.5 flex items-center gap-2 font-medium"
>
  Learn more
  <svg
    className="group-hover:translate-x-1 transition pt-0.5"
    width="12"
    height="9"
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
      stroke="#6B7280"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

        </div>
      </div>
    </div>
  );
}
