

// import React, { useEffect, useState } from "react";
// import { useParams, Link, data } from "react-router-dom";
// import { dummyResumeData } from "../assets/assets";
// import {
//   ArrowLeftIcon,
//   ChevronLeft,
//   ChevronRight,
//   User as UserIcon,
//   FileText,
//   Briefcase,
//   BookOpen,
//   FolderOpen,
//   List,
// } from "lucide-react";
// import PersonalInfo from "../components/PersonalInfo";
// import ResumePreview from "../components/ResumePreview";
// import TemplateSelector from "../components/TemplateSelector";
// import ColorPick from "../components/ColorPick";
// import ProfessionalSummaryForm from "../components/ProfessionalSummaryForm ";
// import ExperienceForm from "../components/ExperienceForm";
// import EducationForm from "../components/EductionForm";

// function ResumeBuilder() {
//   const { resumeId } = useParams();

//   const [resumeData, setResumeData] = useState({
//     _id: "",
//     title: "",
//     personal_info: {},
//     professional_summary: "",
//     experience: [],
//     education: [],
//     project: [],
//     skills: [],
//     templates: "classic",
//     accent_color: "#3882F6",
//     public: false,
//   });

//   const [activeSectionIndex, setActiveSectionIndex] = useState(0);
//   const [removeBackground, setRemoveBackground] = useState(false);

//   const sections = [
//     { id: "personal", name: "Personal Information", icon: UserIcon },
//     { id: "summary", name: "Professional Summary", icon: FileText },
//     { id: "experience", name: "Experience", icon: Briefcase },
//     { id: "education", name: "Education", icon: BookOpen },
//     { id: "projects", name: "Projects", icon: FolderOpen },
//     { id: "skills", name: "Skills", icon: List },
//   ];

//   const loadExistingResume = async () => {
//     const resume = dummyResumeData.find((r) => r._id === resumeId);
//     if (resume) {
//       setResumeData(resume);
//       document.title = resume.title;
//     }
//   };

//   useEffect(() => {
//     loadExistingResume();
//   }, [resumeId]);

//   const activeSection = sections[activeSectionIndex];

//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <Link
//           to={"/app"}
//           className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
//         >
//           <ArrowLeftIcon className="w-5 h-5" />
//           Back to Dashboard
//         </Link>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 pb-6">
//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* Left Section */}
//           <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1 relative">
//               {/* Progress bar */}
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
//                 <div
//                   className="h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all duration-300"
//                   style={{
//                     width: `${
//                       ((activeSectionIndex + 1) / sections.length) * 100
//                     }%`,
//                   }}
//                 />
//               </div>

//               {/* Section navigation */}
//               <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-2">
//                 <div className=" flex justify-between items-center mb-6 border-b border-gray-300 py-1">
//                   {/* <TemplateSelector
//                     selectedTemplate={resumeData.templates}
//                     onChange={(template) =>
//                       setResumeData((prev) => ({ ...prev, template }))
//                     }
//                   /> */}
//                   <TemplateSelector
//                     selectedTemplate={resumeData.templates}
//                     onChange={(selectedId) =>
//                       setResumeData((prev) => ({
//                         ...prev,
//                         templates: selectedId, // ✅ correct key name
//                       }))
//                     }
//                   />
//                   <ColorPick
//                     selectedColor={resumeData.accent_color}
//                     onChange={(color) =>
//                       setResumeData((prev) => ({
//                         ...prev,
//                         accent_color: color,
//                       }))
//                     }
//                   />
//                   =
//                 </div>
//                 <button
//                   onClick={() =>
//                     setActiveSectionIndex((prev) => Math.max(prev - 1, 0))
//                   }
//                   className={`flex items-center gap-1 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded ${
//                     activeSectionIndex === 0 && "opacity-50 cursor-not-allowed"
//                   }`}
//                   disabled={activeSectionIndex === 0}
//                 >
//                   <ChevronLeft className="size-4" /> Previous
//                 </button>

//                 <button
//                   onClick={() =>
//                     setActiveSectionIndex((prev) =>
//                       Math.min(prev + 1, sections.length - 1)
//                     )
//                   }
//                   className={`flex items-center gap-1 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded ${
//                     activeSectionIndex === sections.length - 1 &&
//                     "opacity-50 cursor-not-allowed"
//                   }`}
//                   disabled={activeSectionIndex === sections.length - 1}
//                 >
//                   Next <ChevronRight className="size-4" />
//                 </button>
//               </div>

//               {/* Form Content */}
//               {/* <div className="space-y-6">
//                 {activeSection.id === "personal" && (
//                   <PersonalInfo
//                     data={resumeData.personal_info}
//                     onChange={(data) =>
//                       setResumeData((prev) => ({
//                         ...prev,
//                         personal_info: data,
//                       }))
//                     }
//                     removeBackground={removeBackground}
//                     setRemoveBackground={setRemoveBackground}
//                   />
//                 )}

//                 {activeSection.id === "summary" && (
//                   <ProfessionalSummaryForm
//                     data={resumeData.professional_summary}
//                     onChange={(data) =>
//                       setResumeData((prev) => ({
//                         ...prev,
//                         professional_summary: data,
//                       }))
//                     }
//                     setResumeData={setResumeData}
//                   />
//                 )}
//                 {activeSection.id === "experience" && (
//                   <ExperienceForm
//                     data={resumeData.experience}
//                     onChange={(data) =>
//                       setResumeData((prev) => ({ ...prev, experience: data }))
//                     }
//                   />
//                 )}
//                 {activeSection.id === "education" && (
//                   <EducationForm
//                     data={resumeData.education}
//                     onChange={(data) =>
//                       setResumeData((prev) => ({ ...prev, education: data }))
//                     }
//                   />
//                 )}
//               </div> */}

