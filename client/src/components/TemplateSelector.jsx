



import { Check, Layout } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

function TemplateSelector({ selectedTemplate, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "A clean, traditional resume layout with clear section divisions and professional typography — perfect for corporate or formal roles.",
    },
    {
      id: "modern",
      name: "Modern",
      preview:
        "A stylish, contemporary design with bold headings, color highlights, and structured sections — ideal for creative and tech roles.",
    },
    {
      id: "minimal",
      name: "Minimal",
      preview:
        "A simple, elegant resume with minimal borders and plenty of whitespace — focuses on content and readability.",
    },
    {
      id: "minimal-image",
      name: "Minimal with Image",
      preview:
        "A clean, image-friendly layout that includes a profile photo area — best for personal branding and creative portfolios.",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 text-sm font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-all px-3 py-2 rounded-lg shadow-sm"
      >
        <Layout size={16} />
        <span className="hidden sm:inline">Choose Template</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-[22rem] max-h-[24rem] overflow-y-auto mt-2 z-20 
          bg-white border border-gray-200 rounded-lg shadow-xl p-3 space-y-3"
        >
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsOpen(false);
              }}
              className={`relative p-3 rounded-lg border cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? "border-indigo-400 bg-indigo-50 shadow-sm"
                  : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
              }`}
            >
              {/* Active checkmark */}
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2">
                  <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <h4 className="font-semibold text-gray-800">{template.name}</h4>
                <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded-md italic leading-snug">
                  {template.preview}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TemplateSelector;
