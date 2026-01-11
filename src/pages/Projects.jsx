import React from "react";
import CursorGlow from "../components/CursorGlow.jsx";
import projectsData from "../data/projects.json";

function Projects() {
  return (
    <div className="scroll-smooth min-h-screen relative" style={{ backgroundColor: '#0a192f', color: '#ccd6f6' }}>
      <CursorGlow />
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-12 md:pt-20 pb-12 md:pb-20 relative z-10">
        
        <div className="mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4" style={{ color: '#ccd6f6' }}>
            Projects
          </h1>
          <div className="h-px w-32" style={{ backgroundColor: '#64ffda' }}></div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="text-left py-2 px-4 text-xs font-mono uppercase" style={{ color: '#64ffda', borderBottom: '1px solid #233554' }}>Year</th>
                <th className="text-left py-2 px-4 text-xs font-mono uppercase" style={{ color: '#64ffda', borderBottom: '1px solid #233554' }}>Project</th>
                <th className="text-left py-2 px-4 text-xs font-mono uppercase" style={{ color: '#64ffda', borderBottom: '1px solid #233554' }}>Made at</th>
                <th className="text-left py-2 px-4 text-xs font-mono uppercase" style={{ color: '#64ffda', borderBottom: '1px solid #233554' }}>Built with</th>
                <th className="text-left py-2 px-4 text-xs font-mono uppercase" style={{ color: '#64ffda', borderBottom: '1px solid #233554' }}>Summary</th>
                <th className="text-left py-2 px-4 text-xs font-mono uppercase" style={{ color: '#64ffda', borderBottom: '1px solid #233554' }}>Link</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project, index) => (
                <tr 
                  key={index}
                  className="hover:bg-[#112240] transition-colors"
                >
                  <td className="py-2 px-4 text-sm font-mono" style={{ color: '#64ffda', borderBottom: '1px solid #233554' }}>
                    {project.year}
                  </td>
                  <td className="py-2 px-4 border-bottom" style={{ borderBottom: '1px solid #233554' }}>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#64ffda' }} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )}
                      {project.link || project.github ? (
                        <a
                          href={project.link || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#64ffda] transition-colors"
                          style={{ color: '#ccd6f6' }}
                        >
                          {project.title}
                        </a>
                      ) : (
                        <span style={{ color: '#ccd6f6' }}>{project.title}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-2 px-4 text-sm" style={{ color: '#8892b0', borderBottom: '1px solid #233554' }}>
                    {project.madeAt}
                  </td>
                  <td className="py-2 px-4" style={{ borderBottom: '1px solid #233554' }}>
                    <div className="flex flex-wrap gap-2">
                      {project.builtWith.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded text-xs"
                          style={{ 
                            backgroundColor: '#112240',
                            color: '#64ffda',
                            fontFamily: 'monospace'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-2 px-4 text-sm" style={{ color: '#8892b0', borderBottom: '1px solid #233554' }}>
                    {project.summary || ''}
                  </td>
                  <td className="py-2 px-4" style={{ borderBottom: '1px solid #233554' }}>
                    {(project.link || project.github) && (
                      <a
                        href={project.link || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-mono hover:text-[#64ffda] transition-colors"
                        style={{ color: '#64ffda' }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Projects;

