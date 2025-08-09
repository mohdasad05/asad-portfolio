// src/components/Certifications.jsx
import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const certifications = [
  { name: 'Python Django Fundamentals – Simplilearn', file: '/certificates/python-django-simplilearn.pdf' },
  { name: 'Tableau – Internshala Trainings', file: '/certificates/tableau-internshala.pdf' },
  { name: 'Artificial Intelligence Intern – Tech-A-Intern', file: '/certificates/ai-tech-a-intern.pdf' },
  { name: 'Data Science – Internshala Trainings', file: '/certificates/data-science-internshala.pdf' },
  { name: 'Machine Learning Intern – BharatIntern', file: '/certificates/ml-bharatintern.pdf' },
  { name: 'Machine Learning – Internshala Trainings', file: '/certificates/ml-internshala.pdf' },
  { name: 'Python Programming Intern - CodSoft', file: '/certificates/python-codsoft.pdf' },
  { name: 'Programming with Python – Internshala Trainings', file: '/certificates/python-internshala.pdf' },
  { name: 'Web Development Intern – CodeClause', file: '/certificates/web-dev-codeclause.pdf' },
  { name: 'Web Development - Internshala Trainings', file: '/certificates/web-dev-internshala.pdf' },
  { name: 'ChatGPT Guided Path - Coding Ninjas', file: '/certificates/chatgpt-coding-ninjas.pdf' },
  { name: 'Data Analytics Internship - Forage', file: '/certificates/data-analytics-forage.pdf' },
  { name: 'Robotic Arm Project Completion Certificate - B.Tech AIML 3rd Sem', file: '/certificates/robotic-arm.pdf'},
  { name: 'Enterprise Data Science – IBM', file: '/certificates/ibm-data-science.pdf' },
  { name: '2 Days Pre Bootcamp Workshop - GUVI', file: '/certificates/guvi-bootcamp.pdf' },
];

const Certifications = () => {
  return (
    <section className="scroll-mt-20 py-12 bg-gray-50 dark:bg-gray-900" id="certifications">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white group duration-300">
          <span className="relative inline-block">
            Certifications
            <span className="absolute left-0 -bottom-2 h-1 w-0 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 hover:bg-teal-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-teal-600 dark:text-teal-400 font-medium hover:underline"
              >
                <FaFilePdf className="mr-2 text-xl" />
                {cert.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
