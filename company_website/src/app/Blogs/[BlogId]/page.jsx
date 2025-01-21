"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import CloseButton from "@/components/global/CloseButton";
import ImageGrid from "./_components/ImageGrid";
import HeaderSection from "../_components/HeaderSection";
import { useRouter } from "next/navigation";
import { blogs } from "@/utils/BlogsData/BlogsData";
import BlogCard from "../_components/BlogCard";
import { handleCopy } from "@/utils/CodeCopyFunction/handleCopy";
import AnimatedWrapper from "@/components/Animation/AnimatedWrapper";
import FooterSection from "@/components/global/FooterSection";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogParam = searchParams.get("blog");

  const blogData = blogParam ? JSON.parse(blogParam) : null;
  const heroImage = blogData?.heroImage;
  const title = blogData?.title || "Blog Title";
  const images = blogData?.images || [];
  const subheadings = blogData?.subheadings || [];
  const codeSections = blogData?.codeSection || [];

  const [copied, setCopied] = useState({});

  return (
    <>
      {heroImage ? (
        <div className=" bg-gray-100">
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
      ) : null}

      <div className="py-6 px-4 lg:py-10 lg:px-16">
        <AnimatedWrapper>
          {/* Main heading section */}

          <div>
            <h3 className="font-jakarta text-xl font-semibold py-2">Heading</h3>
            <p className="font-jakarta text-sm font-normal">
              Column grid involves dividing a page into vertical columns. UI
              elements and content are then aligned to these columns.
            </p>
            <p className="font-jakarta text-sm font-normal">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of intersecting points, which can be used to align
              and organize page elements. Grid systems are used to create a
              consistent look and feel across a website, and can help to make
              the layout more visually appealing and easier to navigate.
            </p>
          </div>
        </AnimatedWrapper>

        {/* Images section */}

        {images.length > 0 && (
          <>
            <AnimatedWrapper>
              <div className="mt-8">
                <ImageGrid images={images} />
              </div>
            </AnimatedWrapper>
          </>
        )}

        {/* Code sections */}
        <AnimatedWrapper>
          <div className="mt-8">
            {codeSections.map((section, index) => (
              <>
                <div key={index} className="relative mb-8">
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={() => handleCopy(section.code, setCopied, index)}
                      className="bg-white text-black p-2 px-4 rounded-xl shadow-md hover:bg-gray-500 transition"
                      aria-label="Copy to Clipboard"
                    >
                      {copied[index] ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  <div className="bg-gray-900 text-white p-4 rounded-md shadow-md overflow-x-auto">
                    <p className="text-sm font-normal mb-2">
                      {section.description}
                    </p>
                    <pre className="language-javascript">
                      <code className="text-sm font-mono">{section.code}</code>
                    </pre>
                  </div>
                </div>
              </>
            ))}
          </div>
        </AnimatedWrapper>

        {/* Related blogs section */}
        <AnimatedWrapper>
          <div className="py-6">
            <HeaderSection
              text="Related Blogs"
              onClick={() => {
                router.push("/Blogs");
              }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(1, 4).map((blog, index) => (
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
        </AnimatedWrapper>
      </div>
      <AnimatedWrapper>
        <FooterSection />
      </AnimatedWrapper>
    </>
  );
};

export default Page;
