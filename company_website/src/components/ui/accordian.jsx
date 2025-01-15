import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-xl font-medium hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <Minus className="h-5 w-5 text-gray-500" />
        ) : (
          <Plus className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="pb-4 pt-2 text-gray-500">{children}</div>}
    </div>
  );
};

export const Accordion = ({ children }) => {
  return <div className="divide-y divide-gray-200">{children}</div>;
};
