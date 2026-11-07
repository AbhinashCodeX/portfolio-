import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaCode, FaShieldAlt } from 'react-icons/fa';
import photoImg from '../../assets/photo.png';
import './About.css';

const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '8+', label: 'Tech Stack Skills' },
  { value: '100%', label: 'Clean Code Focus' },
];

const highlights = [
  {
    icon: <FaServer />,
    title: 'Backend Engineering',
    desc: 'Specialized in C#, ASP.NET Core Web APIs, dependency injection, and RESTful service design.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Architecture',
    desc: 'Skilled in MS SQL Server and PostgreSQL, crafting normalized schemas, indexing, and EF Core migrations.',
  },
  {
    icon: <FaCode />,
    title: 'Dynamic Web UI',
    desc: 'Creating interactive user interfaces using modern HTML5, CSS3, JavaScript, jQuery, and AJAX.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Enterprise Standards',
    desc: 'Implementing secure JWT authentication, SOLID architecture, error logging, and performance tuning.',
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* Section Header */}
        <div className="section-label">
          <span className="section-label__tag">Who I Am</span>
          <h2 className="section-label__title">
            About <span className="text-accent">Me</span>
          </h2>
        </div>

        <div className="about__grid">
          {/* Left Column: Portrait & Card */}
          <div className="about__portrait-wrapper">
            <div className="about__portrait-card">
              <div className="about__portrait-glow" />
              <img
                src={photoImg}
                alt="Abhinash Panigrahi - .NET Developer"
                className="about__portrait-img"
              />
              <div className="about__badge">
                <span className="about__badge-dot" />
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="about__content">
            <h3 className="about__heading">
              Hi, I'm <span className="highlight">Abhinash Panigrahi</span> — A .NET Developer
              dedicated to building high-performance web systems.
            </h3>

            <p className="about__bio">
              With <strong>1 year of hands-on experience</strong> in enterprise software
              development, I specialize in crafting robust backend architectures with <strong>C#</strong>,{' '}
              <strong>ASP.NET Core</strong>, and database systems like <strong>MS SQL Server</strong> and{' '}
              <strong>PostgreSQL</strong>.
            </p>

            <p className="about__bio">
              On the frontend, I bridge technical capability with smooth user interactions using{' '}
              <strong>HTML5, CSS3, JavaScript, AJAX, jQuery, and Bootstrap</strong>. My engineering
              philosophy emphasizes clean code structure, reliability, and delivering measurable impact.
            </p>

            {/* Quick Stats Row */}
            <div className="about__stats">
              {stats.map((stat, i) => (
                <div className="about__stat-card" key={i}>
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Cards Row */}
        <div className="about__highlights-grid">
          {highlights.map((item, i) => (
            <div className="about__highlight-card" key={i}>
              <div className="about__highlight-icon">{item.icon}</div>
              <h4 className="about__highlight-title">{item.title}</h4>
              <p className="about__highlight-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
