import BlogCard from "../../../Blogs/_components/BlogCard";

import HeaderSection from "@/app/Blogs/_components/HeaderSection";
const BlogsSection = () => {
  return (
    <div className="p-6">
      <HeaderSection />
      <div className="py-8 flex space-x-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsSection;
