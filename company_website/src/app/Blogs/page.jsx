"use client";
import React from "react";
import HeaderSection from "./_components/HeaderSection";
import BlogCard from "./_components/BlogCard";

import { blogs } from "@/utils/BlogsData/BlogsData";
import FooterSection from "@/components/global/FooterSection";
import { useRouter } from "next/navigation";
import AnimatedWrapper from "@/components/Animation/AnimatedWrapper";
import AnimatedPage from "@/components/Animation/PageAnimated";

const Blogs = () => {
  const router = useRouter();
  return (
    <>
      <AnimatedPage title="Blogs">
        <div className="py-6 px-4 lg:py-10 lg:px-16 bg-white ">
          <AnimatedWrapper>
            <div>
              <p className="font-normal text-lg font-jakarta text-center">
                Blogs
              </p>{" "}
              <p className="font-bold text-lg font-jakarta text-center">
                View the most recent blogs to any technology
              </p>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper>
            <div className="py-6">
              <HeaderSection text="Blogs" />
            </div>
          </AnimatedWrapper>

          {/* <AnimatedWrapper> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.mainHeading[0].title}
                writtenBy={blog.writtenBy}
                writtenDate={blog.writtenDate}
                cardImage={blog.heroImage}
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
          {/* </AnimatedWrapper> */}
        </div>
        <AnimatedWrapper>
          <div>
            <FooterSection />
          </div>
        </AnimatedWrapper>
      </AnimatedPage>
    </>
  );
};

export default Blogs;
