import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const VideoSection = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
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

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-center h-full text-white bg-black bg-opacity-50">
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <FaChevronLeft className="text-3xl sm:text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
            <FaChevronRight className="text-3xl sm:text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>

          <div className="container text-white mx-auto px-20">
            <h1 className="text-6xl font-medium">We</h1>
            <h1 className="text-6xl font-medium">reimagine</h1>
            <h1 className="text-6xl font-medium">tomorrow</h1>

            <p className="mt-2 sm:mt-4 text-sm sm:text-lg">
              Driving growth and molding the future through transformative
              change
            </p>
            <button className="cursor-pointer mt-4 sm:mt-8 px-4 py-1 bg-white text-black rounded-lg hover:bg-gray-300">
              Get In touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
