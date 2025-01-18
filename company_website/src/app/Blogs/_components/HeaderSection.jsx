// import { FaArrowRight } from "react-icons/fa";

// const HeaderSection = ({ text, onClick }) => {
//   return (
//     <div className="flex justify-between">
//       <p className="font-semibold font-jakarta text-4xl">{text}</p>
//       <button
//         onClick={onClick}
//         className="  border  border-black px-4 py-3 text-sm font-semibold rounded-full    flex items-center justify-center gap-2"
//       >
//         <span className="font-jakarta text-xs">View All Blogs</span>
//         <FaArrowRight size={16} />
//       </button>
//     </div>
//   );
// };

// export default HeaderSection;

import { FaArrowRight } from "react-icons/fa";

const HeaderSection = ({ text, onClick }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-semibold font-jakarta text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
        {text}
      </p>
      <button
        onClick={onClick}
        className="border border-black px-4 py-3 text-sm font-semibold rounded-full flex items-center justify-center gap-2"
      >
        <span className="font-jakarta text-xs sm:text-sm">{`View All Blogs`}</span>
        <FaArrowRight size={16} />
      </button>
    </div>
  );
};

export default HeaderSection;
