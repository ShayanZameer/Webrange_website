"use client";

import { useState, useEffect } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IMAGES from "@/constants/images";

const NavLink = ({ href, children, onClick }) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="relative inline-block px-4 py-2 text-center rounded-full whitespace-nowrap hover:bg-navhover hover:text-white font-jakarta transition duration-200"
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleNavigate = () => {
    router.push("/contactus");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <div className="fixed top-0 left-0 z-50 w-full">
          <button
            onClick={toggleMenu}
            className="fixed top-4 left-4 z-50 text-white bg-navcolor p-2 rounded-full"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div
            className={`fixed inset-0 bg-navcolor transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-40`}
          >
            <nav className="flex flex-col items-center justify-center h-full">
              <ul className="space-y-6 text-white text-lg">
                <NavLink href="/" onClick={closeMenu}>
                  Home
                </NavLink>
                <NavLink href="/Services" onClick={closeMenu}>
                  Services
                </NavLink>
                <NavLink href="/Casestudies" onClick={closeMenu}>
                  Case Studies
                </NavLink>
                <NavLink href="/Blogs" onClick={closeMenu}>
                  Blogs
                </NavLink>
                <NavLink href="/About" onClick={closeMenu}>
                  About
                </NavLink>
              </ul>
              <button
                onClick={() => {
                  closeMenu();
                  handleNavigate();
                }}
                className="mt-8 w-32 flex items-center justify-center gap-2 bg-white text-gray-800 px-5 py-3 text-sm font-semibold rounded-full hover:bg-gray-200 transition duration-200"
              >
                <span>Let's talk</span>
                <FaArrowRight size={16} />
              </button>
            </nav>
          </div>
        </div>
      ) : (
        <nav className="flex items-center bg-navcolor text-white px-16 py-4 rounded-full">
          <div className="flex-none flex items-center -ml-10">
            <Image
              src={IMAGES.icons.logo || "/placeholder.svg"}
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex-grow flex justify-center ml-2">
            <ul className="flex items-center justify-between space-x-6 text-sm lg:text-base">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/Services">Services</NavLink>
              <NavLink href="/Casestudies">Case Studies</NavLink>
              <NavLink href="/Blogs">Blogs</NavLink>
              <NavLink href="/About">About</NavLink>
            </ul>
          </div>

          <div className="flex-none flex justify-end ml-3">
            <button
              onClick={handleNavigate}
              className="w-32 flex items-center gap-2 bg-white text-gray-800 px-5 py-3 text-sm font-semibold rounded-full hover:bg-gray-200 transition duration-200"
            >
              <span>Let's talk</span>
              <FaArrowRight size={16} />
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
