// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section
      className="scroll-mt-20 py-12 bg-white dark:bg-gray-900 transition-colors duration-500"
      id="about"
    >
      <div className="container mx-auto px-4 animate-fade-up">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white group duration-300">
          <span className="relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-2 h-1 w-0 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h2>
        <div className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center text-[17px] leading-relaxed hover:scale-[1.01] transition-transform duration-300 space-y-6">
          <p>
            I'm a Computer Science graduate specializing in Artificial Intelligence & Machine Learning, currently working as a Python/Django Developer Intern at <strong>WeSalvator</strong>. I’ve worked on building real-time, scalable, and secure backend systems using modern development practices.
          </p>
          <p>
            My core skills include backend development with <strong>Django</strong> and <strong>FastAPI</strong>, real-time features using <strong>WebSockets</strong> and <strong>Django Channels</strong>, API security with <strong>JWT</strong>, and microservices architecture. I’ve also used <strong>Docker</strong> for containerization, <strong>.env configs</strong> for environment management, and integrated <strong>Redis</strong> for async tasks, OTP storage, and real-time updates. I’ve implemented live volunteer tracking using <strong>LeafletJS</strong> for map rendering and driving-route visualization.
          </p>
          <p>
            I follow clean code principles and value quality—writing unit tests with <strong>pytest</strong>, conducting API testing with <strong>Postman</strong>, and using <strong>SonarQube</strong> for static code analysis. For version control and collaboration, I work with <strong>Git</strong>, <strong>GitHub</strong>, and <strong>Gitea</strong>.
          </p>
          <p>
            In addition to backend work, I'm passionate about AI/ML, having built projects with <strong>Pandas</strong>, <strong>NumPy</strong>, <strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, and <strong>Streamlit</strong>. I love solving real-world problems—whether it's building rescue coordination platforms, recommendation systems, or automation tools.
          </p>
          <p>
            I'm also active on{' '}
            <a
              href="https://github.com/mohdasad05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 underline"
            >
              GitHub
            </a>,{' '}
            <a
              href="https://linkedin.com/in/mohammad-asad-631647277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 underline"
            >
              LinkedIn
            </a>, and{' '}
            <a
              href="https://youtube.com/@mohdasad_05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 underline"
            >
              YouTube
            </a>, where I share my projects, open-source work, and connect with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
