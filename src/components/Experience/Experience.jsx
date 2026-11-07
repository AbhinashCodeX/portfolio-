import React from 'react';
import {
  FaBriefcase,
  FaGraduationCap,
  FaCheckCircle,
  FaAward,
  FaCertificate,
} from 'react-icons/fa';
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
  {
    type: 'work',
    role: 'Backend Engineering Intern',
    company: 'SeqSpace Pvt Ltd',
    duration: 'May 2024 – July 2024',
    location: 'Odisha, India',
    highlights: [
      'Developed secure REST APIs and microservice endpoints, seamlessly integrating them with frontend web interfaces.',
      'Designed and optimized relational MySQL database queries and schemas for enhanced throughput and scalability.',
      'Deployed containerized backend services on AWS EC2 with robust performance and reliability.',
      'Prepared comprehensive architectural reports on API endpoints, data pipelines, and deployment procedures.',
    ],
    tags: ['REST APIs', 'Java Spring Boot', 'MySQL', 'AWS EC2', 'Web Architecture'],
  },
  {
    type: 'work',
    role: 'Technical Support Specialist',
    company: 'Tech Mahindra',
    duration: 'July 2025 – Dec 2025',
    location: 'Bhubaneswar, Odisha',
    highlights: [
      'Handled technical queries, troubleshooting hardware and software anomalies across enterprise client devices.',
      'Delivered rapid resolutions and diagnostics, maintaining high customer satisfaction and SLA standards.',
    ],
    tags: ['Technical Support', 'Troubleshooting', 'System Diagnostics'],
  },
];

const education = [
  {
    type: 'education',
    degree: 'Masters in Computer Application (MCA)',
    institution: 'Sri Sri University, Cuttack',
    duration: '2023 – 2025',
    isGoldMedalist: true,
    highlights: [
      'Honored as Gold Medalist for achieving top academic ranking and excellence throughout the MCA program.',
      'Rigorous specialization in Object-Oriented Software Engineering, enterprise .NET & Java architectures, advanced database normalization, and full-stack web applications.',
      'Engineered production-grade web systems and full-lifecycle academic capstones.',
    ],
    tags: ['MCA (Gold Medalist 🏅)', 'C# / .NET', 'Software Architecture', 'SQL Server & Postgres', 'Web Engineering'],
  },
  {
    type: 'education',
    degree: 'Bachelor of Science (B.Sc) in Chemistry Honours',
    institution: 'Deb Ray College, Nayapalli, Bhubaneswar',
    duration: '2020 – 2023',
    highlights: [
      'Developed deep analytical problem-solving skills, quantitative mathematical modeling, and empirical research methodologies.',
    ],
    tags: ['B.Sc Honours', 'Analytical Modeling', 'Quantitative Methods'],
  },
  {
    type: 'education',
    degree: 'Higher Secondary (12th)',
    institution: 'St. Xavier International School, Patia, Bhubaneswar',
    duration: '2018 – 2020',
    highlights: [
      'Comprehensive study in Science, Advanced Mathematics, and Computer Science foundations.',
    ],
    tags: ['CBSE', 'Mathematics', 'Computer Science'],
  },
  {
    type: 'education',
    degree: 'Secondary School (10th)',
    institution: 'St. Xavier International School, Patia, Bhubaneswar',
    duration: '2017 – 2018',
    highlights: [
      'Core academic curriculum with foundational scientific and computational coursework.',
    ],
    tags: ['CBSE', 'Academics'],
  },
];

const certifications = [
  {
    title: 'SeqSpace Pvt Ltd Certificate on Web Scraping & Web Crawling',
    issuer: 'SeqSpace Pvt Ltd',
    date: '2024',
    badge: 'Certified',
  },
  {
    title: 'Internship in Front-End Web Development',
    issuer: 'IBM',
    date: '2024',
    badge: 'IBM Verified',
  },
  {
    title: 'Prompt Engineering Winter Certification',
    issuer: 'IBM',
    date: '2024',
    badge: 'IBM AI',
  },
  {
    title: 'Software Development Internship Certification',
    issuer: 'Bharat Intern',
    date: '2024',
    badge: 'Verified',
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
              <FaGraduationCap className="group-icon" /> Education & Academic Honors
            </h3>

            {education.map((edu, i) => (
              <div className="experience__item" key={i}>
                <div className={`experience__dot ${edu.isGoldMedalist ? 'gold-dot' : 'edu-dot'}`}>
                  {edu.isGoldMedalist ? <FaAward /> : <FaGraduationCap />}
                  <span className="experience__dot-pulse" />
                </div>

                <div className={`experience__card ${edu.isGoldMedalist ? 'gold-medal-card' : ''}`}>
                  <div className="experience__card-top">
                    <div>
                      <div className="experience__role-row">
                        <h4 className="experience__card-role">{edu.degree}</h4>
                        {edu.isGoldMedalist && (
                          <span className="gold-medal-badge">
                            <FaAward /> GOLD MEDALIST
                          </span>
                        )}
                      </div>
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
                      <span className={`experience__tag ${t.includes('Gold') ? 'gold-tag' : ''}`} key={tIdx}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Group */}
          <div className="experience__section-group">
            <h3 className="experience__group-title">
              <FaCertificate className="group-icon" /> Professional Certifications
            </h3>

            <div className="certifications-grid">
              {certifications.map((cert, cIdx) => (
                <div className="cert-card" key={cIdx}>
                  <div className="cert-header">
                    <FaCertificate className="cert-icon" />
                    <span className="cert-badge">{cert.badge}</span>
                  </div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
