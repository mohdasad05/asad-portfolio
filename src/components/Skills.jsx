// src/components/Skills.jsx
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'C', 'JavaScript'],
    },
    {
      category: 'Web Development',
      items: ['Django', 'Django REST Framework', 'HTML', 'CSS', 'MySQL', 'PostgreSQL'],
    },
    {
      category: 'Data Science & ML',
      items: ['Machine Learning', 'Data Science', 'Jupyter Notebook', 'Streamlit'],
    },
    {
      category: 'Tools & Technologies',
      items: ['DBMS', 'Tableau', 'Git', 'Postman'],
    },
  ];

  return (
    <section className="scroll-mt-20 py-16 bg-gray-50 dark:bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 hover:bg-teal-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-default"
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <BadgeCheck size={18} className="text-teal-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
