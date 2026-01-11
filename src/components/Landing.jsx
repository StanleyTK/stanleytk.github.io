import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { IoIosArrowForward } from "react-icons/io";
import user_info from "../data/user_info.js";

function Landing() {
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Purdue CS'],
    loop: true,
    delaySpeed: 3000,
  });

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-16">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="text-left flex-1">
          <h4 className="text-lg mb-4" style={{ color: '#64ffda', fontFamily: 'monospace' }}>
            Hi, my name is
          </h4>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#ccd6f6' }}>
            {user_info.main.name.split(' ')[0]} {user_info.main.name.split(' ')[1]}
          </h1>
          <h3 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: '#8892b0' }}>
            {text}
            <Cursor cursorStyle="_" />
          </h3>
          <p className="text-lg leading-relaxed max-w-xl mb-8" style={{ color: '#8892b0' }}>
            {user_info.main.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/experience"
              className="px-6 py-3 border transition-all duration-300 text-sm"
              style={{ 
                borderColor: '#64ffda', 
                color: '#64ffda',
                fontFamily: 'monospace'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 border transition-all duration-300 text-sm"
              style={{ 
                borderColor: '#64ffda', 
                color: '#64ffda',
                fontFamily: 'monospace'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Projects
            </Link>
          </div>
        </div>
        <div className="hidden md:block w-[300px] flex-shrink-0">
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-lg transform rotate-3 hover:rotate-6 transition-transform"
              style={{ border: '2px solid #64ffda' }}
            ></div>
            <img 
              className="rounded-lg relative z-10" 
              src={import.meta.env.BASE_URL + user_info.main.photo} 
              alt="Profile" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;