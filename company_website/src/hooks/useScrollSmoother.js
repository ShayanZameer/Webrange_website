import { useEffect } from "react";
import { motion } from "framer-motion";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const smoothScroll = () => {
        document.documentElement.style.scrollBehavior = "smooth";
      };

      window.addEventListener("wheel", smoothScroll);

      return () => {
        window.removeEventListener("wheel", smoothScroll);
      };
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
