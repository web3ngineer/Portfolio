"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  // Extended project data without description
  const projects = [
    {
      title: "PaathShaala",
      description: "Educational platform for learning.",
      image: "/projects/paathshaala.jpg",
      link: "https://github.com/yourusername/paathshaala",
      demoLink: "https://paathshaala-demo.vercel.app",
      tech: ["React", "Node.js", "MongoDB"],
      features: [
        "User authentication",
        "Course management",
        "Video streaming",
        "Interactive quizzes",
        "Progress tracking",
        "Discussion forums",
      ],
    },
    {
      title: "Portfolio",
      description: "Portfolio website showcasing skills.",
      image: "/projects/portfolio.jpg",
      link: "https://github.com/yourusername/portfolio",
      demoLink: "https://portfolio-demo.vercel.app",
      tech: ["Next.js", "TailwindCSS", "TypeScript"],
      features: [
        "Responsive design",
        "Dark/light theme",
        "Smooth animations",
        "SEO optimized",
        "Fast loading times",
        "Monospace fonts",
      ],
    },
    {
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution.",
      image: "/projects/ecommerce.jpg",
      link: "https://github.com/yourusername/ecommerce",
      demoLink: "https://ecommerce-demo.vercel.app",
      tech: ["React", "Node.js", "PostgreSQL"],
      features: [
        "Product catalog",
        "User accounts",
        "Shopping cart",
        "Secure checkout",
        "Order tracking",
        "Admin dashboard",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
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
          A collection of my recent work. Each project represents a unique
          challenge and solution.
        </p>

        {/* Projects list */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
              <div className="w-full h-44 bg-gray-200 dark:bg-gray-800 relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      Project Screenshot
                    </p>
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm mb-2">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="font-semibold">Tech-Stack</h3>
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
