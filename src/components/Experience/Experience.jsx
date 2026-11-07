import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    role: '.NET Developer',
    company: 'The Institute of Chartered Accountants of India (ICAI) — Multi-Branch CMS Platform',
    duration: '2025 – Present · 1 Year Experience',
    location: 'India',
    highlights: [
      'Engineered and maintained dynamic ASP.NET Core MVC multi-branch web platforms for ICAI regional councils (CIRC, NIRC, SIRC, EIRC, WIRC).',
      'Developed and scaled a Centralized Content Management System (CMS) enabling unified branch administration, monitoring, and dynamic website configuration.',
      'Built content modules for Announcements, Events, Opportunities, and Background Materials with branch-specific filtering and dynamic data rendering.',
      'Integrated SQL Server with Entity Framework Core, designing normalized schemas, LINQ queries, and high-performance stored procedures.',
      'Built responsive, asynchronous client-side operations utilizing JavaScript, jQuery, AJAX, and Bootstrap 5 for zero-refresh interactions.',
      'Architected reusable layouts, partial views, and components to reliably support multiple high-traffic regional portals.',
    ],
    tags: ['ASP.NET Core MVC', 'C#', 'Entity Framework Core', 'SQL Server', 'LINQ', 'AJAX', 'jQuery', 'Bootstrap 5'],
  },
  {
    type: 'work',
    role: 'Full Stack .NET Engineer',
    company: 'Schedule Management & Activity Booking System',
    duration: '2024 – 2025 · Featured Project',
    location: 'Personal Project / GitHub @AbhinashCodeX',
    highlights: [
      'Architected an end-to-end role-based booking and scheduling application using ASP.NET Core MVC and Entity Framework Core.',
      'Engineered distinct portals for Admin, Coach, and User with secure session handling, authentication, and role authorization.',
      'Implemented hierarchical cascade dropdowns (Country → State → District) using asynchronous jQuery AJAX calls.',
      'Built flexible coach availability scheduling (dates & time slots) and real-time activity booking pipelines with pagination, sorting, and search.',
      'Integrated SweetAlert and dynamic Toast notifications with robust client and server-side model validation.',
    ],
    tags: ['ASP.NET Core MVC', 'C#', 'Entity Framework Core', 'SQL Server', 'AJAX', 'jQuery', 'Bootstrap 5', 'SweetAlert'],
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
      'Developed academic full-stack capstone projects focusing on ASP.NET technologies and relational database architecture.',
    ],
    tags: ['C#', 'OOP', 'SQL Server', 'Data Structures', 'Software Engineering'],
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
              <FaBriefcase className="group-icon" /> Professional Experience
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
