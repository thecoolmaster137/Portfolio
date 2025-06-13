import React from 'react';
import { skills } from '../data/projects';

const Skills = () => {
  const getSkillColor = (category) => {
    const colors = {
      'Frontend': 'bg-blue-100 text-blue-800',
      'Backend': 'bg-green-100 text-green-800',
      'Database': 'bg-purple-100 text-purple-800',
      'Tools & Others': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here's a comprehensive 
            overview of my technical skills and expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getSkillColor(skillCategory.category)}`}>
                  <span className="text-xl font-bold">
                    {skillCategory.category.charAt(0)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {skillCategory.category}
                </h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Development Approach
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Clean, maintainable code with best practices
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Responsive design and mobile-first approach
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Performance optimization and SEO
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Version control and collaborative development
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Soft Skills
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Problem-solving and analytical thinking
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Team collaboration and communication
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Time management and project planning
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Continuous learning and adaptability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 