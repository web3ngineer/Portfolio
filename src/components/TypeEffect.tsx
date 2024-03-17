"use client";
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { IconBrandGithub } from "@tabler/icons-react";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
        text: "I"
    },
    {
      text: "Build",
    },
    {
      text: "Full-Stack",
    },
    {
      text: "Web-Apps",
    },
    {
      text: "using",
    },
    {
      text: "MERN-Stack",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-5xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
        Shivam Singh
      </p>
      <TypewriterEffectSmooth words={words} />
      <a href="https://github.com/singhshivam583" target="_blank">
        <Button className="flex gap-2 bg-neutral-400 backdrop-blur-xl dark:bg-slate-900/[0.8]">
          <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  GitHub
              </span>
        </Button>
      </a>
      <p className="py-2 mt-10 text-blue-500">launching soon....</p>
    </div>
  );
}
