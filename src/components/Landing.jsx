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
    <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-16 md:pt-20 pb-12 md:pb-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
        <div className="text-left flex-1 w-full">
          <h4 className="text-sm md:text-lg mb-2 md:mb-4" style={{ color: '#64ffda', fontFamily: 'monospace' }}>
            Hi, my name is
          </h4>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6" style={{ color: '#ccd6f6' }}>
            {user_info.main.name.split(' ')[0]} {user_info.main.name.split(' ')[1]}
          </h1>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ color: '#8892b0' }}>
            {text}
            <Cursor cursorStyle="_" />
          </h3>
          <p className="text-sm md:text-lg leading-relaxed max-w-xl mb-6 md:mb-8" style={{ color: '#8892b0' }}>
            {user_info.main.description}
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link
              to="/experience"
              className="px-4 md:px-6 py-2 md:py-3 border transition-all duration-300 text-xs md:text-sm"
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
              className="px-4 md:px-6 py-2 md:py-3 border transition-all duration-300 text-xs md:text-sm"
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
        <div className="block md:hidden w-48 flex-shrink-0 mb-4">
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-lg transform rotate-3"
              style={{ border: '2px solid #64ffda' }}
            ></div>
            <img 
              className="rounded-lg relative z-10 w-full" 
              src={import.meta.env.BASE_URL + user_info.main.photo} 
              alt="Profile" 
            />
          </div>
        </div>
        <div className="hidden md:block w-[350px] flex-shrink-0">
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