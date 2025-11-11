"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function CollapsibleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full border-b border-gray-200 pb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-3"
      >
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${
            open ? "rotate-180 text-primary" : "rotate-0 text-gray-500"
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
}

export default CollapsibleSection;