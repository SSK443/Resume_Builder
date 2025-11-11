const MinimalTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-10 py-12 bg-white text-gray-900 font-light leading-relaxed print:shadow-none print:border-none">
      {/* HEADER — TEXT ONLY */}
      <header className="mb-12 border-b border-gray-200 pb-6 print:border-b-0 print:pb-0">
        <div>
          <h1 className="text-4xl font-light mb-2 tracking-wide print:text-3xl print:mb-1">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          {data.personal_info?.profession && (
            <p className="uppercase text-gray-600 font-medium text-sm tracking-[0.15em] print:text-xs">
              {data.personal_info.profession}
            </p>
          )}
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600 mt-4 print:text-xs print:gap-x-6 print:mt-3">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
          {data.personal_info?.linkedin && (
            <span className="break-all">{data.personal_info.linkedin}</span>
          )}
          {data.personal_info?.website && (
            <span className="break-all">{data.personal_info.website}</span>
          )}
        </div>
      </header>

      {/* PROFESSIONAL SUMMARY */}
      {data.professional_summary && (
        <section className="mb-12 print:mb-8">
          <p className="text-gray-700 text-justify leading-relaxed print:text-sm print:leading-snug">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* EXPERIENCE */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-12 print:mb-8">
          <h2
            className="text-base uppercase tracking-[0.15em] mb-6 font-medium border-l-4 pl-3 print:text-sm print:mb-4"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            Experience
          </h2>
          <div className="space-y-8 print:space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1 print:mb-0">
                  <h3 className="text-lg font-semibold print:text-base">
                    {exp.position}
                  </h3>
                  <span className="text-sm text-gray-500 print:text-xs">
                    {formatDate(exp.start_date)} –{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-gray-600 italic mb-2 print:text-xs print:mb-1">
                  {exp.company}
                </p>
                {exp.description && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line print:text-sm print:leading-snug">
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
        <section className="mb-12 print:mb-8">
          <h2
            className="text-base uppercase tracking-[0.15em] mb-6 font-medium border-l-4 pl-3 print:text-sm print:mb-4"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            Projects
          </h2>
          <div className="space-y-6 print:space-y-5">
            {data.project.map((proj, index) => (
              <div key={index} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between print:flex-col">
                  <h3 className="text-lg font-semibold print:text-base">
                    {proj.name}
                  </h3>
                  {proj.type && (
                    <p
                      className="text-sm font-medium mt-1 sm:mt-0 print:text-xs"
                      style={{ color: accentColor }}
                    >
                      {proj.type}
                    </p>
                  )}
                </div>
                <p className="text-gray-700 print:text-sm print:leading-snug">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {data.education && data.education.length > 0 && (
        <section className="mb-12 print:mb-8">
          <h2
            className="text-base uppercase tracking-[0.15em] mb-6 font-medium border-l-4 pl-3 print:text-sm print:mb-4"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            Education
          </h2>
          <div className="space-y-6 print:space-y-5">
            {data.education.map((edu, index) => (
              <div
                key={index}
                className="flex justify-between items-baseline print:flex-col print:items-start"
              >
                <div>
                  <h3 className="font-semibold print:text-base">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-600 print:text-sm">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-500 print:text-xs">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <span className="text-sm text-gray-500 print:text-xs print:mt-1">
                  {formatDate(edu.graduation_date)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {data.skills && data.skills.length > 0 && (
        <section>
          <h2
            className="text-base uppercase tracking-[0.15em] mb-6 font-medium border-l-4 pl-3 print:text-sm print:mb-4"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-3 text-gray-800 print:gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full border border-gray-300 print:text-xs print:px-2 print:py-0.5"
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

export default MinimalTemplate;
