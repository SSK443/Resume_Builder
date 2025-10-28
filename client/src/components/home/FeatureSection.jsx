import React from "react";

function FeatureSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
            font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div id="features">
        <section className="mt-16 mb-16">
          
          <h1 className="text-3xl font-semibold text-center mx-auto text-gray-900">
            Powerful AI Resume Builder Features
          </h1>
          <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
            Everything you need to create a professional, ATS-optimized resume in
            minutes with AI-driven tools.
          </p>
  
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 sm:mt-16 px-4 sm:px-6 md:px-12">
            <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
              <img
                className="rounded-xl w-full h-48 object-cover"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png"
                alt="AI Content Generation"
              />
              <h3 className="text-base font-semibold text-slate-700 mt-4">
                AI Content Generation
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Automatically generate tailored resume content with AI, customized
                to your skills and experience.
              </p>
            </div>
            <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
              <img
                className="rounded-xl w-full h-48 object-cover"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png"
                alt="ATS Optimization"
              />
              <h3 className="text-base font-semibold text-slate-700 mt-4">
                ATS Optimization
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Ensure your resume passes Applicant Tracking Systems with
                AI-driven keyword optimization.
              </p>
            </div>
            <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
              <img
                className="rounded-xl w-full h-48 object-cover"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png"
                alt="Professional Templates"
              />
              <h3 className="text-base font-semibold text-slate-700 mt-4">
                Professional Templates
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Choose from a variety of customizable, recruiter-approved resume
                templates.
              </p>
            </div>
          </div>
          
        </section>
      </div>
    </>
  );
}

export default FeatureSection;
