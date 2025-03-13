'use client';

const skills = [
  'C/C++',
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'Django',
  'CSS/Tailwind',
  'MongoDB',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Bash-Scripting'
];

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-300 dark:border-[#7e7567] pb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md hover:shadow-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
} 