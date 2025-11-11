


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import ResumePreview from "../components/ResumePreview";
import { ArrowLeft } from "lucide-react";
import api from "../configs/api";

function Preview() {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadResume = async () => {
    try {
      const response = await api.get(`/api/resumes/public/${resumeId}`);
      const fetchedData = response.data.resume;

      // DEBUG: Log to check
      console.log("Fetched Resume:", fetchedData);

      // VALIDATE & FIX DATA
      const validatedData = {
        ...fetchedData,
        // ENSURE CORRECT FIELD NAMES
        template: fetchedData.template || "classic",
        accent_color:
          fetchedData.accent_color || fetchedData.accent_Color || "#3B82F6",
        personal_info: fetchedData.personal_info || {},
        professional_summary: fetchedData.professional_summary || "",
        experience: Array.isArray(fetchedData.experience)
          ? fetchedData.experience
          : [],
        project: Array.isArray(fetchedData.project) ? fetchedData.project : [],
        education: Array.isArray(fetchedData.education)
          ? fetchedData.education
          : [],
        skills: Array.isArray(fetchedData.skills) ? fetchedData.skills : [],
      };

      setResumeData(validatedData);
    } catch (error) {
      console.error("Failed to load resume:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (resumeId) {
      loadResume();
    } else {
      setIsLoading(false);
    }
  }, [resumeId]);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      {resumeData ? (
        <div className="max-w-4xl mx-auto shadow-lg rounded-2xl bg-white p-6 sm:p-10">
          {/* DEBUG INFO (Remove in production) */}
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-xs font-mono">
            <strong>Template:</strong> {resumeData.template} |
            <strong> Color:</strong>{" "}
            <span style={{ color: resumeData.accent_color }}>
              {resumeData.accent_color}
            </span>
          </div>

          <ResumePreview
            data={resumeData}
            template={resumeData.template} // Correct
            accentColor={resumeData.accent_color} // Correct
            classes="bg-white"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            Resume Not Found
          </p>
          <p className="text-gray-500 mb-6 max-w-md">
            The resume you’re looking for doesn’t exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-all"
          >
            <ArrowLeft className="size-4" />
            Go Back Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Preview;