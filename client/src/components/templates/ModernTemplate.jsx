


import { Mail, Phone, MapPin, Linkedin, Globe, User } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-sm rounded-lg overflow-hidden print:shadow-none print:rounded-none">
      {/* HEADER WITH ACCENT BACKGROUND + IMAGE */}
      <header
        className="p-10 text-white relative print:p-8"
        style={{ backgroundColor: accentColor }}
      >
        <div className="flex items-center gap-6 print:gap-4">
          {/* PROFILE IMAGE ON WHITE CIRCLE */}
          <div
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0 print:w-20 print:h-20 print:border-3"
            style={{ backgroundColor: "white" }}
          >
            {data.personal_info?.image ? (
              <img
                src={data.personal_info.image}
                alt={data.personal_info.full_name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-12 h-12 text-gray-400 print:w-10 print:h-10" />
              </div>
            )}
          </div>

          <div>
            <h1 className="text-4xl font-light tracking-wide print:text-3xl">
              {data.personal_info?.full_name || "Your Name"}
            </h1>
            {data.personal_info?.profession && (
              <p className="uppercase tracking-[0.15em] text-sm opacity-90 print:text-xs">
                {data.personal_info.profession}
              </p>
            )}
          </div>
        </div>

        {/* CONTACT INFO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-6 text-sm opacity-95 print:text-xs print:gap-x-4 print:pt-4">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail className="size-4 print:size-3" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="size-4 print:size-3" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-4 print:size-3" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <a
              href={data.personal_info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="size-4 print:size-3" />
              <span className="break-all text-xs">
                {data.personal_info.linkedin.replace("https://www.", "")}
              </span>
            </a>
          )}
          {data.personal_info?.website && (
            <a
              href={data.personal_info.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Globe className="size-4 print:size-3" />
              <span className="break-all text-xs">
                {data.personal_info.website.replace("https://", "")}
              </span>
            </a>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="p-10 space-y-12 print:p-8 print:space-y-10">
        {/* PROFESSIONAL SUMMARY */}
        {data.professional_summary && (
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2 print:text-lg print:mb-3">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed print:text-sm print:leading-snug">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* EXPERIENCE */}
        {data.experience && data.experience.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-2 print:text-lg print:mb-4">
              Experience
            </h2>
            <div className="space-y-8 print:space-y-6">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 print:pl-5"
                  style={{ borderColor: accentColor }}
                >
                  <div className="flex justify-between items-start mb-2 print:mb-1">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 print:text-base">
                        {exp.position}
                      </h3>
                      <p
                        className="font-medium print:text-sm"
                        style={{ color: accentColor }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full print:text-xs print:px-2 print:py-0.5">
                      {formatDate(exp.start_date)} –{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </div>
                  </div>
                  {exp.description && (
                    <div className="text-gray-700 leading-relaxed mt-3 whitespace-pre-line print:text-sm print:leading-tight">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {data.project && data.project.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-2 print:text-lg print:mb-4">
              Projects
            </h2>
            <div className="space-y-8 print:space-y-6">
              {data.project.map((p, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 print:pl-5"
                  style={{ borderColor: accentColor }}
                >
                  <div className="flex justify-between items-start mb-1 print:mb-0">
                    <h3 className="text-lg font-medium text-gray-900 print:text-base">
                      {p.name}
                    </h3>
                    {p.type && (
                      <p className="text-sm text-gray-600 print:text-xs">
                        {p.type}
                      </p>
                    )}
                  </div>
                  {p.description && (
                    <p className="text-gray-700 leading-relaxed text-sm mt-2 print:text-xs print:leading-tight">
                      {p.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EDUCATION & SKILLS — SIDE BY SIDE */}
        <div className="grid sm:grid-cols-2 gap-10 print:gap-8">
          {/* EDUCATION */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2 print:text-lg print:mb-3">
                Education
              </h2>
              <div className="space-y-5 print:space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 print:text-base">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p
                      className="text-sm font-medium print:text-xs"
                      style={{ color: accentColor }}
                    >
                      {edu.institution}
                    </p>
                    <div className="flex justify-between text-xs text-gray-600 mt-1 print:text-xs">
                      <span>{formatDate(edu.graduation_date)}</span>
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2 print:text-lg print:mb-3">
                Skills
              </h2>
              <div className="flex flex-wrap gap-3 print:gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full text-white shadow-sm print:text-xs print:px-2 print:py-0.5"
                    style={{ backgroundColor: accentColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;