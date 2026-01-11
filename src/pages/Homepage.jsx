import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import CursorGlow from "../components/CursorGlow.jsx";
import Project from "../components/Project";
import blogData from "../data/blog.json";
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
                  github={project.github}
                  featured={project.featured}
                />
              ))}
            </div>
          </section>
        )}

        {/* ───────── Blog ───────── */}
        <section id="blog" className="max-w-[1400px] mx-auto px-4 md:px-12 mt-8 md:mt-12 mb-12 md:mb-20">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" style={{ color: '#ccd6f6' }}>Blog</h2>
            <div className="h-px w-24" style={{ backgroundColor: '#64ffda' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogData.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="block"
              >
                <article 
                  className="p-6 rounded transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
                  style={{ backgroundColor: '#112240' }}
                >
                  <div className="mb-4">
                    <span className="text-sm" style={{ color: '#64ffda', fontFamily: 'monospace' }}>
                      {blog.year}
                    </span>
                    <h3 
                      className="text-xl font-semibold mt-2 mb-3 transition-colors"
                      style={{ color: '#ccd6f6' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#64ffda'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#ccd6f6'}
                    >
                      {blog.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#8892b0' }}>
                    {blog.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
