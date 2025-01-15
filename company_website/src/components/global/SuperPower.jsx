import React from "react";

const SuperPower = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Title */}
      <h2 className="text-sm font-semibold uppercase tracking-wider font-jakarta">
        Our Superpower
      </h2>

      {/* Main Heading */}
      <h1 className="mt-2 text-3xl md:text-5xl font-bold font-jakarta text-black leading-tight max-w-2xl">
        We just doing what
        <br /> others don't
      </h1>

      {/* Description */}
      <p className="mt-4 text-sm font-jakarta  max-w-md">
        We prioritize robust UX structuring before wireframing and validate our
        hypotheses with real.
      </p>

      {/* Call-to-Action Button */}
      <button className="mt-6 px-6 py-3 text-sm font-medium font-jakarta text-white bg-black rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
        Explore our services <span className="text-lg">&#8594;</span>
      </button>
    </div>
  );
};

export default SuperPower;
