import React from "react";

function Contacts() {
  return (
    <section id="contact" className="">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-300 dark:border-[#7e7567] pb-2">
        Get in Touch
      </h2>
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
          <span className="text-gray-600 dark:text-gray-400">LinkedIn:</span>{" "}
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
    </section>
  );
}

export default Contacts;
