import React from "react";

function Project({ theme, title, description, technologies, link, github, technologyUsed, featured }) {
  const technologyUsedList = technologyUsed.split(',');

  return (
    <div className="group relative bg-[#112240] p-6 rounded hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <svg className="w-6 h-6 text-[#64ffda] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        {(link || github) && (
          <a 
            href={link || github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            aria-label={`${title} - External link`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5H19.5M19.5 4.5V10.5M19.5 4.5L10.5 13.5M18 13.5V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.25C3 7.00736 4.00736 6 5.25 6H10.5" />
            </svg>
          </a>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors flex items-center gap-2">
        {featured && (
          <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#64ffda' }} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        <span>{title}</span>
      </h3>
      <p className="text-[#8892b0] text-base leading-relaxed mb-6">
        {description}
      </p>
      
      <ul className="flex flex-wrap gap-2">
        {technologyUsedList.map((tech, index) => (
          <li 
            key={index}
            className="px-2 py-1 rounded text-xs"
            style={{
              backgroundColor: '#112240',
              color: '#64ffda',
              fontFamily: 'monospace'
            }}
          >
            {tech.trim()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
