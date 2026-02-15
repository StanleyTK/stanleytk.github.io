import React, { useContext } from "react";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import CursorGlow from "../components/CursorGlow.jsx";
import Project from "../components/Project";
import projectsData from "../data/projects.json";
import { AppContext } from "../App.jsx";

// ————————————————————————————————————————————————————————————————
//                              Homepage
// ————————————————————————————————————————————————————————————————
function Homepage() {
  const { theme } = useContext(AppContext);
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="scroll-smooth min-h-screen relative" style={{ backgroundColor: '#0a192f', color: '#ccd6f6' }}>
      <CursorGlow />
      <div className="min-h-screen w-full pt-12 md:pt-16 relative z-10">
        <Landing />

        {/* ───────── Featured Projects ───────── */}
        {featuredProjects.length > 0 && (
          <section id="featured-projects" className="max-w-[1400px] mx-auto px-4 md:px-12 mt-8 md:mt-12 mb-12 md:mb-20">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" style={{ color: '#ccd6f6' }}>Featured Projects</h2>
              <div className="h-px w-24" style={{ backgroundColor: '#64ffda' }}></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.map((project) => (
                <Project 
                  key={project.title} 
                  theme={theme} 
                  title={project.title}
                  description={project.summary}
                  technologyUsed={project.builtWith.join(', ')}
                  link={project.link}
                  github={project.github}
                  featured={project.featured}
                />
              ))}
            </div>
          </section>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
