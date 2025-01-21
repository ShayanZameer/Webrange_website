import React from "react";

const ProblemSection = ({ imageSrc, heading, description }) => {
  return (
    <div className="flex-1 border-r-borderColour border-r p-2 border-b-borderColour border-b">
      <div className="flex justify-between flex-1">
        <h3 className="font-semibold text-base mt-1 mb-4">{heading}</h3>
        <img
          src={imageSrc}
          alt={heading}
          className="object-cover w-6 h-6 pt-1 transition-all duration-300 group-hover:scale-[0.99] group-hover:rounded-lg"
        />
      </div>
      <p className="text-sm lg:text-sm font-jakarta">{description}</p>
    </div>
  );
};

export default ProblemSection;
