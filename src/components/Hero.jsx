import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      className="scroll-mt-[72px] pt-[72px] pb-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
      id="hero"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-[4.5rem] lg:gap-5 animate-fade-up relative">
        {/* Background Glow Effect */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 blur-3xl opacity-20 animate-pulse z-0"></div>

        {/* Profile Image with Glow */}
        <div className="md:w-1/3 flex justify-center items-center relative z-10 mt-10 md:-mt-20 min-w-[14rem]">
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 blur-2xl opacity-30 animate-ping"></div>
          <img
            src="/profile.jpg"
            alt="Mohammad Asad"
            className="relative rounded-full w-60 sm:w-64 md:w-64 xl:w-72 h-auto aspect-square object-cover shadow-2xl border-4 border-teal-500 transition-transform hover:scale-105 duration-300"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            <span className="block">Hi, I'm</span>
            <span className="inline-flex items-center justify-center md:justify-start gap-2 whitespace-nowrap">
              Mohammad Asad
              <span
                className="inline-block origin-bottom-left text-yellow-400 text-3xl sm:text-4xl md:text-4xl animate-wave"
                role="img"
                aria-label="waving hand"
              >
                👋
              </span>
            </span>
          </h1>

          <h2 className="text-2xl font-semibold text-teal-600 dark:text-teal-300 mb-4">
            <Typewriter
              words={[
                'Python/Django Developer 👨‍💻',
                'AI/ML Enthusiast 🤖',
                'Open Source Contributor 🌐'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
            B.Tech in Computer Science (AI & ML)
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Passionate developer with 1+ years of hands-on experience in building robust applications.
            Currently working at WeSalvator, focusing on Python/Django development while exploring AI/ML
            and Data Science.
          </p>

          <div className="text-base mb-4">
            <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Proven Expertise in:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Web development (Django, HTML/CSS, JavaScript)</li>
              <li>Machine Learning implementation & Data Science</li>
              <li>Database architecture (MySQL, PostgreSQL)</li>
              <li>Software development best practices & problem-solving</li>
              <li>API design & microservices development (FastAPI, REST)</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start space-x-6 mt-4">
            <a
              href="https://github.com/mohdasad05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-transform transform hover:scale-125 duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/mohammad-asad-631647277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-transform transform hover:scale-125 duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:mohdasad.9506@gmail.com"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-transform transform hover:scale-125 duration-300"
            >
              <i className="far fa-envelope"></i>
            </a>
            <a
              href="https://youtube.com/@mohdasad_05"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-transform transform hover:scale-125 duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* Location */}
          <div className="mt-4 text-gray-700 dark:text-gray-300 flex items-center justify-center md:justify-start">
            <i className="fas fa-map-marker-alt mr-2 text-teal-500"></i>
            Lucknow, Uttar Pradesh, India
          </div>

          {/* View My Work Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 hover:scale-105 transform transition duration-300 shadow-md"
            >
              <i className="fas fa-briefcase mr-2"></i>
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
