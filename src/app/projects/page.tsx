"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  // Extended project data without description
  const projects = [
    {
      title: "Dom Projects",
      description: "Collection of Basic Dom Projects",
      image: "/projects/dom-projects.png",
      link: "https://github.com/web3ngineer/dom-projects",
      demoLink: "https://dom-projects.web3ngineer.in",
      tech: ["HTML", "CSS", "Javascript"],
      features: [],
    },
    {
      title: "React Projects",
      description: "Collection of Basic React Projects",
      image: "/projects/react-projects.png",
      link: "https://github.com/web3ngineer/react-projects",
      demoLink: "https://react-projects-shivam.netlify.app/",
      tech: ["Javascript", "React", "Tailwind-CSS"],
      features: [],
    },
    {
      title: "PaathShaala",
      description: "Educational platform for learning.",
      image: "/projects/paathshaala.png",
      link: "https://github.com/web3ngineer/paathshaala",
      demoLink: "https://paathshaala.web3ngineer.in",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Razorpay",
        "Resend",
        "Shadcn",
        "Cloudinary",
      ],
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
      title: "Lukka-Chuppi",
      description: "Anonymous Feedback Sender",
      image: "/projects/lukka-chhuppi.png",
      link: "https://github.com/web3ngineer/feedback-nextjs",
      demoLink: "https://lukka-chhuppi.web3ngineer.in",
      tech: [
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "Resend",
        "Zod",
        "Mongodb",
        "NextAuth",
      ],
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
      title: "Mern-Eats",
      description: "Online Food Ordering Web-App",
      image: "/projects/mern-eats.png",
      link: "https://github.com/web3ngineer/mern-eats",
      demoLink: "https://mern-eats.web3ngineer.in",
      tech: [
        "Typescript",
        "React",
        "Node.js",
        "Mongodb",
        "Auth0",
        "Cloudinary",
      ],
      features: [
        "Product catalog",
        "User accounts",
        "Shopping cart",
        "Secure checkout",
        "Order tracking",
        "Admin dashboard",
      ],
    },
    {
      title: "UTube-Backend",
      description:
        "A backend service for UTube, providing RESTful APIs for video management and user authentication.",
      image: "/projects/utube-backend.png",
      link: "https://github.com/web3ngineer/utube",
      demoLink: "https://utube.web3ngineer.in/api/v1/healthcheck",
      tech: ["Javascript", "React", "Node.js", "Mongodb", "JWT", "Cloudinary"],
      features: [],
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
        {/* Page heading */}
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        {/* GitHub link button */}
        <Link
          href="https://github.com/web3ngineer"
          target="_blank"
          className="inline-flex items-center mb-4 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <Github size={24} className="mr-2" />
          View GitHub Profile
        </Link>
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
                    className="object-cover transition-transform duration-300 transform hover:scale-105"
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
