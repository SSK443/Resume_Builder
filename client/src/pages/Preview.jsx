import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import Loader from "../components/Loader";
import ResumePreview from "../components/ResumePreview";
import { ArrowLeftIcon } from "lucide-react";

function Preview() {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadResume = async () => {
    const foundResume = dummyResumeData.find(
      (resume) => resume._id === resumeId
    );
    setResumeData(foundResume || null);
    setIsLoading(false);
  };

  useEffect(() => {
    loadResume();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      {resumeData ? (
        <div className="max-w-4xl mx-auto shadow-lg rounded-2xl bg-white p-6 sm:p-10">
          <ResumePreview
            data={resumeData}
            template={resumeData.template}
            accentColor={resumeData.accent_Color}
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
            <ArrowLeftIcon className="size-4" />
            Go Back Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Preview;
