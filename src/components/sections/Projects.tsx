"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PaathShaala",
    description:
      "A web application built with React and Node.js for online learning platform.",
    link: "https://paathshaala.web3ngineer.in",
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
  },
  {
    title: "Lukka-Chhuppi",
    description:
      "Anonymous Feedback Sender is modern website built with Next.js and an Integration of Gemini for Suggestion",
    link: "https://lukka-chhuppi.web3ngineer.in",
    tech: [
      "Next.js",
      "TailwindCSS",
      "JavaScript",
      "Resend",
      "Mongodb",
      "Shadcn",
      "zod",
      "React-Email",
      "Next-Auth",
    ],
  },
  {
    title: "UTube-Backend",
    description:
      "A backend service for UTube, providing RESTful APIs for video management and user authentication.",
    link: "https://utube.web3ngineer.in/api/v1/healthcheck",
    apiDoc: "https://documenter.getpostman.com/view/33610151/2sA35BbPtT",
    tech: ["JavaScript", "Mongodb", "Express", "Jwt", "Cloudinary"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold inline-flex items-center pb-2">
          Featured Projects
        </h2>
        
        <div className="hidden md:block">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm pb-2"
          >
            View All Projects
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>

      <div className="border-b border-gray-300 dark:border-[#7e7567] w-full mb-4"></div>

      <div className="md:hidden block">
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm mb-4"
        >
          View All Projects
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-[#7e7567]"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div>
              {project.apiDoc && (
                <Link
                  href={project.apiDoc}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  target="_blank"
                >
                  API Doc →
                </Link>
              )}
            </div>
            <div className="flex justify-between items-center">
              <Link
                href={project.link}
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm"
                target="_blank"
              >
                Live Project →
              </Link>
              <Link
                href={`/projects#${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
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
