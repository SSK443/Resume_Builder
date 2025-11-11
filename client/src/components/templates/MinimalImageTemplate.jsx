


import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800 leading-relaxed tracking-normal">
      <div className="grid grid-cols-3">
        {/* Profile Image */}
        <div className="col-span-1 flex items-center justify-center py-10">
          {data.personal_info?.image &&
          typeof data.personal_info.image === "string" ? (
            <img
              src={data.personal_info.image}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full shadow-sm border"
              style={{ borderColor: accentColor }}
            />
          ) : data.personal_info?.image &&
            typeof data.personal_info.image === "object" ? (
            <img
              src={URL.createObjectURL(data.personal_info.image)}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full shadow-sm border"
              style={{ borderColor: accentColor }}
            />
          ) : null}
        </div>

        {/* Name + Profession */}
        <div className="col-span-2 flex flex-col justify-center py-10 px-8">
          <h1
            className="text-4xl font-bold tracking-tight text-zinc-700"
            style={{ color: accentColor }}
          >
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest mt-1">
            {data.personal_info?.profession || "Profession"}
          </p>
        </div>

        {/* Sidebar */}
        <aside className="col-span-1 border-r border-zinc-300 p-8 pt-0">
          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-4 border-b pb-1 border-zinc-200">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm text-zinc-700">
              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.phone}</span>
                </div>
              )}
              {data.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <Mail size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.email}</span>
                </div>
              )}
              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.location}</span>
                </div>
              )}
              {data.personal_info?.linkedin && (
                <a
                  target="_blank"
                  href={data.personal_info.linkedin}
                  className="flex items-center gap-2 hover:underline"
                >
                  <Linkedin size={14} style={{ color: accentColor }} />
                  <span className="break-all">
                    {data.personal_info.linkedin}
                  </span>
                </a>
              )}
              {data.personal_info?.website && (
                <a
                  target="_blank"
                  href={data.personal_info.website}
                  className="flex items-center gap-2 hover:underline"
                >
                  <Globe size={14} style={{ color: accentColor }} />
                  <span className="break-all">
                    {data.personal_info.website}
                  </span>
                </a>
              )}
            </div>
          </section>

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section className="mb-10">
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-4 border-b pb-1 border-zinc-200">
                EDUCATION
              </h2>
              <div className="space-y-4 text-sm">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold uppercase">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </p>
                    <p className="text-zinc-700">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-xs text-zinc-500">GPA: {edu.gpa}</p>
                    )}
                    <p className="text-xs text-zinc-500">
                      {formatDate(edu.graduation_date)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-4 border-b pb-1 border-zinc-200">
                SKILLS
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm bg-zinc-100 rounded-full px-3 py-1 text-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* Main Content */}
        <main className="col-span-2 p-8 pt-0">
          {/* Summary */}
          {data.professional_summary && (
            <section className="mb-10">
              <h2
                className="text-sm font-semibold tracking-widest mb-3 border-b pb-1 border-zinc-200"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>
              <p className="text-zinc-700 leading-relaxed text-justify">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-10">
              <h2
                className="text-sm font-semibold tracking-widest mb-4 border-b pb-1 border-zinc-200"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center flex-wrap">
                      <h3 className="font-semibold text-zinc-900 text-base">
                        {exp.position}
                      </h3>
                      <span className="text-xs text-zinc-500">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    <p
                      className="text-sm mb-2 font-medium"
                      style={{ color: accentColor }}
                    >
                      {exp.company}
                    </p>
                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1">
                        {exp.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.project && data.project.length > 0 && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest mb-4 border-b pb-1 border-zinc-200"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-5">
                {data.project.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-md font-semibold text-zinc-900">
                      {project.name}
                    </h3>
                    {project.type && (
                      <p
                        className="text-sm mb-1 font-medium"
                        style={{ color: accentColor }}
                      >
                        {project.type}
                      </p>
                    )}
                    {project.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1 leading-relaxed">
                        {project.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
