"use client";
import CloseButton from "@/components/global/CloseButton";
import React from "react";
import HeaderSection from "./_components/HeaderSection";
import BlogCard from "./_components/BlogCard";

import { blogs } from "@/utils/BlogsData/BlogsData";
import FooterSection from "@/components/global/FooterSection";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const router = useRouter();
  return (
    <>
      <div className="py-6 px-4 lg:py-10 lg:px-16 ">
        <div className="flex justify-end">
          <CloseButton />
        </div>

        <div>
          <p className="font-normal text-lg font-jakarta text-center">Blogs</p>{" "}
          <p className="font-bold text-lg font-jakarta text-center">
            View the most recent blogs to any technology
          </p>
        </div>

        <div className="py-6">
          <HeaderSection text="Blogs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.mainHeading[0].title}
              writtenBy={blog.writtenBy}
              writtenDate={blog.writtenDate}
              cardImage={blog.images[0]}
              description={blog.mainHeading[0].paragraphs[0]}
              onClick={() => {
                router.push(
                  `/Blogs/${blog.id}?blog=${encodeURIComponent(
                    JSON.stringify(blog)
                  )}`
                );
              }}
            />
          ))}
        </div>
      </div>

      <div>
        <FooterSection />
      </div>
    </>
  );
};

export default Blogs;
