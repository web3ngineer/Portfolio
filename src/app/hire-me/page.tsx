'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HireMePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 font-mono p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Back to home link */}
        {/* <Link href="/" className="inline-flex items-center mb-8 text-blue-600 dark:text-blue-400 hover:underline">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link> */}

        {/* Page heading */}
        <h1 className="text-3xl font-bold mb-6">Hire Me</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I am a passionate Full Stack Developer with experience in building modern web applications. I specialize in creating scalable and maintainable solutions using the latest technologies.
        </p>
        
        <h2 className="text-xl font-bold mb-4">What I Offer</h2>
        <ul className="list-disc pl-5 mb-6">
          <li>Custom web application development</li>
          <li>Responsive design and user experience optimization</li>
          <li>API development and integration</li>
          <li>Database design and management</li>
          <li>Performance optimization and code review</li>
        </ul>

        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I am proficient in:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>JavaScript, TypeScript</li>
          <li>React, Next.js</li>
          <li>Node.js, Express</li>
          <li>MongoDB, PostgreSQL</li>
          <li>AWS, Docker</li>
        </ul>

        <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
        <div className="space-y-2">
            <p>
              <span className="text-gray-600 dark:text-gray-400">Email:</span>{" "}
              <a
                href="mailto:shivamsingh@web3ngineer.in"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                shivamsingh@web3ngineer.in
              </a>
            </p>
            <p>
              <span className="text-gray-600 dark:text-gray-400">GitHub:</span>{" "}
              <a
                href="https://github.com/web3ngineer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/web3ngineer
              </a>
            </p>
            <p>
              <span className="text-gray-600 dark:text-gray-400">
                LinkedIn:
              </span>{" "}
              <a
                href="https://linkedin.com/in/web3ngineer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/web3ngineer
              </a>
            </p>
          </div>
      </div>
    </main>
  );
} 