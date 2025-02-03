import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
const BlogCard = ({
  title,
  writtenBy,
  writtenDate,
  cardImage,
  description,
  onClick,
}) => {
  return (
    <div className="max-w-sm overflow-hidden">
      <div className="relative ">
        <Image
          src={cardImage || "/images/placeholder.png"}
          alt={title}
          className="w-full h-48 rounded-t-2xl"
          width={500}
          height={192}
          objectFit="cover"
        />
      </div>

      <div className="py-4">
        <div className="text-sm text-[#303F9F] font-jakarta mb-2">
          <span className="font-medium text-[#303F9F] font-jakarta">
            {writtenBy}
          </span>{" "}
          • {writtenDate}
        </div>

        <div className="flex justify-between mt-4">
          <h3 className="text-lg font-semibold w-[280px] font-jakarta text-gray-900 leading-tight">
            {title}
          </h3>

          <MdArrowOutward
            onClick={onClick}
            className="text-lg my-1 hover:scale-150 cursor-pointer"
          />
        </div>

        <p className="text-sm font-jakarta text-[#667085] mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
