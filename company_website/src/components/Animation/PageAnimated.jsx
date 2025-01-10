"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedPage({ title, children }) {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Initial Black Page with Title */}
      {!showMainContent && (
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-black flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          onAnimationComplete={() => setShowMainContent(true)}
        >
          <h1 className="text-white text-4xl font-bold">{title}</h1>
        </motion.div>
      )}

      {/* Main Content */}
      {showMainContent && (
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-white p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
