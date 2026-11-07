import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    role: '.NET Developer',
    company: 'Enterprise Software Solutions',
    duration: '2025 – Present · 1 Year',
    location: 'India',
    highlights: [
      'Architected and deployed enterprise RESTful Web APIs utilizing C# and ASP.NET Core.',
      'Designed normalized schemas, stored procedures, and LINQ queries in MS SQL Server and PostgreSQL.',
      'Developed dynamic, asynchronous user interfaces using AJAX, jQuery, Bootstrap 5, HTML5, and CSS3.',
      'Implemented secure JWT-based token authentication, authorization middleware, and exception handling filters.',
    ],
    tags: ['C#', 'ASP.NET Core', 'MS SQL Server', 'PostgreSQL', 'AJAX', 'jQuery', 'Bootstrap'],
  },
];

const education = [
  {
    type: 'education',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science',
    institution: 'Engineering University',
    duration: '2020 – 2024',
    highlights: [
      'Graduated with strong foundations in Object-Oriented Programming (OOP), Data Structures & Algorithms.',
      'Completed academic capstone projects focusing on full-stack web applications and relational database design.',
    ],
    tags: ['C#', 'OOP', 'RDBMS', 'Data Structures', 'Software Engineering'],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        {/* Section Header */}
        <div className="section-label">
          <span className="section-label__tag">My Career Journey</span>
          <h2 className="section-label__title">
            Experience & <span className="text-accent">Education</span>
          </h2>
        </div>

        {/* Timeline Section */}
        <div className="experience__timeline">
          <div className="experience__timeline-line" />

          {/* Work Experience */}
          <div className="experience__section-group">
            <h3 className="experience__group-title">
              <FaBriefcase className="group-icon" /> Work Experience
            </h3>

            {experiences.map((exp, i) => (
              <div className="experience__item" key={i}>
                <div className="experience__dot">
                  <FaBriefcase />
                  <span className="experience__dot-pulse" />
                </div>

                <div className="experience__card">
                  <div className="experience__card-top">
                    <div>
                      <h4 className="experience__card-role">{exp.role}</h4>
                      <h5 className="experience__card-company">{exp.company}</h5>
                    </div>
                    <span className="experience__card-duration">{exp.duration}</span>
                  </div>

                  <ul className="experience__card-list">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx}>
                        <FaCheckCircle className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="experience__card-tags">
                    {exp.tags.map((t, tIdx) => (
                      <span className="experience__tag" key={tIdx}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="experience__section-group">
            <h3 className="experience__group-title">
              <FaGraduationCap className="group-icon" /> Education
            </h3>

            {education.map((edu, i) => (
              <div className="experience__item" key={i}>
                <div className="experience__dot edu-dot">
                  <FaGraduationCap />
                  <span className="experience__dot-pulse" />
                </div>

                <div className="experience__card">
                  <div className="experience__card-top">
                    <div>
                      <h4 className="experience__card-role">{edu.degree}</h4>
                      <h5 className="experience__card-company">{edu.institution}</h5>
                    </div>
                    <span className="experience__card-duration">{edu.duration}</span>
                  </div>

                  <ul className="experience__card-list">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx}>
                        <FaCheckCircle className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="experience__card-tags">
                    {edu.tags.map((t, tIdx) => (
                      <span className="experience__tag" key={tIdx}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
