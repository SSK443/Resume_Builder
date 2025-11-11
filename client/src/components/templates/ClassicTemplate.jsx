




import { Mail, Phone, MapPin, Linkedin, Globe, User } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white text-gray-800 leading-relaxed tracking-normal print:shadow-none print:border-none">
      {/* PROFILE IMAGE + NAME */}
      <div className="flex gap-6 items-center mb-8 print:gap-4 print:mb-6">
        <div
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg flex-shrink-0 overflow-hidden print:w-24 print:h-24 print:border-3"
          style={{ backgroundColor: accentColor }}
        >
          {data.personal_info?.image ? (
            <img
              src={data.personal_info.image}
              alt={data.personal_info.full_name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-16 h-16 text-white print:w-14 print:h-14" />
            </div>
          )}
        </div>

        <div>
          <h1
            className="text-4xl font-bold mb-1 print:text-3xl print:mb-0"
            style={{ color: accentColor }}
          >
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          {data.personal_info?.profession && (
            <p className="uppercase tracking-wide text-sm text-gray-700 print:text-xs">
              {data.personal_info.profession}
            </p>
          )}
        </div>
      </div>

      {/* CONTACT INFO */}
      <div
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8 pb-6 border-b-2 print:text-xs print:gap-x-4 print:pb-4 print:border-b print:mb-6"
        style={{ borderColor: accentColor }}
      >
        {data.personal_info?.email && (
          <div className="flex items-center gap-1">
            <Mail className="size-4 print:size-3" />
            <span>{data.personal_info.email}</span>
          </div>
        )}
        {data.personal_info?.phone && (
          <div className="flex items-center gap-1">
            <Phone className="size-4 print:size-3" />
            <span>{data.personal_info.phone}</span>
          </div>
        )}
        {data.personal_info?.location && (
          <div className="flex items-center gap-1">
            <MapPin className="size-4 print:size-3" />
            <span>{data.personal_info.location}</span>
          </div>
        )}
        {data.personal_info?.linkedin && (
          <div className="flex items-center gap-1">
            <Linkedin className="size-4 print:size-3" />
            <span className="break-all">{data.personal_info.linkedin}</span>
          </div>
        )}
        {data.personal_info?.website && (
          <div className="flex items-center gap-1">
            <Globe className="size-4 print:size-3" />
            <span className="break-all">{data.personal_info.website}</span>
          </div>
        )}
      </div>

      {/* PROFESSIONAL SUMMARY */}
      {data.professional_summary && (
        <section className="mb-10 print:mb-8">
          <h2
            className="text-xl font-semibold mb-3 border-b pb-1 print:text-lg print:mb-2"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify print:text-sm print:leading-snug">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* PROFESSIONAL EXPERIENCE */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-10 print:mb-8">
          <h2
            className="text-xl font-semibold mb-5 border-b pb-1 print:text-lg print:mb-3"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-6 print:space-y-5">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 pl-5 print:pl-4"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between flex-wrap items-start mb-2 print:mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg print:text-base">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 font-medium text-sm print:text-xs">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-600 print:text-xs">
                    <p>
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </p>
                  </div>
                </div>
                {exp.description && (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm print:text-xs print:leading-tight">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {data.project && data.project.length > 0 && (
        <section className="mb-10 print:mb-8">
          <h2
            className="text-xl font-semibold mb-5 border-b pb-1 print:text-lg print:mb-3"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            PROJECTS
          </h2>
          <div className="space-y-6 print:space-y-5">
            {data.project.map((proj, index) => (
              <div
                key={index}
                className="border-l-4 pl-5 print:pl-4"
                style={{ borderColor: accentColor }}
              >
                <h3 className="font-semibold text-gray-900 text-lg print:text-base mb-1">
                  {proj.name}
                </h3>
                {proj.type && (
                  <p className="text-sm font-medium text-gray-700 print:text-xs mb-1">
                    {proj.type}
                  </p>
                )}
                {proj.description && (
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line print:text-xs print:leading-tight">
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {data.education && data.education.length > 0 && (
        <section className="mb-10 print:mb-8">
          <h2
            className="text-xl font-semibold mb-5 border-b pb-1 print:text-lg print:mb-3"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            EDUCATION
          </h2>
          <div className="space-y-5 print:space-y-4">
            {data.education.map((edu, index) => (
              <div
                key={index}
                className="flex justify-between flex-wrap print:flex-col print:items-start"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 print:text-base">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-700 print:text-sm">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600 print:text-xs">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <div className="text-sm text-gray-600 print:text-xs print:mt-1">
                  <p>{formatDate(edu.graduation_date)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {data.skills && data.skills.length > 0 && (
        <section>
          <h2
            className="text-xl font-semibold mb-5 border-b pb-1 print:text-lg print:mb-3"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            CORE SKILLS
          </h2>
          <div className="flex flex-wrap gap-3 print:gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-gray-800 text-sm print:text-xs print:px-2 print:py-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;