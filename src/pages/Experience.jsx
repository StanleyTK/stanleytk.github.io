import React, { useContext } from "react";
import ExperienceCard from "../components/ExperienceCard";
import CursorGlow from "../components/CursorGlow.jsx";
import user_info from "../data/user_info.js";
import { AppContext } from "../App.jsx";

function Experience() {
  const { theme } = useContext(AppContext);

  return (
    <div className="scroll-smooth min-h-screen bg-[#0a192f] text-[#ccd6f6] relative">
      <CursorGlow />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-20 relative z-10">
        
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-4">
            Experience
          </h1>
          <div className="h-px w-32 bg-[#64ffda]"></div>
        </div>

        {/* ───────── Experience ───────── */}
        <section id="experience">
          <div className="grid grid-cols-1 gap-6">
            {user_info.experience.map((job, index) => (
              <ExperienceCard key={job.company + job.role + index} {...job} index={index} />
            ))}
          </div>
          {/* <div className="flex justify-start mt-12 mb-12">
            <a
              href="/Resume_StanleyKim.pdf"
              download
              className="px-6 py-3 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-green-600 hover:text-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div> */}
        </section>
      </div>
    </div>
  );
}

export default Experience;

