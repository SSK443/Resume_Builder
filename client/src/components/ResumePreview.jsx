


import React from "react";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";

function ResumePreview({ data, template, accentColor, classes = "" }) {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };

  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={`border border-gray-200 print:shadow-none print:border-none ${classes}`}
      >
        {renderTemplate()}
      </div>

      {/* PRINT & PDF SUPPORT: Accent Colors + Full Background */}
      <style>{`
        @page {
          size: letter;
          margin: 0;
        }

        @media print {
          html, body {
            width: 8.5in !important;
            height: 11in !important;
            overflow: hidden !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }

          body > * {
            visibility: hidden !important;
          }

          #resume-preview,
          #resume-preview * {
            visibility: visible !important;
          }

          #resume-preview {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
          }

          /* PRESERVE ACCENT COLORS & BACKGROUNDS */
          [style*="background-color"],
          [style*="border-color"],
          [style*="color"] {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* ENSURE ROUNDED IMAGES */
          .rounded-full {
            border-radius: 9999px !important;
          }

          /* FIX IMAGE SCALING */
          img {
            max-width: 100% !important;
            height: auto !important;
            object-fit: cover !important;
          }

          /* REMOVE GRAY BACKGROUND IN PRINT */
          .bg-gray-100 {
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ResumePreview;