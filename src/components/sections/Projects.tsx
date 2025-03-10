'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'PaathShaala',
    description: 'A web application built with React and Node.js for online learning platform.',
    link: 'https://github.com/yourusername/paathshaala',
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'Portfolio',
    description: 'A modern portfolio website built with Next.js and TailwindCSS.',
    link: 'https://github.com/yourusername/portfolio',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript']
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with advanced features.',
    link: 'https://github.com/yourusername/ecommerce',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold pb-2">Projects</h2>
        
        <Link 
          href="/projects" 
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm"
        >
          View All Projects
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
      <div className='border-b border-gray-300 dark:border-gray-700 w-full mb-4'></div>
      
      <motion.div 
        className="grid grid-cols-1 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <Link 
                href={project.link}
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                target="_blank"
              >
                View Code →
              </Link>
              <Link
                href={`/projects#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-600 dark:text-gray-400 hover:underline text-sm"
              >
                Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 