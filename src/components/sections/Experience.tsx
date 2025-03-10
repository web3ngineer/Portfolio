import React from 'react'

function Experience() {
    
    const experiences = [
        {
          title: "Senior Full Stack Developer",
          company: "Tech Innovators Ltd",
          location: "Remote",
          period: "2022 - Present",
          description: "Leading development of enterprise-scale web applications using Next.js and Node.js",
          achievements: [
            "Architected and implemented microservices-based backend infrastructure",
            "Reduced application load time by 60% through performance optimization",
            "Led a team of 5 developers and mentored junior developers",
            "Implemented CI/CD pipelines reducing deployment time by 40%"
          ],
          technologies: ["Next.js", "Node.js", "TypeScript", "AWS", "MongoDB"]
        },
        {
          title: "Full Stack Developer",
          company: "Digital Solutions Inc",
          location: "Bangalore, India",
          period: "2020 - 2022",
          description: "Developed and maintained multiple client-facing web applications",
          achievements: [
            "Built responsive web applications using React and Express",
            "Implemented real-time features using WebSocket",
            "Optimized database queries improving response time by 45%",
            "Collaborated with UX team to improve user experience"
          ],
          technologies: ["React", "Express.js", "PostgreSQL", "Redis", "Docker"]
        },
        {
          title: "Frontend Developer",
          company: "WebTech Solutions",
          location: "Delhi, India",
          period: "2019 - 2020",
          description: "Focused on building responsive and accessible web interfaces",
          achievements: [
            "Developed reusable component library reducing development time",
            "Implemented responsive designs for mobile-first applications",
            "Improved website accessibility to meet WCAG standards",
            "Integrated third-party APIs and payment gateways"
          ],
          technologies: ["React", "JavaScript", "HTML/CSS", "Sass", "REST APIs"]
        }
      ];

  return (
    <section id="experience" className="mb-12">
          <h2 className="text-xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6">
                {/* Timeline line */}
                <div className="absolute left-0 top-1.5 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-black dark:text-white">{exp.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">
                      {exp.location} • {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-sm mb-4">{exp.description}</p>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">{achievement}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Experience
