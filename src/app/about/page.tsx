"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Experience from "@/components/sections/Experience";
import { motion } from 'framer-motion';

export default function About() {
  // Sample certification badges data
  const certifications = [
    {
      name: "Networking Basics",
      image: "/certifications/networking.png",
      href: "https://www.credly.com/badges/ead47b86-fb7e-44f2-ae6c-2557e327388f",
      issuer: "Cisco",
      year: "2025",
    },
    {
      name: "Javascript Essentials 1",
      image: "/certifications/js1.png",
      href: "https://www.credly.com/badges/04551add-1d69-4122-b000-24e7eb35be0a",
      issuer: "Cisco",
      year: "2024",
    },
    {
      name: "Javascript Essentials 2",
      image: "/certifications/js2.png",
      href: "https://www.credly.com/badges/53f8cc08-4366-45a6-8f3f-847a995acc6a",
      issuer: "Cisco",
      year: "2024",
    },
    {
      name: "Python Essentials 1",
      image: "/certifications/py1.png",
      href: "https://www.credly.com/badges/6f1f0420-d713-4abe-a061-4f93756e20d2",
      issuer: "Cisco",
      year: "2024",
    },
    {
      name: "Python Essentials 2",
      image: "/certifications/py2.png",
      href: "https://www.credly.com/badges/64d1b2ca-330c-4f5e-8db1-995165d7b6d2",
      issuer: "Cisco",
      year: "2024",
    },
  ];

  // Education data
  const education = [
    {
      degree: "Bachelors of Technology (CSE)",
      institution:
        "Hemwati Nandan Bahuguna Garhwal University (A Central University)",
      location: "Srinagar Garhwal, UK",
      period: "2021 - 2025",
      description:
        "Specializing in advanced software development and system design. Key areas of study include distributed systems, cloud computing, and enterprise software architecture.",
    },
    {
      degree: "Intermediate 10+2 (PCM)",
      institution: "Kendriya Vidyalaya Gomti Nagar",
      location: "Lucknow, UP",
      period: "2019 - 2020",
      description:
        "Completed 10+2 with a focus on Physics, Chemistry, and Mathematics, laying the groundwork for a career in technology and software development.",
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
            href={"/about/#experience"}
            className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            Experience
          </Link>
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
            Certifications
          </Link>
        </div>

        {/* Main content */}
        <div className="mb-12">
          {/* Name and image row */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end gap-6 mb-6">
            <div className="flex flex-col items-center md:items-start mb-4">
              <h2 className=" text-xl md:text-2xl font-bold">Shivam Singh</h2>
              <p className="text-blue-600 dark:text-blue-400 text-lg">
                {"{Full Stack Developer}"}
              </p>
            </div>

            <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg border-4 border-gray-200 dark:border-gray-800 shrink-0">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <Image
                  src={"/profile.jpg"}
                  alt="profile"
                  width={288}
                  height={288}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I&apos;m a passionate developer with over 1 years of experience
              building modern web applications. My journey in software
              engineering began when I built my first website using HTML and
              CSS, and I&apos;ve been hooked ever since.
            </p>

            <p>
              I specialize in React, TypeScript, and Node.js, with a strong
              focus on building scalable and maintainable applications. My
              expertise extends to Linux for server management and AWS for cloud
              solutions, which enhance my skill in the deployment of web
              applications.
            </p>
            <p>
              Additionally, I have a solid foundation in computer science
              fundamentals, including networking, dbms and operating systems,
              which allows me to design efficient and robust applications. I am
              particularly interested in creating full-stack web applications,
              enhancing user experiences, and optimizing application
              performance.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">My Journey</h3>
            <p>
              I began my career as a front-end developer, working with HTML,
              CSS, and JavaScript. As I progressed, I explored frameworks like
              React, transforming my approach to building user interfaces.
            </p>

            <p>
              My backend journey started with Node.js, where I built efficient
              APIs and worked with databases like MongoDB and PostgreSQL,
              enhancing my data modeling skills.
            </p>

            <p>
              I gained experience in Linux for server management and networking,
              along with AWS and Docker, solidifying my full-stack capabilities.
            </p>

            <p>
              As a Jr. Software Developer Trainee at NIT Uttarakhand, I gained
              hands-on experience in full-stack development, focusing on
              reusable components and responsive designs. This role deepened my
              expertise in React, JavaScript, and server management, while also
              providing me with valuable experience in AWS for cloud solutions,
              Linux for server management, and networking principles. My
              understanding of web technologies was further enhanced through
              team collaboration on various projects.
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
            <p id="experience">
              Outside of work, I enjoy watching camping blogs on YouTube,
              gossiping with friends, and experimenting with new technologies.
              I&apos;m also a chai adict and enjoy trying different chai
              flavours.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <Experience></Experience>

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

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  className="w-20 h-20 mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
                  href={cert.href}
                  target="_blank"
                >
                  <Image src={cert.image} alt="Badge" width={64} height={64} />
                </Link>
                <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs">
                  {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
