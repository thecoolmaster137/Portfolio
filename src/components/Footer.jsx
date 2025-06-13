import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/projects';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: personalInfo.github, label: 'GitHub (thecoolmaster137)' },
    { icon: FaGithub, url: personalInfo.github2, label: 'GitHub (vijaykolekar137)' },
    { icon: FaLinkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, url: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">{personalInfo.name.charAt(0)}</span>
              </div>
              <span className="text-xl font-bold">{personalInfo.name}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {personalInfo.about}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="text-gray-300 text-sm">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 