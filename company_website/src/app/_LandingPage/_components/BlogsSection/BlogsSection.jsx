"use client";
import { blogs } from "@/utils/BlogsData/BlogsData";
import BlogCard from "../../../Blogs/_components/BlogCard";

import HeaderSection from "@/app/Blogs/_components/HeaderSection";
import { useRouter } from "next/navigation";
const BlogsSection = () => {
  const router = useRouter();
  return (
    <div className="p-6">
      <HeaderSection
        text="Blogs"
        onClick={() => {
          router.push("/Blogs");
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {blogs.slice(1, 4).map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.mainHeading[0].title}
            writtenBy={blog.writtenBy}
            writtenDate={blog.writtenDate}
            cardImage={blog.images[0]}
            description={blog.mainHeading[0].paragraphs[0]}
            // onClick={() => {
            //   router.push(
            //     `/Blogs/${blog.id}?blog=${encodeURIComponent(
            //       JSON.stringify(blog)
            //     )}`
            //   );
            // }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
