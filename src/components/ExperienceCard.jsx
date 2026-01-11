import React from "react";

function ExperienceCard({ image, role, company, year, description, location, technologies, technologyUsed, index }) {
  const descriptionPoints = description.split('\n');
  const technologyUsedList = technologyUsed.split(',');

  return (
    <div className="relative pl-8 pb-8 border-l-2 border-[#233554] hover:border-[#64ffda] transition-colors group">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0a192f] border-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm text-[#64ffda] font-mono">{year.split(' – ')[0]}</span>
          {year.includes('–') && (
            <>
              <span className="text-[#64ffda]">—</span>
              <span className="text-sm text-[#64ffda] font-mono">{year.split(' – ')[1]}</span>
            </>
          )}
        </div>
        <h3 className="text-xl font-semibold text-[#ccd6f6] mb-1">
          {role} · {company}
        </h3>
        <p className="text-sm text-[#8892b0] mb-4">{location}</p>
      </div>
      
      <div className="text-[#8892b0] mb-4">
        {descriptionPoints.map((point, idx) => (
          <p key={idx} className="mb-3 leading-relaxed">
            {point.trim()}
          </p>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {technologyUsedList.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 rounded text-xs"
            style={{
              backgroundColor: '#112240',
              color: '#64ffda',
              fontFamily: 'monospace'
            }}
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
