import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, description, tech, demoLink, github, image, category } = project;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="hidden items-center justify-center text-4xl text-gray-400">
          <span className="text-6xl">📱</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-500 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-1">
            {tech.map((technology, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
          >
            <FaGithub />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 