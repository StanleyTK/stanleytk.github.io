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
    const currentPath = location.pathname.replace("/Portfolio", "") || "/";
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath === path;
  };

  return (
    <nav className="fixed top-0 right-0 z-50 w-full backdrop-blur-sm" style={{ backgroundColor: '#112240', borderBottom: '1px solid #233554' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity"
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div 
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: '#112240',
                border: '1px solid #233554'
              }}
            >
              <span 
                className="text-sm font-bold"
                style={{ color: '#64ffda', fontFamily: 'monospace' }}
              >
                SK
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="px-3 py-2 text-sm transition-colors"
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
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

