// Original code commented out
// import { GridBackgroundDemo } from "@/components/Grid";
//
// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between">
//       <GridBackgroundDemo/>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import SocialIcons from "@/components/SocialIcons";
import Contacts from "@/components/Contacts";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 font-mono p-6 pb-2 md:p-12 md:pb-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Hero></Hero>

        {/* Skills */}
        <Skills></Skills>

        {/* Projects */}
        <Projects></Projects>

        {/* Experience Section */}
        <Experience></Experience>

        {/* Contact */}
        <Contacts></Contacts>
        
      </div>
    </main>
  );
}
