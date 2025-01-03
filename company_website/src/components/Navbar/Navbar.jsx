import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import IMAGES from "@/constants/images";

// Reusable NavLink Component
const NavLink = ({ href, children }) => {
  return (
    <li>
      <Link
        href={href}
        className="relative inline-block px-4 py-2 text-center rounded-full whitespace-nowrap hover:bg-navhover hover:text-white font-jakarta transition duration-200"
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center bg-navcolor text-white px-16 py-4 rounded-full">
      {/* Logo Section */}
      <div className="flex-none flex items-center -ml-10">
        <Image
          src={IMAGES.icons.logo}
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="flex-grow flex justify-center ml-2">
        <ul className="flex items-center justify-between space-x-6 text-sm lg:text-base">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/Casestudies">Case Studies</NavLink>
          <NavLink href="/industries">Industries</NavLink>
          <NavLink href="/insights">Insights</NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </div>

      <div className="flex-none flex justify-end ml-3">
        <button className="w-32 flex items-center gap-2 bg-white text-gray-800 px-5 py-3 text-sm font-semibold rounded-full hover:bg-gray-200 transition duration-200">
          <span>Let’s talk</span>
          <FaArrowRight size={16} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
