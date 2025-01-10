"use client";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function CloseButton() {
  const router = useRouter();
  const handleNavigate = () => {
    router.back();
  };

  return (
    <button
      className="bg-navcolor text-white rounded-full p-2 flex items-center justify-center hover:bg-gray-800 transition duration-200"
      aria-label="Close"
      onClick={handleNavigate}
    >
      <FaTimes size={16} />
    </button>
  );
}
