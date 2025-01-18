"use client";
import { FaInstagram, FaTwitter, FaTimes } from "react-icons/fa";
import IMAGES from "@/constants/images";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const getCurrentDateTime = () => {
  const current = new Date();
  return current.toLocaleString("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
const VideoSection = () => {
  const [dateTime, setDateTime] = useState(getCurrentDateTime());

  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);
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
            {dateTime}
          </div>
          <div>
            <Image src={IMAGES.icons.logo} alt="Logo" width={64} height={48} />
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
            <Image
              src={IMAGES.hero2}
              alt="Hero 2"
              width={176}
              height={320}
              className="object-cover rounded-3xl shadow-lg"
            />

            <div className="flex items-center">
              <Image
                src={IMAGES.hero1}
                alt="Hero 1"
                width={160}
                height={160}
                className="object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
