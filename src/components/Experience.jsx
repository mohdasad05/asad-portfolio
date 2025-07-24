// src/components/Experience.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    { role: 'Python/Django Intern', company: 'WeSalvator', duration: 'Nov 2024 – Present' },
    { role: 'Artificial Intelligence Intern', company: 'Tech-A-Intern', duration: 'Mar 2024 – Apr 2024' },
    { role: 'Machine Learning Intern', company: 'BharatIntern', duration: 'Feb 2024 – Mar 2024' },
    { role: 'Python Programming Intern', company: 'CodSoft', duration: 'Oct 2023 – Nov 2023' },
    { role: 'Web Development Intern', company: 'CodeClause', duration: 'Sep 2023 – Oct 2023' },
    { role: 'Data Analytics Consulting Virtual Internship', company: 'Forage', duration: 'Jun 2023 – Aug 2023' },
  ];

  return (
    <section className="scroll-mt-20 py-16 bg-white dark:bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
          Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3 text-teal-600 dark:text-teal-400">
                <Briefcase size={24} />
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-lg">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
