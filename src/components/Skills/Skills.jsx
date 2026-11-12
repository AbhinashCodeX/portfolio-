import React from 'react';
import { motion } from 'framer-motion';
import {
  SiDotnet,
  SiPostgresql,
  SiJavascript,
  SiJquery,
  SiPostman,
} from 'react-icons/si';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaDatabase,
  FaCubes,
  FaCode,
  FaServer,
  FaLayerGroup,
  FaExchangeAlt,
} from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const categories = [
  {
    title: 'Backend Engineering',
    skills: [
      { name: 'C#', level: 'Core Language', icon: <TbBrandCSharp /> },
      { name: 'ASP.NET Core Web API', level: 'REST APIs & Microservices', icon: <SiDotnet /> },
      { name: 'ASP.NET Core', level: 'MVC & Middleware Architecture', icon: <SiDotnet /> },
      { name: 'Entity Framework Core', level: 'ORM & Data Modeling', icon: <FaCubes /> },
      { name: 'RESTful Services', level: 'API Design & Integration', icon: <FaServer /> },
    ],
  },
  {
    title: 'Database & Data Access',
    skills: [
      { name: 'MS SQL Server', level: 'T-SQL & Stored Procs', icon: <FaDatabase /> },
      { name: 'PostgreSQL', level: 'Relational & Indexing', icon: <SiPostgresql /> },
      { name: 'Database Design', level: 'Normalization & Schema', icon: <FaLayerGroup /> },
      { name: 'LINQ', level: 'Data Querying', icon: <FaCode /> },
    ],
  },
  {
    title: 'Frontend & UI Development',
    skills: [
      { name: 'HTML5', level: 'Semantic Markup', icon: <FaHtml5 /> },
      { name: 'CSS3', level: 'Responsive & Flex/Grid', icon: <FaCss3Alt /> },
      { name: 'JavaScript (ES6+)', level: 'Dynamic Logic', icon: <SiJavascript /> },
      { name: 'AJAX', level: 'Asynchronous Requests', icon: <FaExchangeAlt /> },
      { name: 'jQuery', level: 'DOM Manipulation', icon: <SiJquery /> },
      { name: 'Bootstrap', level: 'Responsive UI Design', icon: <FaBootstrap /> },
    ],
  },
  {
    title: 'Developer Tools & Workflow',
    skills: [
      { name: 'Visual Studio', level: 'IDE & Profiling', icon: <FaCode /> },
      { name: 'VS Code', level: 'Code Editor', icon: <VscVscode /> },
      { name: 'Git & GitHub', level: 'Version Control', icon: <FaGitAlt /> },
      { name: 'Postman', level: 'API Testing & Docs', icon: <SiPostman /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        {/* Section Header */}
        <div className="section-label">
          <span className="section-label__tag">Technical Expertise</span>
          <h2 className="section-label__title">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="skills__categories">
          {categories.map((cat, idx) => (
            <div className="skills__category" key={idx}>
              <div className="skills__category-header">
                <span className="skills__category-indicator" />
                <h3 className="skills__category-title">{cat.title}</h3>
              </div>

              <div className="skills__grid">
                {cat.skills.map((skill, sIdx) => (
                  <div className="skills__card" key={sIdx}>
                    <div className="skills__card-icon">{skill.icon}</div>
                    <div className="skills__card-info">
                      <h4 className="skills__card-name">{skill.name}</h4>
                      <span className="skills__card-level">{skill.level}</span>
                    </div>
                    <div className="skills__card-glow" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
