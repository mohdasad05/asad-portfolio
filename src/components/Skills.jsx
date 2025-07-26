// src/components/Skills.jsx
import React, { useEffect, useState } from 'react';
import {
  FaPython, FaReact, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaCode,
} from 'react-icons/fa';
import {
  SiDjango, SiPostgresql, SiFastapi, SiTensorflow, SiJupyter, SiTailwindcss, SiFramer, SiRedis, SiMysql, SiSonarqube, SiJsonwebtokens,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const pill =
  'flex items-center gap-2 px-4 py-2 mr-4 rounded-full bg-white dark:bg-gray-900 shadow text-gray-800 dark:text-gray-100 text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-teal-500 hover:text-white dark:hover:text-white';

const Row = ({ items, reverse = false, speed = 'normal' }) => {
  const anim =
    reverse
      ? speed === 'fast'
        ? 'animate-marquee-reverse-fast'
        : 'animate-marquee-reverse'
      : speed === 'fast'
        ? 'animate-marqueeFast'
        : 'animate-marquee';

  const list = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full group">
      <div className={`flex whitespace-nowrap ${anim} group-hover:[animation-play-state:paused]`}>
        {list.map((item, i) => (
          <span key={i} className={pill}>
            <span className="text-xl">
              {item.icon || <FaCode />}
            </span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const row1 = [
    { label: 'Python', icon: <FaPython /> },
    { label: 'C' },
    { label: 'JavaScript', icon: <FaJsSquare /> },
    { label: 'HTML', icon: <FaHtml5 /> },
    { label: 'CSS', icon: <FaCss3Alt /> },
    { label: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { label: 'VS Code', icon: <VscCode /> },
  ];

  const row2 = [
    { label: 'Django', icon: <SiDjango /> },
    { label: 'DRF', icon: <SiDjango /> },
    { label: 'FastAPI', icon: <SiFastapi /> },
    { label: 'ReactJS', icon: <FaReact /> },
    { label: 'LeafletJS' },
    { label: 'Framer Motion', icon: <SiFramer /> },
    { label: 'GitHub', icon: <FaGitAlt /> },
  ];

  const row3 = [
    { label: 'PostgreSQL', icon: <SiPostgresql /> },
    { label: 'MySQL', icon: <SiMysql /> },
    { label: 'DBMS' },
    { label: 'Redis', icon: <SiRedis /> },
    { label: 'Docker', icon: <FaDocker /> },
    { label: '.env Configs' },
    { label: 'Microservices' },
  ];

  const row4 = [
    { label: 'JWT Auth', icon: <SiJsonwebtokens /> },
    { label: 'REST APIs' },
    { label: 'WebSockets' },
    { label: 'Django Channels' },
    { label: 'Postman' },
    { label: 'pytest', icon: <FaPython /> },
    { label: 'Gitea' },
  ];

  const row5 = [
    { label: 'Data Science' },
    { label: 'Machine Learning' },
    { label: 'Pandas' },
    { label: 'NumPy' },
    { label: 'Matplotlib' },
    { label: 'Scikit-learn' },
    { label: 'Streamlit' },
  ];

  const row6 = [
    { label: 'TensorFlow', icon: <SiTensorflow /> },
    { label: 'Jupyter Notebook', icon: <SiJupyter /> },
    { label: 'Tableau' },
    { label: 'Git', icon: <FaGitAlt /> },
    { label: 'SonarQube', icon: <SiSonarqube /> },
    { label: 'Static Code Analysis' },
    { label: 'Clean Code Practices' },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white group duration-300">
          <span className="relative inline-block">
            Skills & Expertise
            <span className="absolute left-0 -bottom-2 h-1 w-0 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h2>

        <div className="space-y-6">
          {isMobile ? (
            <>
              <Row items={row1.slice(0, 3)} reverse={false} speed="normal" />
              <Row items={row1.slice(3)} reverse={true} speed="fast" />
              <Row items={row2.slice(0, 3)} reverse={false} speed="normal" />
              <Row items={row2.slice(3)} reverse={true} speed="fast" />
              <Row items={row3.slice(0, 3)} reverse={false} speed="normal" />
              <Row items={row3.slice(3)} reverse={true} speed="fast" />
              <Row items={row4.slice(0, 3)} reverse={false} speed="normal" />
              <Row items={row4.slice(3)} reverse={true} speed="fast" />
              <Row items={row5} reverse={false} speed="normal" />
              <Row items={row6} reverse={true} speed="fast" />
            </>
          ) : (
            <>
              <Row items={row1} reverse={false} speed="normal" />
              <Row items={row2} reverse={true} speed="fast" />
              <Row items={row3} reverse={false} speed="normal" />
              <Row items={row4} reverse={true} speed="fast" />
              <Row items={row5} reverse={false} speed="normal" />
              <Row items={row6} reverse={true} speed="fast" />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
