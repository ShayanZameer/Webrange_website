"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export const Check = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Set mobile breakpoint at 1024px
    };

    checkIsMobile(); // Check initially
    window.addEventListener("resize", checkIsMobile); // Listen for resize events

    return () => {
      window.removeEventListener("resize", checkIsMobile); // Cleanup
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <Navbar />
      ) : (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
          <Navbar />
        </div>
      )}
    </div>
  );
};
