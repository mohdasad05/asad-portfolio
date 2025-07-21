// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: 'WeSalvator - Animal Rescue Platform',
    category: 'Web',
    description: `A web-based platform developed using Python/Django to manage and streamline animal rescue operations.
    It includes features like volunteer coordination, case tracking, geolocation-based assistance, and image capture for rescued animals.`,
    image: '/images/projects/wesalvator.jpg',
    live: 'https://wesalvator.com',
    code: '',
  },
  {
    title: 'Slack Task Bot',
    category: 'Python',
    description: `A Slack bot that automates task management by sending hourly reminders to team members. Built using Python and Slack API, it helps improve productivity by ensuring tasks are completed on time. The bot can also track progress, send notifications, and integrate with project management tools.`,
    image: 'images/projects/slack-bot.jpg',
    code: 'https://github.com/mohdasad05/Task-Updates',
  },
  {
    title: 'Image Classification',
    category: 'AI-ML',
    description: `A deep learning-based system that classifies images into predefined categories using Convolutional Neural Networks (CNNs). Trained on a dataset of images, the model can recognize objects, animals, or handwritten text.`,
    image: 'images/projects/image-classification.jpg',
    code: 'https://github.com/mohdasad05/image-classification',
  },
  {
    title: 'Handwritten Digit Recognition',
    category: 'AI-ML',
    description: `An AI-powered application that identifies handwritten digits from user inputs. Built using TensorFlow and the MNIST dataset, it employs deep learning techniques to achieve high accuracy in digit recognition.`,
    image: 'images/projects/digit-recognition.jpg',
    code: 'https://github.com/mohdasad05/handwritten-digit-recognition',
  },
  {
    title: 'Movie Recommendation System',
    category: 'AI-ML',
    description: `A recommendation engine that suggests movies based on user preferences. Using collaborative filtering and content-based techniques, it analyzes user behavior and movie metadata to provide personalized recommendations.`,
    image: 'images/projects/movie-recommendation.jpg',
    code: 'https://github.com/mohdasad05/movie-recommendation-system',
  },
  {
    title: 'Iris Classification',
    category: 'AI-ML',
    description: `A machine learning model trained on the famous Iris dataset to classify flowers into different species. It utilizes algorithms like K-Nearest Neighbors (KNN) or Support Vector Machines (SVM) for accurate classification.`,
    image: 'images/projects/iris-classification.jpg',
    code: 'https://github.com/mohdasad05/iris-classification',
  },
  {
    title: 'Random Password Generator',
    category: 'Python',
    description: `A Python application that generates secure random passwords with customization optionsA Python-based application that generates strong and secure random passwords. It allows users to customize password length and include special characters, numbers, and uppercase letters for enhanced security.`,
    image: 'images/projects/password-generator.jpg',
    code: 'https://github.com/mohdasad05/Password-Generator',
  },
  {
    title: 'Calculator',
    category: 'Python',
    description: `A simple yet efficient calculator built using Python. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division with a user-friendly interface.`,
    image: 'images/projects/calculator.jpg',
    code: 'https://github.com/mohdasad05/Calculator',
  },
  {
    title: 'Rock-Paper-Scissors Game',
    category: 'Python',
    description: `A fun interactive game that lets users play Rock-Paper-Scissors against the computer. The program uses randomization and basic logic to determine the winner based on the rules of the classic game.`,
    image: 'images/projects/rock-paper-scissors.jpg',
    code: 'https://github.com/mohdasad05/Rock-Paper-Scissors-Game',
  },
  {
    title: 'Live Language Translation',
    category: 'Web',
    description: `A real-time language translation web app that uses APIs to convert text from one language to another. It provides instant translations with a sleek UI for improved user experience.`,
    image: 'images/projects/language-translation.jpg',
    code: 'https://github.com/mohdasad05/Live-Language-Translation',
  },
  {
    title: 'Basic Text Editor',
    category: 'Web',
    description: `A simple web-based text editor with features like text formatting, saving files, and undo/redo actions. It provides a lightweight alternative to traditional text editing software.`,
    image: 'images/projects/text-editor.jpg',
    code: 'https://github.com/mohdasad05/basic-text-editor',
  },
  {
    title: 'Expense Tracker',
    category: 'Web',
    description: `A web application that helps users manage their expenses by tracking income and expenditures. It includes a dynamic dashboard with visual representations of spending patterns.`,
    image: 'images/projects/expense-tracker.jpg',
    code: 'https://github.com/mohdasad05/expense-tracker',
  },
  {
    title: 'Fantasy Cricket Game',
    category: 'Python',
    description: `A Python-based cricket simulation game that allows users to create fantasy teams, predict match outcomes, and score points based on player performances. It enhances user engagement with cricket analytics.`,
    image: 'images/projects/fantasy-cricket.jpg',
    code: '',
  },
  {
    title: 'Voice Assistant',
    category: 'AI-ML',
    description: `A voice-controlled AI assistant that performs tasks like opening applications, fetching online information, setting reminders, and answering user queries using speech recognition and text-to-speech synthesis.`,
    image: 'images/projects/voice-assistant.jpg',
    code: '',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Python', 'AI-ML', 'Web'];
  const filteredProjects = activeCategory === 'All'
    ? projectData
    : projectData.filter(p => p.category === activeCategory);

  return (
    <section className="scroll-mt-20 py-12 bg-white dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">Featured Projects</h2>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ease-in-out
                ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-teal-100 dark:hover:bg-gray-600 hover:text-teal-700'
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transform hover:scale-[1.05] hover:-translate-y-2 hover:bg-teal-50 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white hover:text-teal-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-700 dark:text-white text-xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded mb-4 cursor-zoom-in"
                onClick={() => window.open(selectedProject.image, '_blank')}
              />
              <h3 className="text-2xl font-bold mb-2 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
                {selectedProject.description}
              </p>
              <div className="flex gap-4">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded transition"
                  >
                    <ExternalLink size={18} /> View Live
                  </a>
                )}
                {selectedProject.code && (
                  <a
                    href={selectedProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded transition"
                  >
                    <Github size={18} /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;