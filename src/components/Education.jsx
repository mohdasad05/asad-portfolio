// src/components/Education.jsx
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Khwaja Moinuddin Chishti Language University',
      degree: 'B.Tech - Computer Science (AI & ML)',
      duration: '2020 - 2024',
      gpa: 'SGPA: 8.15',
    },
    {
      institution: 'Study Point Inter College',
      degree: 'Intermediate, UP Board',
      duration: '2019',
      gpa: 'Percentage: 71.00%',
    },
    {
      institution: 'Study Point Inter College',
      degree: 'High School, UP Board',
      duration: '2017',
      gpa: 'Percentage: 82.66%',
    },
  ];

  return (
    <section
      className="scroll-mt-20 py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
      id="education"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white group duration-300">
          <span className="relative inline-block">
            Education
            <span className="absolute left-0 -bottom-2 h-1 w-0 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.01] border border-transparent hover:border-teal-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap size={22} className="shrink-0 mt-1 text-gray-800 dark:text-white" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {edu.institution}
                </h3>
              </div>
              <h4 className="text-base text-teal-600 dark:text-teal-400">{edu.degree}</h4>
              <div className="text-base text-gray-600 dark:text-gray-400 flex justify-between">
                <span>{edu.duration}</span>
                <span>{edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
