import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const VideoSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Dummy video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col  justify-center h-full text-white bg-black bg-opacity-50">
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <FaArrowLeft className="text-3xl sm:text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          <FaArrowRight className="text-3xl sm:text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
