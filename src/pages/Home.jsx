import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { projects, personalInfo } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {personalInfo.title}
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.about}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                View My Work
                <FaArrowRight />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-12">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
                title="GitHub (thecoolmaster137)"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={personalInfo.github2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
                title="GitHub (vijaykolekar137)"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Projects
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate developer who loves creating meaningful applications that solve real-world problems. 
                With a strong foundation in both frontend and backend development, I enjoy building full-stack applications 
                that provide excellent user experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg">
                  <span className="font-semibold">Location:</span> {personalInfo.location}
                </div>
                <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg">
                  <span className="font-semibold">Available for:</span> Freelance & Full-time
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-4xl">{personalInfo.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{personalInfo.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{personalInfo.title}</p>
                <p className="text-gray-600">
                  Passionate about creating innovative solutions and building amazing user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 