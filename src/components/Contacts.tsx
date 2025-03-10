import React from 'react'

function Contacts() {
  return (
    <section id="contact" className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
            Contact
          </h2>
          <div className="space-y-2">
            <p>
              <span className="text-gray-600 dark:text-gray-400">Email:</span>{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                your.email@example.com
              </a>
            </p>
            <p>
              <span className="text-gray-600 dark:text-gray-400">GitHub:</span>{" "}
              <a
                href="https://github.com/yourusername"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yourusername
              </a>
            </p>
            <p>
              <span className="text-gray-600 dark:text-gray-400">
                LinkedIn:
              </span>{" "}
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yourusername
              </a>
            </p>
          </div>
        </section>
  )
}

export default Contacts
