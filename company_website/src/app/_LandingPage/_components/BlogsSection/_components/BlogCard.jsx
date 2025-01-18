import IMAGES from "@/constants/images";
import { MdArrowOutward } from "react-icons/md";

const BlogCard = () => {
  return (
    <div className="max-w-sm overflow-hidden">
      <div className="relative">
        <img
          src={IMAGES.blog}
          alt="Office chairs"
          className=" w-full    h-48 "
        />
      </div>

      <div className=" py-4">
        <div className="text-sm text-[#303F9F] font-jakarta mb-2">
          <span className="font-medium text-[#303F9F] font-jakarta">
            Olivia Rhye
          </span>{" "}
          • 1 Jan 2023
        </div>

        <div className="flex justify-between mt-4 ">
          <h3 className="text-lg font-semibold w-[280px] font-jakarta text-gray-900 leading-tight">
            Understanding the Importance of CMAs in Real Estate
          </h3>

          <MdArrowOutward className="text-lg my-1 " />
        </div>

        <p className="text-sm font-jakarta text-[#667085] mt-3">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
