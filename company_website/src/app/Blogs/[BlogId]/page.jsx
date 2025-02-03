"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CloseButton from "@/components/global/CloseButton";
import ImageGrid from "./_components/ImageGrid";
import HeaderSection from "../_components/HeaderSection";
import BlogCard from "../_components/BlogCard";
import { handleCopy } from "@/utils/CodeCopyFunction/handleCopy";
import AnimatedWrapper from "@/components/Animation/AnimatedWrapper";
import FooterSection from "@/components/global/FooterSection";
import { blogs } from "@/utils/BlogsData/BlogsData";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogParam = searchParams.get("blog");

  const blogData = blogParam ? JSON.parse(blogParam) : null;
  const {
    heroImage,
    title,
    mainHeading,
    subheadings,
    images,
    writtenBy,
    writtenDate,
  } = blogData || {};

  const [copied, setCopied] = useState({});

  // Debugging the blog data
  console.log(blogData);

  return (
    <>
      {/* Hero Section */}
      {heroImage && (
        <div className=" bg-white">
          <div
            className="relative w-full h-[500px] bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute top-4 right-4 z-10">
              <CloseButton />
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
              <h1 className="text-2xl md:text-4xl font-bold font-jakarta text-shadow-lg">
                {title}
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <div className="py-6 px-4 lg:py-10 lg:px-16 bg-white">
        <AnimatedWrapper>
          {/* Main Heading Section */}
          {mainHeading &&
            mainHeading.length > 0 &&
            mainHeading.map((heading, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-jakarta text-xl font-semibold py-2">
                  {heading.title}
                </h3>
                {heading.paragraphs &&
                  heading.paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="font-jakarta text-sm font-normal mb-2"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            ))}
        </AnimatedWrapper>

        {/* Images Section */}
        {images && images.length > 0 && (
          // <AnimatedWrapper>
          <div className="mt-8 bg-white">
            <ImageGrid images={images} />
          </div>
          // </AnimatedWrapper>
        )}

        {/* Subheadings Section */}
        {subheadings && subheadings.length > 0 && (
          // <AnimatedWrapper>
          <div className="mt-8 bg-white">
            {subheadings.map((subheading, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-jakarta text-lg font-semibold">
                  {subheading.heading}
                </h3>
                {Array.isArray(subheading.desc) ? (
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    {subheading.desc.map((descItem, idx) => (
                      <li key={idx}>{descItem}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-700 mt-2">
                    {subheading.desc}
                  </p>
                )}

                {/* Code Section */}
                {subheading.code && (
                  <div className="relative mt-6">
                    <div className="absolute top-2 right-2">
                      <button
                        onClick={() =>
                          handleCopy(subheading.code, setCopied, index)
                        }
                        className="bg-white text-black p-2 px-4 rounded-xl shadow-md hover:bg-gray-500 transition"
                        aria-label="Copy to Clipboard"
                      >
                        {copied[index] ? "Copied!" : "Copy"}
                      </button>
                    </div>

                    <div className="bg-gray-900 text-white p-4 rounded-md shadow-md overflow-x-auto">
                      <pre className="language-javascript">
                        <code className="text-sm font-mono">
                          {subheading.code}
                        </code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Author & Date */}
        {(writtenBy || writtenDate) && (
          <AnimatedWrapper>
            <div className="mt-8 bg-white border-t pt-4">
              <p className="text-sm text-gray-500">
                Written by: <span className="font-semibold">{writtenBy}</span>
              </p>
              <p className="text-sm text-gray-500">
                Published on: {writtenDate}
              </p>
            </div>
          </AnimatedWrapper>
        )}

        {/* Related Blogs Section */}
        {blogs.length > 1 && (
          <AnimatedWrapper>
            <div className="py-6 bg-white">
              <HeaderSection
                text="Related Blogs"
                onClick={() => router.push("/Blogs")}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
              {blogs
                .filter((blog) => blog.id !== blogData?.id) // Exclude the current blog
                .slice(0, 3)
                .map((blog, index) => (
                  <BlogCard
                    key={index}
                    title={blog.mainHeading[0].title}
                    writtenBy={blog.writtenBy}
                    writtenDate={blog.writtenDate}
                    cardImage={blog.heroImage}
                    description={blog.mainHeading[0].paragraphs[0]}
                    onClick={() =>
                      router.push(
                        `/Blogs/${blog.id}?blog=${encodeURIComponent(
                          JSON.stringify(blog)
                        )}`
                      )
                    }
                  />
                ))}
            </div>
          </AnimatedWrapper>
        )}
      </div>

      {/* Footer Section */}
      <AnimatedWrapper>
        <FooterSection />
      </AnimatedWrapper>
    </>
  );
};

export default Page;
