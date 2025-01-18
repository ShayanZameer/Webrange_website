import { FaArrowRight } from "react-icons/fa";
import BlogCard from "./_components/BlogCard";
const BlogsSection = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between">
        <p className="font-semibold font-jakarta text-4xl">Blogs</p>
        <button className="  border  border-black px-4 py-3 text-sm font-semibold rounded-full    flex items-center justify-center gap-2">
          <span className="font-jakarta text-xs">View All Blogs</span>
          <FaArrowRight size={16} />
        </button>
      </div>

      <div className="py-8 flex space-x-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsSection;
