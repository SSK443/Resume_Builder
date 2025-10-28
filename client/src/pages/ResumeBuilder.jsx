
// import React, { useEffect ,useState} from 'react'
// import { useParams,Link } from 'react-router-dom';
// import { dummyResumeData } from '../assets/assets';
// import {
//   ArrowLeftIcon,
//   icons,
//   Briefcase,
//   BookOpen,
//   FolderOpen,
//   List,
//   User,
//   FileText,
//   ChevronLeft,
//   ChevronRight
// } from "lucide-react";
// import PersonalInfo from '../components/PersonalInfo';

// function ResumeBuilder() {
//   const { resumeId } = useParams();

//   const [resumeData, setResumeData] = useState({
//     _id: '',
//     title: '',
//     personal_info: {},
//     professional_summary: '',
//     experience: [],
//     education: [],
//     project: [],
//     skills: [],
//     templates: "classic",
//     accent_color: "#3882F6",
//     public: false,
//   });
//   const loadExistingResume = async (resumeId) => {
//     //fetch resume data from backend using resumeId
//     // setResumeData(fetchedData);
//     const resume = dummyResumeData.find((resume) => resume._id === resumeId);
//     if (resume) {
//       setResumeData(resume);
//       document.title = resume.title;
//     }
//   };
// const[activeSectionIndex,setActiveSectionIndex]=useState(0);

// const[removeBackground,setRemoveBackground]=useState(false);


//   const sections = [
//     {id: 'personal', name: 'Personal Information', icon: icons.User},
//     {id: 'summary', name: 'Professional Summary', icon: icons.FileText},
//     {id: 'experience', name: 'Experience', icon: icons.Briefcase},
//     {id: 'education', name: 'Education', icon: icons.BookOpen},
//     {id: 'projects', name: 'Projects', icon: icons.FolderOpen},
//     {id: 'skills', name: 'Skills', icon: icons.List},
//   ]

//   const activeSection = sections[activeSectionIndex];
//   useEffect(()=>{
//    loadExistingResume()
//   }, []);
//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <Link
//           to={"/app"}
//           className="inline-flex gap-2 items-center text-slate-500 hover:700 transition-all"
//         >
//           <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
//           Back to Dashboard
//         </Link>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 pb-6">
//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* {left side content} */}
//           <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
//               {/* {//progress bar active section} */}
//               <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200" />

//               <hr
//                 className="absolute top-0 left-0 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 border-none transition-all duration-200"
//                 style={{
//                   width: `${activeSectionIndex * (100 / sections.length - 1)}%`,
//                 }}
//               />

//               {/* {section navigation} */}
//               <div className="flex- justify-between items-center mb-6 border-b border-gray-300 py-1">
//                 <div></div>
//                 <div className="flex items-center">
//                   {activeSectionIndex !== 0 && (
//                     <button
//                       onClick={() =>
//                         setActiveSectionIndex((prevIndex) =>
//                           Math.max(prevIndex - 1, 0)
//                         )
//                       }
//                       className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all "
//                       disabled={activeSectionIndex === 0}
//                     >
//                       <ChevronLeft className="size-4" />
//                       Previous
//                     </button>
//                   )}
//                   <button
//                     onClick={() =>
//                       setActiveSectionIndex((prevIndex) =>
//                         Math.min(prevIndex + 1, sections.length - 1)
//                       )
//                     }
//                     className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex === sections.length - 1 && 'opacity-50 '}`}
//                     disabled={activeSectionIndex === sections.length - 1}
//                   >
//                     <ChevronRight className="size-4" />
//                     Next
//                   </button>
//                 {/* not done */}




//                 </div>
//               </div>
//               {/* form content */}
//               <div className='spac-y-6'>
//                 {activeSection.id==='personal' && (
//                 <PersonalInfo data={resumeData.personal_info} onchange={(data)=>setResumeData(prev=>({...prev,personal_info:data}))} removeBackground={removeBackground} setRemoveBackground={setRemoveBackground}/>
//                 )}
//               </div>
//             </div>
//           </div>
//           {/* {right side content} */}
//           <div></div>
//         </div>
//       </div>
//     </div> 
//   );
// }

// export default ResumeBuilder

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import {
  ArrowLeftIcon,
  ChevronLeft,
  ChevronRight,
  User as UserIcon,
  FileText,
  Briefcase,
  BookOpen,
  FolderOpen,
  List,
} from "lucide-react";
import PersonalInfo from "../components/PersonalInfo";

function ResumeBuilder() {
  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    templates: "classic",
    accent_color: "#3882F6",
    public: false,
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    { id: "personal", name: "Personal Information", icon: UserIcon },
    { id: "summary", name: "Professional Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: BookOpen },
    { id: "projects", name: "Projects", icon: FolderOpen },
    { id: "skills", name: "Skills", icon: List },
  ];

  const loadExistingResume = async () => {
    const resume = dummyResumeData.find((r) => r._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title;
    }
  };

  useEffect(() => {
    loadExistingResume();
  }, [resumeId]);

  const activeSection = sections[activeSectionIndex];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to={"/app"}
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-6">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Section */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1 relative">
              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
                <div
                  className="h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all duration-300"
                  style={{
                    width: `${
                      ((activeSectionIndex + 1) / sections.length) * 100
                    }%`,
                  }}
                />
              </div>

              {/* Section navigation */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-2">
                <button
                  onClick={() =>
                    setActiveSectionIndex((prev) => Math.max(prev - 1, 0))
                  }
                  className={`flex items-center gap-1 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded ${
                    activeSectionIndex === 0 && "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={activeSectionIndex === 0}
                >
                  <ChevronLeft className="size-4" /> Previous
                </button>

                <button
                  onClick={() =>
                    setActiveSectionIndex((prev) =>
                      Math.min(prev + 1, sections.length - 1)
                    )
                  }
                  className={`flex items-center gap-1 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded ${
                    activeSectionIndex === sections.length - 1 &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={activeSectionIndex === sections.length - 1}
                >
                  Next <ChevronRight className="size-4" />
                </button>
              </div>

              {/* Form Content */}
              <div className="space-y-6">
                {activeSection.id === "personal" && (
                  <PersonalInfo
                    data={resumeData.personal_info}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        personal_info: data,
                      }))
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right side preview (optional) */}
          <div className="lg:col-span-7 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="font-semibold text-gray-800 text-lg mb-4">
              Resume Preview
            </h2>
            {resumeData.personal_info?.image && (
              <img
                src={
                  typeof resumeData.personal_info.image === "string"
                    ? resumeData.personal_info.image
                    : URL.createObjectURL(resumeData.personal_info.image)
                }
                alt="preview"
                className="w-32 h-32 rounded-full object-cover border border-gray-300"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
