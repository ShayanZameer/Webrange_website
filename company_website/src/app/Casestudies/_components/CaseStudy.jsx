// "use client";

// import Image from "next/image";
// import Platform from "./Platform";
// import Ticon from "./Ticon";
// import { FaArrowRight } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// const CaseStudy = ({
//   id,
//   title,
//   images,
//   aboutProject,
//   platform,
//   technologyIcons,
// }) => {
//   const router = useRouter();

//   const handleReadMoreClick = () => {
//     router.push(`/Casestudies/${id}`);
//   };

//   return (
//     <section className="mb-12">
//       {/* Image Section */}
//       <div className="w-full relative group">
//         <div className="overflow-hidden mx-auto relative group">
//           <Image
//             src={images[0]} // Display the first image
//             alt={title}
//             width={1300}
//             height={400}
//             className="w-full h-auto mx-auto object-cover transition-all duration-300 group-hover:scale-[0.99] group-hover:rounded-lg"
//           />
//           <button
//             onClick={handleReadMoreClick}
//             className="absolute bottom-4 right-4 transform translate-y-2 bg-black text-white px-4 py-3 text-sm font-semibold rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center gap-2"
//           >
//             <span className="font-jakarta text-xs">Read More</span>
//             <FaArrowRight size={16} />
//           </button>
//         </div>
//       </div>

//       {/* Text Content */}
//       <div className="flex flex-col lg:flex-row items-start justify-evenly space-y-8 lg:space-y-0 mt-8">
//         {/* Title and Platforms */}
//         <div className="lg:w-1/3 w-full">
//           <h1 className="text-3xl lg:text-4xl font-bold pt-2 mb-4">{title}</h1>
//           <div className="flex flex-wrap gap-3">
//             {platform.map((item, index) => (
//               <Platform key={index} text={item} />
//             ))}
//           </div>
//         </div>

//         {/* About Project */}
//         <div className="lg:w-1/3 w-full">
//           <h2 className="text-lg lg:text-xl font-semibold mb-2 font-jakarta">
//             About Project
//           </h2>
//           <p className="text-sm lg:text-base leading-relaxed font-jakarta font-light">
//             {aboutProject}
//           </p>
//         </div>

//         {/* Technologies Used */}
//         <div className="lg:w-1/3 w-full ml-4">
//           <h2 className="text-lg lg:text-xl font-semibold mb-2 font-jakarta">
//             Technologies Used
//           </h2>
//           <div className="flex flex-wrap items-center gap-4 lg:gap-6">
//             {technologyIcons.map((icon, index) => (
//               <Ticon key={index} url={icon} text={`Tech ${index + 1}`} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 border-t border-gray-300"></div>
//     </section>
//   );
// };

// export default CaseStudy;

"use client";

import Image from "next/image";
import Platform from "./Platform";
import Ticon from "./Ticon";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CaseStudy = ({
  id,
  title,
  images,
  category,
  aboutProject,
  platform,
  technologyIcons,
  problemStatement,
  solution,
}) => {
  const router = useRouter();

  // const handleReadMoreClick = () => {
  //   router.push(`/Casestudies/${id}`);
  // };

  const handleReadMoreClick = () => {
    router.push(
      `/Casestudies/${id}?caseStudy=${encodeURIComponent(
        JSON.stringify({
          id,
          title,
          images,
          category,
          aboutProject,
          platform,
          technologyIcons,
          problemStatement,
          solution,
        })
      )}`
    );
  };

  return (
    <section className="mb-12">
      <div className="w-full relative group">
        <div className="overflow-hidden mx-auto relative group">
          <Image
            src={images[0] || ""}
            alt={title}
            width={1300}
            height={400}
            className="w-full h-auto mx-auto object-cover transition-all duration-300 group-hover:scale-[0.99] group-hover:rounded-lg"
          />
          <button
            onClick={handleReadMoreClick}
            className="absolute bottom-4 right-4 transform translate-y-2 bg-black text-white px-4 py-3 text-sm font-semibold rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center gap-2"
          >
            <span className="font-jakarta text-xs">Read More</span>
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-evenly space-y-8 lg:space-y-0 mt-8">
        <div className="lg:w-1/3 w-full">
          <h1 className="text-3xl lg:text-4xl font-bold pt-2 mb-4">{title}</h1>
          <div className="flex flex-wrap gap-3">
            {platform.map((item, index) => (
              <Platform key={index} text={item} />
            ))}
          </div>
        </div>

        {/* About Project */}
        <div className="lg:w-1/3 w-full">
          <h2 className="text-lg lg:text-xl font-semibold mb-2 font-jakarta">
            About Project
          </h2>
          <p className="text-sm lg:text-base leading-relaxed font-jakarta font-light">
            {aboutProject}
          </p>
        </div>

        {/* Technologies Used */}
        <div className="lg:w-1/3 w-full ml-4">
          <h2 className="text-lg lg:text-xl font-semibold mb-2 font-jakarta">
            Technologies Used
          </h2>
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            {technologyIcons.map((icon, index) => (
              <Ticon key={index} url={icon} text={`Tech ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300"></div>
    </section>
  );
};

export default CaseStudy;
