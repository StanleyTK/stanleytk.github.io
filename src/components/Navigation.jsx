import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "All Projects" },
    { path: "/experience", label: "Experience" },
  ];

  const isActive = (path) => {
    const currentPath = location.pathname || "/";
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath === path;
  };

  return (
    <nav className="fixed top-0 right-0 z-50 w-full backdrop-blur-sm" style={{ backgroundColor: '#112240', borderBottom: '1px solid #233554' }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-12 md:h-16">
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity"
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div 
              className="w-7 h-7 md:w-8 md:h-8 rounded flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: '#112240',
                border: '1px solid #233554'
              }}
            >
              <span 
                className="text-xs md:text-sm font-bold"
                style={{ color: '#64ffda', fontFamily: 'monospace' }}
              >
                SK
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3 md:gap-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm transition-colors"
                style={{ 
                  fontFamily: 'monospace',
                  color: isActive(path) ? '#64ffda' : '#ccd6f6'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(path)) {
                    e.currentTarget.style.color = '#64ffda';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(path)) {
                    e.currentTarget.style.color = '#ccd6f6';
                  }
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

