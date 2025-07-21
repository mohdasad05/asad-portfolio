// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section
      className="scroll-mt-20 py-16 bg-white dark:bg-gray-900 transition-colors duration-500"
      id="about"
    >
      <div className="container mx-auto px-4 animate-fade-up">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center text-lg leading-relaxed hover:scale-[1.01] transition-transform duration-300">
          I’m a Computer Science graduate specializing in Artificial Intelligence & Machine Learning, with hands-on experience in building full-stack web applications using Python and Django. Currently working at WeSalvator as a Python/Django Developer Intern, I have actively contributed to transforming monolithic systems into scalable microservices, integrating technologies like FastAPI, PostgreSQL, JWT Authentication, WebSockets, Redis, and Docker.

          My passion lies in solving real-world problems through technology—whether it's developing real-time tracking features, architecting secure API services, or deploying ML models. I believe in writing clean, modular code and constantly strive to upskill in AI/ML, backend engineering, and modern DevOps practices.

          I'm also active on <a href="https://github.com/mohdasad05" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 underline">GitHub</a> and <a href="https://www.linkedin.com/in/mohammad-asad-631647277/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 underline">LinkedIn</a>, where I showcase my projects and connect with fellow developers and mentors.
        </p>

      </div>
    </section>
  );
};

export default About;
