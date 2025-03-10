'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  // Extended project data with more details
  const projects = [
    {
      title: 'PaathShaala',
      description: 'A comprehensive online learning platform built with React and Node.js. Features include course management, student progress tracking, interactive quizzes, and video lectures.',
      longDescription: 'PaathShaala is an educational platform designed to provide a seamless learning experience for students and teachers. The application includes features such as course creation and management, student enrollment, progress tracking, interactive quizzes, video lectures, and discussion forums. The frontend is built with React, utilizing Redux for state management and styled-components for UI. The backend is powered by Node.js and Express, with MongoDB as the database.',
      image: '/projects/paathshaala.jpg',
      link: 'https://github.com/yourusername/paathshaala',
      demoLink: 'https://paathshaala-demo.vercel.app',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'JWT'],
      features: [
        'User authentication and authorization',
        'Course creation and management',
        'Video lecture streaming',
        'Interactive quizzes and assessments',
        'Progress tracking and analytics',
        'Discussion forums and community features'
      ]
    },
    {
      title: 'Portfolio',
      description: 'A modern portfolio website built with Next.js and TailwindCSS, featuring responsive design and dark mode support.',
      longDescription: 'This portfolio website showcases my skills, projects, and experience as a developer. Built with Next.js and TailwindCSS, it features a clean, minimalist design with code-like aesthetics. The site includes responsive layouts for all device sizes, dark/light theme support, and smooth animations powered by Framer Motion. The project structure is organized for maintainability and future expansion.',
      image: '/projects/portfolio.jpg',
      link: 'https://github.com/yourusername/portfolio',
      demoLink: 'https://portfolio-demo.vercel.app',
      tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion'],
      features: [
        'Responsive design for all device sizes',
        'Dark/light theme support',
        'Smooth animations and transitions',
        'SEO optimized',
        'Fast loading times with Next.js',
        'Code-like aesthetic with monospace fonts'
      ]
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced features like real-time inventory management, payment processing, and analytics.',
      longDescription: 'This e-commerce platform provides a complete solution for online stores. It includes product management, inventory tracking, shopping cart functionality, secure checkout with multiple payment options, order management, and customer accounts. The frontend is built with React, while the backend uses Node.js with Express. Data is stored in PostgreSQL, with Redis for caching and session management.',
      image: '/projects/ecommerce.jpg',
      link: 'https://github.com/yourusername/ecommerce',
      demoLink: 'https://ecommerce-demo.vercel.app',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'Docker'],
      features: [
        'Product catalog with categories and search',
        'User accounts and profiles',
        'Shopping cart and wishlist',
        'Secure checkout with multiple payment options',
        'Order tracking and history',
        'Admin dashboard with analytics',
        'Real-time inventory management'
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 font-mono p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Back to home link */}
        {/* <Link href="/" className="inline-flex items-center mb-8 text-blue-600 dark:text-blue-400 hover:underline">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link> */}

        {/* Page heading */}
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          A collection of my recent work. Each project represents a unique challenge and solution.
        </p>

        {/* Projects list */}
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              {/* Project image */}
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 relative">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Project Screenshot</p>
                  </div>
                )}
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.longDescription}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href={project.link}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    target="_blank"
                  >
                    <Github size={16} />
                    View Code
                  </Link>
                  {project.demoLink && (
                    <Link 
                      href={project.demoLink}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                      target="_blank"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
} 