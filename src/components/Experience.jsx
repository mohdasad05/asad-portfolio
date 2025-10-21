// src/components/Experience.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    { role: 'Python/Django Developer', company: 'WeSalvator', duration: 'Nov 2024 – Oct 2025' },
    { role: 'Artificial Intelligence Intern', company: 'Tech-A-Intern', duration: 'Mar 2024 – Apr 2024' },
    { role: 'Machine Learning Intern', company: 'BharatIntern', duration: 'Feb 2024 – Mar 2024' },
    { role: 'Python Programming Intern', company: 'CodSoft', duration: 'Oct 2023 – Nov 2023' },
    { role: 'Web Development Intern', company: 'CodeClause', duration: 'Sep 2023 – Oct 2023' },
    { role: 'Data Analytics Consulting Virtual Internship', company: 'Forage', duration: 'Jun 2023 – Aug 2023' },
  ];

  return (
    <section className="scroll-mt-20 py-12 bg-white dark:bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white group duration-300">
          <span className="relative inline-block">
            Experience
            <span className="absolute left-0 -bottom-2 h-1 w-0 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3 text-teal-600 dark:text-teal-400">
                <Briefcase size={22} className="shrink-0 mt-1" />
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-base">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
