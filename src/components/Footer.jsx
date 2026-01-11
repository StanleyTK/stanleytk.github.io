import React from "react";
import user_info from "../data/user_info.js";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/StanleyTK", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/stanleykim2003", label: "LinkedIn" },
    { icon: FaInstagram, url: "https://instagram.com/_stanleykim", label: "Instagram" },
  ];

  return (
    <footer className="mt-20 pt-8 text-center" style={{ borderTop: '1px solid #233554' }}>
      <div className="flex justify-center items-center gap-6 mb-4">
        {socialLinks.map(({ icon: Icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: '#8892b0' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#64ffda'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#8892b0'}
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p className="text-sm" style={{ color: '#8892b0', fontFamily: 'monospace' }}>{user_info.footer}</p>
    </footer>
  );
}

export default Footer;
