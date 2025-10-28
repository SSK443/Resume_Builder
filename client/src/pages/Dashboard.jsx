import React, { useEffect, useState } from "react";
import {
  PlusIcon,
  UploadCloudIcon,
  FilePenLineIcon,
  TrashIcon,
  PencilIcon,
  XIcon,
  UploadCloud,
} from "lucide-react";
import { dummyResumeData } from "../assets/assets";
import { Navigate, useNavigate } from "react-router-dom";


function Dashboard() {
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"]; // Updated hex codes for clarity
  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");

  const [resumeFile, setResumeFile] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
const navigate = useNavigate();
  // Load resumes asynchronously
  async function loadAllResumes() {
    try {
      setAllResumes(dummyResumeData); // Assuming dummyResumeData is an array
    } catch (error) {
      console.error("Error loading resumes:", error);
    }
  }
async function createResume(e) {
  e.preventDefault();
  setShowCreateResume(false);
  navigate("/app/builder/res1234"); 
}

  async function uploadResume(e) {
    e.preventDefault();
    setShowUploadResume(false);
   navigate("/app/builder/res1234"); 
  }
async function editResume(e){
      e.preventDefault();
      

}
async function deleteResume(resumeId) {
      const confirm = window.confirm("Are you sure you want to delete this resume?");
      if (!confirm) return;
  if(confirm){
    setAllResumes((prevResumes) => prevResumes.filter((resume) => resume._id !== resumeId));
  }
}
    useEffect(() => {
      loadAllResumes();
    }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
        Welcome, Joe Doe
      </p>
      <div className="flex flex-wrap gap-4 md:flex-nowrap">
        <button
          onClick={() => setShowCreateResume(true)}
          className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
          // Placeholder action
        >
          <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
          <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
            Create Resume
          </p>
        </button>
        <button
          className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => setShowUploadResume(true)}
        >
          <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
          <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
            Upload Existing
          </p>
        </button>
      </div>
      <hr className="border-slate-300 my-6 sm:w-[305px]" />
      <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
        {allResumes.length > 0 ? (
          allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
                key={index}
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border border-dashed group hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />
                <p
                  className="text-sm group-hover:scale-105 transition-all text-center px-2"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p
                  className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 text-center px-2"
                  style={{ color: baseColor + "90" }}
                >
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
                <div className="absolute top-1 right-1 group-hover:flex items-center hidden" onClick={(e)=>{e.stopPropagation()}}>
                  <TrashIcon
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    // onClick={(e) => {
                    //   e.stopPropagation();
                    //   console.log(`Delete ${resume.title}`);
                    // }}
                    onClick={() => deleteResume(resume._id)}
                  />
                  <PencilIcon
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    // onClick={(e) => {
                    //   e.stopPropagation();
                    //   console.log(`Edit ${resume.title}`);
                    // }}
                    onClick={()=>{setEditResumeId(resume._id); setResumeTitle(resume.title);}}
                  />
                </div>
              </button>
            );
          })
        ) : (
          <p className="text-center text-slate-500">No resumes available.</p>
        )}
      </div>
      {showCreateResume && (
        <form
          onSubmit={createResume}
          onClick={() => setShowCreateResume(false)}
          className="fixed inset-0 bg-black/70 backdrop:-blur bg--opacity-50 flex z-10 items-center justify-center"
        >
          <div
            className=" relative bg-slate-50 border rounded-lg p-6 shadow-lg w-full max-w-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-indigo-600 font-bold">Create a Resume</h2>
            <input
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600"
              required
              value={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
            />
            <button className="w-full hover:bg-indigo-900 transition-colors bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer">
              Create Resume
            </button>
            <XIcon
              className="absolute top-2 right-2 text-indigo-600 cursor-pointer transition-colors hover:text-indigo-900 "
              onClick={() => {
                setShowCreateResume(false);
                setResumeTitle("");
              }}
            />
          </div>
        </form>
      )}
      {showUploadResume && (
        <form
          onSubmit={uploadResume}
          onClick={() => setShowUploadResume(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex z-10 items-center justify-center"
        >
          <div
            className="relative bg-slate-50 border rounded-lg p-6 shadow-lg w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-indigo-600 font-bold text-lg mb-4 text-center">
              Upload a Resume
            </h2>

            <input
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 border border-indigo-200 rounded-md focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              required
              value={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
            />

            <div className="border-2 border-dashed border-indigo-200 rounded-lg py-8 px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer">
              <label
                htmlFor="resume-input"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                {resumeFile ? (
                  <p className="text-indigo-600 font-medium">
                    {resumeFile.name}
                  </p>
                ) : (
                  <>
                    <UploadCloud className="size-16 text-indigo-500 hover:text-indigo-600 transition-all duration-300 hover:scale-110 mb-2" />
                    <p className="text-indigo-600 font-semibold">
                      Upload Resume
                    </p>
                    <p className="text-xs text-slate-500 mt-1">(PDF or DOCX)</p>
                  </>
                )}
              </label>

              <input
                id="resume-input"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setResumeFile(e.target.files[0])}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 hover:bg-indigo-900 transition-colors bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Upload Resume
            </button>

            <XIcon
              className="absolute top-2 right-2 text-indigo-600 cursor-pointer transition-colors hover:text-indigo-900"
              onClick={() => {
                setShowUploadResume(false);
                setResumeTitle("");
                setResumeFile(null);
              }}
            />
          </div>
        </form>
      )}
      {editResumeId && (
        <form
          onSubmit={editResume}
          onClick={() => setEditResumeId('')}
          className="fixed inset-0 bg-black/70 backdrop:-blur bg--opacity-50 flex z-10 items-center justify-center"
        >
          <div
            className=" relative bg-slate-50 border rounded-lg p-6 shadow-lg w-full max-w-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-indigo-600 font-bold">Edit Resume</h2>
            <input
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600"
              required
              value={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
            />
            <button className="w-full hover:bg-indigo-900 transition-colors bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer">
              Edit Resume
            </button>
            <XIcon
              className="absolute top-2 right-2 text-indigo-600 cursor-pointer transition-colors hover:text-indigo-900 "
              onClick={() => {
                setEditResumeId("");
                setResumeTitle("");
              }}
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default Dashboard;
