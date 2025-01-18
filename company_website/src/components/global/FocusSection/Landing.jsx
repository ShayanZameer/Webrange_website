import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";
const Landing = ({ title, subtitle, onClick, buttonText, imageSrc }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Background Design"
          layout="fill"
          quality={100}
          className="w-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-700">
          {title}
        </h2>
        <h1 className="text-3xl font-jakarta md:text-5xl font-bold leading-tight mt-2 max-w-3xl text-black">
          {subtitle}
        </h1>

        <button
          onClick={onClick}
          className="mt-6 px-8 py-2 text-sm font-medium text-black border border-black rounded-full hover:bg-gray-200 transition group relative overflow-hidden"
        >
          <span className="block transition-transform group-hover:-translate-y-1">
            {buttonText}
          </span>
          <IoIosArrowRoundDown className="text-base ml-6 transition-transform group-hover:translate-y-1 group-hover:scale-150 group-hover:text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
