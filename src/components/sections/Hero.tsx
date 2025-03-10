"use client";

import SocialIcons from "../SocialIcons";

export default function Hero() {
  return (
    <header className="mb-12">
      <div className="flex flex-col-reverse gap-4 md:gap-0 items-center md:flex-row justify-between">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 ">Shivam Singh</h1>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-4">
            {"{Full Stack Developer}"}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center md:text-start mb-4">
            Building elegant solutions to complex problems with modern web
            technologies.
          </p>
          {/*Social Icons*/}
          <SocialIcons></SocialIcons>
        </div>
        <div className="relative w-36 h-36 md:w-72 md:h-72 overflow-hidden rounded-lg border-4 border-gray-200 dark:border-gray-800 shrink-0">
          {/* Replace with your actual image */}
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400 text-center p-4 text-sm">
              Profile Photo
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
