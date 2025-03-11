"use client";

import Image from "next/image";
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
          <p className="text-gray-700 dark:text-gray-300 text-center md:text-start mb-2">
            Specializing in creating intuitive user interfaces with React and building robust APIs using Node.js and Django, I focus on delivering high-performance web applications tailored to meet user needs.
          </p>
          <p className="mb-4 text-gray-400">~ ChatGPT</p>
          {/*Social Icons*/}
          <SocialIcons></SocialIcons>
        </div>
        <div className="relative w-40 h-40 md:w-72 md:h-72 overflow-hidden rounded-lg border-4 border-gray-200 dark:border-gray-800 shrink-0">
          {/* Replace with your actual image */}
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <Image src={'/profile.jpg'} alt="profile" width={288} height={288} className="object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}
