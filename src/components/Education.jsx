// src/components/Education.jsx
import React from 'react';

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
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
          Education
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.01] border border-transparent hover:border-teal-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {edu.institution}
              </h3>
              <h4 className="text-md text-teal-600 dark:text-teal-400 mb-2">{edu.degree}</h4>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex justify-between">
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
