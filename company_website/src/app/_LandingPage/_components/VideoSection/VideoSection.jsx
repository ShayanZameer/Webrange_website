"use client";
import { FaInstagram, FaTwitter, FaTimes } from "react-icons/fa";
import IMAGES from "@/constants/images";
import { useRouter } from "next/navigation";

const VideoSection = () => {
  const router = useRouter();
  return (
    <div className="relative w-full h-screen overflow-hidden font-[Jakarta]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-between h-full text-white bg-black bg-opacity-50">
        <div className="flex justify-between items-center px-6 sm:px-9 py-5">
          <div className="text-xs sm:text-sm font-jakarta text-[#FFFFFF80]">
            Monday 15:20AM
          </div>
          <div>
            <img
              src={IMAGES.icons.logo}
              alt="Logo"
              className="w-12 h-10 sm:w-16 sm:h-12"
            />
          </div>
          <div className="flex gap-3 sm:gap-4 text-[#FFFFFF80]">
            <FaInstagram className="text-base sm:text-lg cursor-pointer hover:text-gray-400" />
            <FaTwitter className="text-base sm:text-lg cursor-pointer hover:text-gray-400" />
            <FaTimes className="text-base sm:text-lg cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between px-4 sm:px-6 lg:px-12 h-full">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-jakarta font-bold whitespace-nowrap">
              WE REIMAGINE
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-jakarta font-bold whitespace-nowrap">
              TOMORROW
            </h1>
            <p className="mt-2 text-sm sm:text-base lg:text-lg leading-relaxed font-jakarta">
              Driving growth and molding the future through transformative
              change
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => {
                  router.push("/contactus");
                }}
                className="mt-4 text-black px-6 sm:px-8 lg:px-16 py-2 sm:py-3 bg-white text-xs sm:text-sm font-semibold rounded-full flex items-center justify-center gap-2"
              >
                <span className="font-jakarta">Let's Talk</span>
              </button>
            </div>
          </div>
          <div className="hidden lg:flex gap-4 items-center">
            <img
              src={IMAGES.hero2}
              alt="Hero 2"
              className="w-32 sm:w-44 h-64 sm:h-80 object-cover rounded-3xl shadow-lg"
            />
            <div className="h-full flex items-center">
              <img
                src={IMAGES.hero1}
                alt="Hero 1"
                className="w-28 sm:w-40 h-48 sm:h-60 object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
