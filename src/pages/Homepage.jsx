import React, { useContext, useEffect, useState, useMemo } from "react";
import {
  FaFolderOpen,
  FaBriefcase,
  FaTools,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

import Project from "../components/Project";
import ExperienceCard from "../components/ExperienceCard";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import ToggleTheme from "../components/ToggleTheme.jsx";
import EducationSection from "../components/EducationSection";

import user_info from "../data/user_info.js";
import { AppContext } from "../App.jsx";


const SectionHeader = React.memo(({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 mb-8">
    <Icon className="text-2xl text-gray-900 dark:text-gray-100" />
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
      {text}
    </h2>
    <span className="flex-grow h-px bg-gray-400 dark:bg-gray-600" />
  </div>
));
SectionHeader.displayName = "SectionHeader";

// ————————————————————————————————————————————————————————————————
//                              Homepage
// ————————————————————————————————————————————————————————————————
function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => setTimeout(() => setIsReady(true), 150);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }
  }, []);

  const wrapperCls = useMemo(
    () =>
      [
        "transition-opacity duration-500",
        isReady ? "opacity-100" : "opacity-0",
        "lg:max-w-[1200px] md:mx-auto min-h-screen w-full border-x border-gray-100 dark:border-gray-800",
        "bg-white/90 dark:bg-[#0e182c]/90 lg:backdrop-blur-sm",
        "contain-paint",
      ].join(" "),
    [isReady]
  );

  return (
    <div className="scroll-smooth">
      <div className={wrapperCls}>
        <ToggleTheme switchTheme={switchTheme} />
        <Landing />

        {/* ───────── Projects ───────── */}
        <section id="projects" className="px-6 md:px-24 mt-10">
          <SectionHeader icon={FaFolderOpen} text="Projects" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {user_info.projects.map((project) => (
              <Project key={project.name} theme={theme} {...project} />
            ))}
          </div>
          <div className="flex justify-start mt-12">
            <a
              href="https://github.com/StanleyTK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-blue-600 hover:text-gray-100 transition-all duration-300"
            >
              View All Projects
            </a>
          </div>
        </section>



        {/* ───────── Experience ───────── */}
        <section id="experience" className="px-6 md:px-24 mt-24">
          <SectionHeader icon={FaBriefcase} text="Experience" />
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {user_info.experience.map((job) => (
              <ExperienceCard key={job.company + job.title} {...job} />
            ))}
          </div>
            {/* <div className="flex justify-start mt-12">
                <a
              href="public/Resume_StanleyKim.pdf"
              download
              className="px-6 py-3 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-green-600 hover:text-gray-100 transition-all duration-300"
            >
              Download Resume
            </a>
          </div> */}
        </section>

        {/* ───────── Skills ───────── */}
        <section id="skills" className="mt-24">
          <div className="container mx-auto px-6 md:px-24">
            <SectionHeader icon={FaTools} text="Skills" />
          </div>

          <SkillsSection
            theme={theme === "dark" ? "&theme=dark" : ""} 
            skills={user_info.skills}  
          />
        </section>

          {/* <section id="blog" className="px-6 md:px-24 mt-24">
          <SectionHeader icon={FaGraduationCap} text="Blog" />
          <div className="text-lg text-gray-500 dark:text-gray-300">
            <p>
              Coming soon... 
            </p>
          </div>
        </section> */}


        {/* ───────── Education ───────── */}
        <section id="education" className="mt-24">
          <div className="container mx-auto px-6 md:px-24">
            <SectionHeader icon={FaGraduationCap} text="Education" />
          </div>
          <EducationSection education={user_info.education} />
        </section>

        {/* ───────── Contact ───────── */}
        <section id="contact" className="mt-24">
          <div className="container mx-auto px-6 md:px-24">
            <SectionHeader icon={FaEnvelope} text="Contact" />
          </div>
          <ContactSection />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
