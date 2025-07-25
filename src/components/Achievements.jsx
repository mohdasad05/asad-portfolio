import React from 'react';
import { FaFilePdf, FaStar, FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section className="scroll-mt-20 py-12 bg-white dark:bg-gray-900" id="achievements">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white group duration-300">
          <span className="relative inline-block">
            Achievements
            <span className="absolute left-0 -bottom-2 h-1 w-0 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </span>           
        </h2>

        <div className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl hover:bg-teal-50 dark:hover:bg-gray-700">
          
          {/* 🏅 Floating Badge Icon */}
          <div className="absolute top-4 right-4 bg-yellow-400 text-white p-2 rounded-full shadow-lg animate-floating">
            <FaMedal size={22} />
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Web Development Intern – CodeClause (Oct 2023)
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            During my internship at CodeClause, I was recognized for my outstanding performance and dedication.
            My creative approach and adherence to best practices were highly appreciated.
          </p>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>Excellent communication skills</li>
            <li>Eagerness to learn and explore new technologies</li>
            <li>Impressive project submissions & team participation</li>
            <li>Innovative problem-solving approach</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This feedback boosted my passion for web development and commitment to high-quality work.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Grateful to the CodeClause team for their support and mentorship.
          </p>

          <a
            href="/achievements/lor-codeclause.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:underline"
          >
            <FaFilePdf className="mr-2" /> View Letter of Recommendation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
