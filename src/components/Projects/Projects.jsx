import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Employee Management System',
    description:
      'Full-stack application built with ASP.NET Core Web API and SQL Server backend, featuring a responsive Bootstrap frontend for comprehensive employee data management, CRUD operations, and role-based access.',
    tags: ['C#', 'ASP.NET Core', 'SQL Server', 'Bootstrap', 'jQuery'],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#dc143c',
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Commerce REST API',
    description:
      'Robust RESTful API powering an e-commerce platform with JWT-based authentication, product catalog management, shopping cart, and order processing workflows backed by PostgreSQL.',
    tags: ['C#', 'ASP.NET Core', 'PostgreSQL', 'JWT Auth'],
    gradient: 'linear-gradient(135deg, #0f0f23 0%, #1a0a2e 50%, #2d1b69 100%)',
    accent: '#dc143c',
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Tracker Dashboard',
    description:
      'Real-time task management dashboard with AJAX-powered live updates, drag-and-drop functionality, and a fully responsive design for seamless productivity across all devices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'jQuery', 'Bootstrap'],
    gradient: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #1d3557 100%)',
    accent: '#dc143c',
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'Dynamic and interactive portfolio built with React, featuring Three.js particle effects, smooth Framer Motion animations, and a modern dark-themed design showcasing projects and skills.',
    tags: ['React', 'Three.js', 'CSS3', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #1a0000 0%, #2d0a0a 50%, #4a1525 100%)',
    accent: '#dc143c',
    github: '#',
    demo: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A selection of projects that showcase my skills in .NET development,
            API design, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              variants={cardVariants}
            >
              {/* Image / Visual Placeholder */}
              <div
                className="project-image"
                style={{ background: project.gradient }}
              >
                <div className="code-pattern">
                  <span className="code-line">
                    <span className="ck">public</span>{' '}
                    <span className="ct">class</span>{' '}
                    <span className="cn">Program</span>
                  </span>
                  <span className="code-line">{'{'}</span>
                  <span className="code-line">
                    {'  '}
                    <span className="ck">static</span>{' '}
                    <span className="ct">void</span>{' '}
                    <span className="cf">Main</span>()
                  </span>
                  <span className="code-line">{'  {'}</span>
                  <span className="code-line">
                    {'    '}Console.<span className="cf">WriteLine</span>
                    (<span className="cs">"Hello!"</span>);
                  </span>
                  <span className="code-line">{'  }'}</span>
                  <span className="code-line">{'}'}</span>
                </div>
                <div className="project-image-overlay" />
                {/* Hover Actions */}
                <div className="project-actions">
                  <a
                    href={project.github}
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub /> <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="project-btn project-btn--demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
