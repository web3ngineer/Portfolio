"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function About() {
  // Sample certification badges data
  const certifications = [
    {
      name: "AWS Certified Developer",
      image: "/certifications/aws-developer.png",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "MongoDB Certified Developer",
      image: "/certifications/mongodb.png",
      issuer: "MongoDB, Inc.",
      year: "2022",
    },
    {
      name: "React Developer Certification",
      image: "/certifications/react-cert.png",
      issuer: "Meta",
      year: "2022",
    },
    {
      name: "Certified Node.js Developer",
      image: "/certifications/nodejs.png",
      issuer: "OpenJS Foundation",
      year: "2021",
    },
  ];

  // Education data
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Madan Mohan Malaviya University of Technology",
      location: "Gorakhpur, UP",
      period: "2021 - 2024",
      description:
        "Specializing in advanced software development and system design. Key areas of study include distributed systems, cloud computing, and enterprise software architecture.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. Ram Manohar Lohia Avadh University",
      location: "Ayodhya, UP",
      period: "2018 - 2021",
      description:
        "Foundation in computer science and programming. Focused on web development, database management, and software engineering principles.",
    },
  ];

  // Experience data
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Ltd",
      location: "Remote",
      period: "2022 - Present",
      description:
        "Leading development of enterprise-scale web applications using Next.js and Node.js",
      achievements: [
        "Architected and implemented microservices-based backend infrastructure",
        "Reduced application load time by 60% through performance optimization",
        "Led a team of 5 developers and mentored junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
      ],
      technologies: ["Next.js", "Node.js", "TypeScript", "AWS", "MongoDB"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      location: "Bangalore, India",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing web applications",
      achievements: [
        "Built responsive web applications using React and Express",
        "Implemented real-time features using WebSocket",
        "Optimized database queries improving response time by 45%",
        "Collaborated with UX team to improve user experience",
      ],
      technologies: ["React", "Express.js", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "WebTech Solutions",
      location: "Delhi, India",
      period: "2019 - 2020",
      description:
        "Focused on building responsive and accessible web interfaces",
      achievements: [
        "Developed reusable component library reducing development time",
        "Implemented responsive designs for mobile-first applications",
        "Improved website accessibility to meet WCAG standards",
        "Integrated third-party APIs and payment gateways",
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "Sass", "REST APIs"],
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 font-mono p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Back to home link */}
        {/* <Link href="/" className="inline-flex items-center mb-8 text-blue-600 dark:text-blue-400 hover:underline">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link> */}

        {/* Page heading */}
        <h1 className="text-3xl font-bold mb-2">About Me</h1>
        <div className="flex gap-2 mb-4 md:mb-0">
          <Link
            href={"/about/#education"}
            className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            Education
          </Link>
          <Link
            href={"/about/#certification"}
            className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            Certification & Badges
          </Link>
        </div>

        {/* Main content */}
        <div className="mb-12">
          {/* Name and image row */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end gap-6 mb-6">
            <div className="flex flex-col items-center md:items-start mb-4">
              <h2 className="text-xl font-bold">Shivam Singh</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {"{Full Stack Developer}"}
              </p>
            </div>

            <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg border-4 border-gray-200 dark:border-gray-800 shrink-0">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400 text-center p-4 text-sm">
                  Profile Photo
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I&apos;m a passionate developer with over 5 years of experience
              building modern web applications. My journey in software
              engineering began when I built my first website using HTML and
              CSS, and I&apos;ve been hooked ever since.
            </p>

            <p>
              I specialize in React, TypeScript, and Node.js, with a strong
              focus on building scalable and maintainable applications. I&apos;m
              particularly interested in creating intuitive user experiences and
              optimizing application performance.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">My Journey</h3>
            <p>
              I started my career as a front-end developer, working with HTML,
              CSS, and vanilla JavaScript. As I grew in my role, I began
              exploring React and fell in love with its component-based approach
              to building UIs.
            </p>

            <p>
              Eventually, I expanded my skills to include back-end development
              with Node.js and database design with MongoDB and PostgreSQL. This
              full-stack knowledge has allowed me to build complete solutions
              from the ground up.
            </p>

            <h3 className="text-lg font-bold mt-12 mb-2">What I Do</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Develop responsive web applications with React and Next.js
              </li>
              <li>Build robust APIs with Node.js and Express</li>
              <li>Design and implement database schemas</li>
              <li>Optimize application performance</li>
              <li>Implement authentication and authorization systems</li>
              <li>Write clean, maintainable, and well-tested code</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-2">
              When I&apos;m Not Coding
            </h3>
            <p>
              Outside of work, I enjoy hiking, reading science fiction, and
              experimenting with new technologies. I&apos;m also an avid coffee
              enthusiast and enjoy trying different brewing methods.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <section id="education" className="mb-12">
          <h3 className="text-lg font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 pb-6 last:pb-0">
                {/* Timeline line */}
                <div className="absolute left-0 top-1.5 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                  <h4 className="font-bold text-black dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {edu.location} • {edu.period}
                  </p>
                  <p className="text-sm mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12" id="certification">
          <h2 className="text-xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
            Certifications & Badges
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  {/* Replace with actual badge images */}
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Badge
                  </span>
                </div>
                <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            * Add your actual certification badges by placing images in the
            public/certifications folder.
          </p>
        </section>
      </div>
    </main>
  );
}
