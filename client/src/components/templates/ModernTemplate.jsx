// import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

// const ModernTemplate = ({ data, accentColor }) => {
// 	const formatDate = (dateStr) => {
// 		if (!dateStr) return "";
// 		const [year, month] = dateStr.split("-");
// 		return new Date(year, month - 1).toLocaleDateString("en-US", {
// 			year: "numeric",
// 			month: "short"
// 		});
// 	};

// 	return (
// 		<div className="max-w-4xl mx-auto bg-white text-gray-800">
// 			{/* Header */}
// 			<header className="p-8 text-white" style={{ backgroundColor: accentColor }}>
// 				<h1 className="text-4xl font-light mb-1">
// 					{data.personal_info?.full_name || "Your Name"}
// 				</h1>
// 				{data.personal_info?.profession && (
// 					<p className="uppercase tracking-widest text-sm opacity-90 mb-2">
// 						{data.personal_info.profession}
// 					</p>
// 				)}

// 				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm ">
// 					{data.personal_info?.email && (
// 						<div className="flex items-center gap-2">
// 							<Mail className="size-4" />
// 							<span>{data.personal_info.email}</span>
// 						</div>
// 					)}
// 					{data.personal_info?.phone && (
// 						<div className="flex items-center gap-2">
// 							<Phone className="size-4" />
// 							<span>{data.personal_info.phone}</span>
// 						</div>
// 					)}
// 					{data.personal_info?.location && (
// 						<div className="flex items-center gap-2">
// 							<MapPin className="size-4" />
// 							<span>{data.personal_info.location}</span>
// 						</div>
// 					)}
// 					{data.personal_info?.linkedin && (
// 						<a target="_blank" href={data.personal_info?.linkedin} className="flex items-center gap-2">
// 							<Linkedin className="size-4" />
// 							<span className="break-all text-xs">{data.personal_info.linkedin.split("https://www.")[1] ? data.personal_info.linkedin.split("https://www.")[1] : data.personal_info.linkedin}</span>
// 						</a>
// 					)}
// 					{data.personal_info?.website && (
// 						<a target="_blank" href={data.personal_info?.website} className="flex items-center gap-2">
// 							<Globe className="size-4" />
// 							<span className="break-all text-xs">{data.personal_info.website.split("https://")[1] ? data.personal_info.website.split("https://")[1] : data.personal_info.website}</span>
// 						</a>
// 					)}
// 				</div>
// 			</header>

// 			<div className="p-8">
// 				{/* Professional Summary */}
// 				{data.professional_summary && (
// 					<section className="mb-8">
// 						<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
// 							Professional Summary
// 						</h2>
// 						<p className="text-gray-700 ">{data.professional_summary}</p>
// 					</section>
// 				)}

// 				{/* Experience */}
// 				{data.experience && data.experience.length > 0 && (
// 					<section className="mb-8">
// 						<h2 className="text-2xl font-light mb-6 pb-2 border-b border-gray-200">
// 							Experience
// 						</h2>

// 						<div className="space-y-6">
// 							{data.experience.map((exp, index) => (
// 								<div key={index} className="relative pl-6 border-l border-gray-200">

// 									<div className="flex justify-between items-start mb-2">
// 										<div>
// 											<h3 className="text-xl font-medium text-gray-900">{exp.position}</h3>
// 											<p className="font-medium" style={{ color: accentColor }}>{exp.company}</p>
// 										</div>
// 										<div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
// 											{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
// 										</div>
// 									</div>
// 									{exp.description && (
// 										<div className="text-gray-700 leading-relaxed mt-3 whitespace-pre-line">
// 											{exp.description}
// 										</div>
// 									)}
// 								</div>
// 							))}
// 						</div>
// 					</section>
// 				)}

// 				{/* Projects */}
// 				{data.project && data.project.length > 0 && (
// 					<section className="mb-8">
// 						<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
// 							Projects
// 						</h2>

// 						<div className="space-y-6">
// 							{data.project.map((p, index) => (
// 								<div key={index} className="relative pl-6 border-l border-gray-200" style={{ borderLeftColor: accentColor }}>


// 									<div className="flex justify-between items-start">
// 										<div>
// 											<h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
// 										</div>
// 										<p className="text-gray-600">{p.type}</p>
// 									</div>
// 									{p.description && (
// 										<div className="text-gray-700 leading-relaxed text-sm mt-3">
// 											{p.description}
// 										</div>
// 									)}
// 								</div>
// 							))}
// 						</div>
// 					</section>
// 				)}

// 				<div className="grid sm:grid-cols-2 gap-8">
// 					{/* Education */}
// 					{data.education && data.education.length > 0 && (
// 						<section>
// 							<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
// 								Education
// 							</h2>

// 							<div className="space-y-4">
// 								{data.education.map((edu, index) => (
// 									<div key={index}>
// 										<h3 className="font-semibold text-gray-900">
// 											{edu.degree} {edu.field && `in ${edu.field}`}
// 										</h3>
// 										<p style={{ color: accentColor }}>{edu.institution}</p>
// 										<div className="flex justify-between items-center text-sm text-gray-600">
// 											<span>{formatDate(edu.graduation_date)}</span>
// 											{edu.gpa && <span>GPA: {edu.gpa}</span>}
// 										</div>
// 									</div>
// 								))}
// 							</div>
// 						</section>
// 					)}

// 					{/* Skills */}
// 					{data.skills && data.skills.length > 0 && (
// 						<section>
// 							<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
// 								Skills
// 							</h2>

// 							<div className="flex flex-wrap gap-2">
// 								{data.skills.map((skill, index) => (
// 									<span
// 										key={index}
// 										className="px-3 py-1 text-sm text-white rounded-full"
// 										style={{ backgroundColor: accentColor }}
// 									>
// 										{skill}
// 									</span>
// 								))}
// 							</div>
// 						</section>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default ModernTemplate;






import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

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
    <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-sm rounded-lg overflow-hidden">
      {/* Header */}
      <header
        className="p-10 text-white space-y-2"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-4xl font-light tracking-wide">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        {data.personal_info?.profession && (
          <p className="uppercase tracking-[0.15em] text-sm opacity-90">
            {data.personal_info.profession}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-4 text-sm opacity-95">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <a
              target="_blank"
              href={data.personal_info?.linkedin}
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="size-4" />
              <span className="break-all text-xs">
                {data.personal_info.linkedin.replace("https://www.", "")}
              </span>
            </a>
          )}
          {data.personal_info?.website && (
            <a
              target="_blank"
              href={data.personal_info?.website}
              className="flex items-center gap-2 hover:underline"
            >
              <Globe className="size-4" />
              <span className="break-all text-xs">
                {data.personal_info.website.replace("https://", "")}
              </span>
            </a>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="p-10 space-y-12">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-2">
              Experience
            </h2>

            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="font-medium" style={{ color: accentColor }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {formatDate(exp.start_date)} –{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </div>
                  </div>
                  {exp.description && (
                    <div className="text-gray-700 leading-relaxed mt-3 whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-2">
              Projects
            </h2>

            <div className="space-y-8">
              {data.project.map((p, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2"
                  style={{ borderColor: accentColor }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-600">{p.type}</p>
                  </div>
                  {p.description && (
                    <p className="text-gray-700 leading-relaxed text-sm mt-2">
                      {p.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education & Skills */}
        <div className="grid sm:grid-cols-2 gap-10">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
                Education
              </h2>

              <div className="space-y-5">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: accentColor }}
                    >
                      {edu.institution}
                    </p>
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>{formatDate(edu.graduation_date)}</span>
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full text-white shadow-sm"
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
