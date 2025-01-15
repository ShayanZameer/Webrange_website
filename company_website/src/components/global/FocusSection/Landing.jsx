// import Image from "next/image";
// import IMAGES from "@/constants/images";
// import { IoIosArrowRoundDown } from "react-icons/io";

// const Landing = () => {
//   return (
//     <div className="relative h-screen">
//       <div className="absolute inset-0 ">
//         <Image
//           src={IMAGES.about}
//           alt="Background Design"
//           layout="fill"
//           quality={100}
//           className=" w-full"
//         />
//       </div>

//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//         <h2 className="text-sm font-semibold uppercase font- tracking-wider text-gray-700">
//           Who we are
//         </h2>
//         <h1 className="text-3xl font-jakarta md:text-5xl font-bold leading-tight mt-2 max-w-3xl text-black">
//           We are a remote design team with strong experience in creating UX/UI
//           solutions
//         </h1>
//         <button className="mt-6 px-6 py-2 text-sm font-medium text-black border border-black rounded-full hover:bg-gray-200 transition">
//           Leadership Team <br />{" "}
//           <IoIosArrowRoundDown className="text-center  text-base ml-12 " />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Landing;

import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";

const Landing = ({ title, subtitle, description, buttonText, imageSrc }) => {
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
        <button className="mt-6 px-6 py-2 text-sm font-medium text-black border border-black rounded-full hover:bg-gray-200 transition">
          {buttonText}
          <br />
          <IoIosArrowRoundDown className="text-center text-base ml-12" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
