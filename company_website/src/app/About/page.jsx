"use client";

import AnimatedPage from "@/components/Animation/PageAnimated";
export default function About() {
  return (
    <AnimatedPage title="About">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p className="text-lg text-gray-700">
        Welcome to the About page. Here is some information about us. This
        section loads after the initial animation finishes.
      </p>
    </AnimatedPage>
  );
}