//               <div className="space-y-6">
//                 {activeSection.id === "personal" && (
//                   <PersonalInfo
//                     data={resumeData.personal_info}
//                     onChange={(data) =>
//                       setResumeData((prev) => ({
//                         ...prev,
//                         personal_info: data,
//                       }))
//                     }
//                     removeBackground={removeBackground}
//                     setRemoveBackground={setRemoveBackground}
//                   />
//                 )}

//                 {/* ✅ Combined Section: Professional Summary + Experience */}
//                 {activeSection.id === "summary_experience" && (
//                   <>
//                     <ProfessionalSummaryForm
//                       data={resumeData.professional_summary}
//                       onChange={(data) =>
//                         setResumeData((prev) => ({
//                           ...prev,
//                           professional_summary: data,
//                         }))
//                       }
//                       setResumeData={setResumeData}
//                     />

//                     <ExperienceForm
//                       data={resumeData.experience}
//                       onChange={(data) =>
//                         setResumeData((prev) => ({
//                           ...prev,
//                           experience: data,
//                         }))
//                       }
//                     />
//                   </>
//                 )}

//                 {activeSection.id === "education" && (
//                   <EducationForm
//                     data={resumeData.education}
//                     onChange={(data) =>
//                       setResumeData((prev) => ({
//                         ...prev,
//                         education: data,
//                       }))
//                     }
//                   />
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right side preview (optional) */}

//           <div className="lg:col-span-7 max-lg:mt-6">
//             <div>{/* button section */}</div>

//             {/* resume preview */}
//             <ResumePreview
//               data={resumeData}
//               template={resumeData.templates}
//               accentColor={resumeData.accent_color}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumeBuilder;



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
  Share2Icon,
  TrashIcon,
  EyeIcon,
  EyeOffIcon,
  DownloadIcon,
} from "lucide-react";
import PersonalInfo from "../components/PersonalInfo";
import ResumePreview from "../components/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";
import ColorPick from "../components/ColorPick";
import ProfessionalSummaryForm from "../components/ProfessionalSummaryForm ";
import ExperienceForm from "../components/ExperienceForm";
import EducationForm from "../components/EductionForm";
import ProjectForm from "../components/ProjectForm";
import SkillsForm from "../components/SkillsForm";

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
    { id: "summary_experience", name: "Professional Details", icon: Briefcase },
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
                    width: `${((activeSectionIndex + 1) / sections.length) * 100
                      }%`,
                  }}
                />
              </div>

              {/* Section navigation */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-2">
                <div className="flex items-center gap-4">
                  <TemplateSelector
                    selectedTemplate={resumeData.templates}
                    onChange={(selectedId) =>
                      setResumeData((prev) => ({
                        ...prev,
                        templates: selectedId,
                      }))
                    }
                  />
                  <ColorPick
                    selectedColor={resumeData.accent_color}
                    onChange={(color) =>
                      setResumeData((prev) => ({
                        ...prev,
                        accent_color: color,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveSectionIndex((prev) => Math.max(prev - 1, 0))
                    }
                    className={`flex items-center gap-1 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded ${activeSectionIndex === 0 &&
                      "opacity-50 cursor-not-allowed"
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
                    className={`flex items-center gap-1 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded ${activeSectionIndex === sections.length - 1 &&
                      "opacity-50 cursor-not-allowed"
                      }`}
                    disabled={activeSectionIndex === sections.length - 1}
                  >
                    Next <ChevronRight className="size-4" />
                  </button>
                </div>
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

                {/* ✅ Combined Section */}
                {activeSection.id === "summary_experience" && (
                  <>
                    <ProfessionalSummaryForm
                      data={resumeData.professional_summary}
                      onChange={(data) =>
                        setResumeData((prev) => ({
                          ...prev,
                          professional_summary: data,
                        }))
                      }
                      setResumeData={setResumeData}
                    />

                    <hr className="my-6 border-gray-200" />

                    <ExperienceForm
                      data={resumeData.experience}
                      onChange={(data) =>
                        setResumeData((prev) => ({
                          ...prev,
                          experience: data,
                        }))
                      }
                    />
                  </>
                )}

                {activeSection.id === "education" && (
                  <EducationForm
                    data={resumeData.education}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        education: data,
                      }))
                    }
                  />
                )}
                {activeSection.id === "projects" && (
                  <ProjectForm
                    data={resumeData.project}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, project: data }))
                    }
                  />
                )}
                {activeSection.id === "skills" && (
                  <SkillsForm
                    data={resumeData.skills}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, skills: data }))
                    }
                  />
                )}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md  mt-6">Save Changes</button>
            </div>
          </div>

          {/* Right side preview */}
          <div className="lg:col-span-7 max-lg:mt-6">
            <div className="relative w-full">
              <div className="absolute bottom-3  left-0 right-0 flex items-center justify-end gap-2">
                {
                  resumeData.public && (
                    <button onClick={() => { }} className=" flex items-center gap-2 p-2 px-4 text-sm  bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-300">
                      <Share2Icon className="size-4" />
                      Public
                    </button>
                  )
                }
                <button className=" flex items-center gap-2 p-2 px-4 text-sm  bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-300">
                  {
                    resumeData.public ? <EyeIcon className="size-4" /> : <EyeOffIcon className="size-4" />
                  }
                  {resumeData.public ? "Public" : "Private"}
                </button>

                <button className=" flex items-center gap-2 p-2 px-4 text-sm  bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-300">
                  <DownloadIcon className="size-4" />
                  Download
                </button>
              </div>

            </div>
            <ResumePreview
              data={resumeData}
              template={resumeData.templates}
              accentColor={resumeData.accent_color}
              classes="rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;


// The problem is: nothing needed here, this space remains empty unless you want extra functionality.
