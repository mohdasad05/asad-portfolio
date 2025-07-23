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
          I'm a Computer Science graduate with a specialization in Artificial Intelligence & Machine Learning, currently working as a Python/Django Developer Intern at <strong>WeSalvator</strong>. I’ve gained hands-on experience building robust, full-stack web applications and transforming monolithic systems into scalable microservices using modern technologies.
          <br /><br />
          My skill set spans backend development with Django and FastAPI, API security with JWT, asynchronous processing with Redis and WebSockets, and containerization with Docker. I write modular, clean code, and I’m proficient in testing using <strong>pytest</strong>, ensuring code quality with <strong>SonarQube</strong>, and collaborating via Git, GitHub, and <strong>Gitea</strong>.
          <br /><br />
          I'm passionate about solving real-world problems through technology—whether it's building real-time tracking systems, implementing secure and scalable APIs, or exploring AI and ML applications. I enjoy taking ownership of features end-to-end and continuously learning to improve my craft.
          <br /><br />
          I'm also active on
          {' '}
          <a href="https://github.com/mohdasad05" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 underline">GitHub</a>,
          {' '}
          <a href="https://linkedin.com/in/mohammad-asad-631647277/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 underline">LinkedIn</a>,
          {' '}
          and
          {' '}
          <a href="https://youtube.com/@mohdasad_05" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 underline">YouTube</a>,
          where I share my projects, open-source work, and connect with the developer community.
        </p>
      </div>
    </section>
  );
};

export default About;
