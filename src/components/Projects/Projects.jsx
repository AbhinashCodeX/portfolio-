import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { VscCode, VscFileCode } from 'react-icons/vsc';
import { SiJavascript } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import './Projects.css';

const GITHUB_URL = 'https://github.com/AbhinashCodeX';

const projects = [
  {
    title: 'ICAI Multi-Branch Platform & CMS',
    badge: 'Enterprise Professional Project',
    description:
      'A dynamic multi-branch web platform developed for The Institute of Chartered Accountants of India (ICAI). Powers regional council branch websites (CIRC, NIRC, SIRC, EIRC, WIRC) via a centralized CMS for branch-level administration, dynamic announcements, events, opportunities, and real-time monitoring.',
    tags: [
      'ASP.NET Core MVC',
      'C#',
      'Entity Framework Core',
      'SQL Server',
      'jQuery',
      'AJAX',
      'Bootstrap 5',
    ],
    fileName: 'BranchContentController.cs',
    lang: 'C# / ASP.NET Core',
    github: GITHUB_URL,
    demo: GITHUB_URL,
    codeLines: [
      { num: 1, content: <><span className="cd-attr">[Authorize(Roles = </span><span className="cd-str">"BranchAdmin, SuperAdmin"</span><span className="cd-attr">)]</span></> },
      { num: 2, content: <><span className="cd-kw">public class</span> <span className="cd-class">BranchContentController</span> : <span className="cd-type">Controller</span> {'{'}</> },
      { num: 3, content: <>&nbsp;&nbsp;<span className="cd-kw">private readonly</span> <span className="cd-type">IIcaiBranchService</span> _branchService;</> },
      { num: 4, content: <>&nbsp;&nbsp;<span className="cd-attr">[HttpGet]</span></> },
      { num: 5, content: <>&nbsp;&nbsp;<span className="cd-kw">public async</span> <span className="cd-type">Task&lt;IActionResult&gt;</span> <span className="cd-func">GetBranchPortal</span>(<span className="cd-type">string</span> branchCode) {'{'}</> },
      { num: 6, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">var</span> content = <span className="cd-kw">await</span> _branchService.<span className="cd-func">GetBranchDataAsync</span>(branchCode);</> },
      { num: 7, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">return</span> <span className="cd-func">View</span>(<span className="cd-str">"RegionalPortal"</span>, content);</> },
      { num: 8, content: <>&nbsp;&nbsp;{'}'}</> },
      { num: 9, content: <>{'}'}</> },
    ],
  },
  {
    title: 'Schedule Management & Booking System',
    badge: 'Featured Full-Stack App',
    description:
      'A modern role-based scheduling and activity booking system built using ASP.NET Core MVC. Features distinct Admin, Coach, and User portals, Country → State → District cascade bindings via AJAX, coach availability slot scheduling, SweetAlert notifications, and real-time booking history.',
    tags: [
      'ASP.NET Core MVC',
      'C#',
      'SQL Server',
      'EF Core',
      'jQuery AJAX',
      'Bootstrap 5',
      'SweetAlert',
    ],
    fileName: 'BookingController.cs',
    lang: 'C# / ASP.NET Core',
    github: GITHUB_URL,
    demo: GITHUB_URL,
    codeLines: [
      { num: 1, content: <><span className="cd-attr">[HttpPost, ValidateAntiForgeryToken]</span></> },
      { num: 2, content: <><span className="cd-kw">public async</span> <span className="cd-type">Task&lt;IActionResult&gt;</span> <span className="cd-func">BookActivity</span>(<span className="cd-type">BookingViewModel</span> model) {'{'}</> },
      { num: 3, content: <>&nbsp;&nbsp;<span className="cd-kw">if</span> (!ModelState.IsValid) <span className="cd-kw">return</span> <span className="cd-func">Json</span>(<span className="cd-kw">new</span> {'{'} success = <span className="cd-kw">false</span> {'}'});</> },
      { num: 4, content: <>&nbsp;&nbsp;<span className="cd-kw">await using var</span> tx = <span className="cd-kw">await</span> _context.Database.<span className="cd-func">BeginTransactionAsync</span>();</> },
      { num: 5, content: <>&nbsp;&nbsp;<span className="cd-kw">var</span> slot = <span className="cd-kw">await</span> _context.CoachAvailability.<span className="cd-func">FindAsync</span>(model.SlotId);</> },
      { num: 6, content: <>&nbsp;&nbsp;slot.IsBooked = <span className="cd-kw">true</span>;</> },
      { num: 7, content: <>&nbsp;&nbsp;<span className="cd-kw">await</span> _context.<span className="cd-func">SaveChangesAsync</span>();</> },
      { num: 8, content: <>&nbsp;&nbsp;<span className="cd-kw">await</span> tx.<span className="cd-func">CommitAsync</span>();</> },
      { num: 9, content: <>&nbsp;&nbsp;<span className="cd-kw">return</span> <span className="cd-func">Json</span>(<span className="cd-kw">new</span> {'{'} success = <span className="cd-kw">true</span>, message = <span className="cd-str">"Booked!"</span> {'}'});</> },
      { num: 10, content: <>{'}'}</> },
    ],
  },
  {
    title: 'E-Commerce REST API',
    badge: 'Backend Microservice',
    description:
      'High-throughput RESTful API powering an e-commerce platform with JWT-based authentication, product catalog caching, transactional cart checkout, and relational order processing backed by PostgreSQL.',
    tags: ['C#', 'ASP.NET Core', 'PostgreSQL', 'Entity Framework', 'JWT Auth'],
    fileName: 'OrderService.cs',
    lang: 'C# / Web API',
    github: GITHUB_URL,
    demo: GITHUB_URL,
    codeLines: [
      { num: 1, content: <><span className="cd-kw">public class</span> <span className="cd-class">OrderService</span> : <span className="cd-type">IOrderService</span> {'{'}</> },
      { num: 2, content: <>&nbsp;&nbsp;<span className="cd-kw">public async</span> <span className="cd-type">Task&lt;OrderResult&gt;</span> <span className="cd-func">CheckoutAsync</span>(<span className="cd-type">Guid</span> userId) {'{'}</> },
      { num: 3, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">await using var</span> tx = <span className="cd-kw">await</span> _db.Database.<span className="cd-func">BeginTransactionAsync</span>();</> },
      { num: 4, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">var</span> cart = <span className="cd-kw">await</span> _cartRepo.<span className="cd-func">GetByUserIdAsync</span>(userId);</> },
      { num: 5, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">var</span> order = <span className="cd-type">Order</span>.<span className="cd-func">CreateFromCart</span>(cart);</> },
      { num: 6, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">await</span> _db.Orders.<span className="cd-func">AddAsync</span>(order);</> },
      { num: 7, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">await</span> _db.<span className="cd-func">SaveChangesAsync</span>();</> },
      { num: 8, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">return</span> <span className="cd-type">OrderResult</span>.<span className="cd-func">Success</span>(order.Id);</> },
      { num: 9, content: <>&nbsp;&nbsp;{'}'}</> },
      { num: 10, content: <>{'}'}</> },
    ],
  },
  {
    title: 'Dynamic WebGL Portfolio Hero',
    badge: 'Interactive WebGL',
    description:
      'Interactive 3D particle sculpture portfolio hero built with Three.js and React. Implements 78,000 blue-noise dots carved from voxel silhouettes, real-time mouse tracking, and smooth 3.6s sweep reveal.',
    tags: ['React', 'Three.js', 'C# Voxel Carving', 'WebGL', 'Framer Motion'],
    fileName: 'SculptureEngine.cs',
    lang: 'C# / Algorithms',
    github: GITHUB_URL,
    demo: GITHUB_URL,
    codeLines: [
      { num: 1, content: <><span className="cd-kw">public record</span> <span className="cd-class">DotParticle</span>(<span className="cd-type">Vector3</span> Pos, <span className="cd-type">Vector3</span> Normal, <span className="cd-type">float</span> Brightness);</> },
      { num: 2, content: <><span className="cd-kw">public class</span> <span className="cd-class">SculptureEngine</span> {'{'}</> },
      { num: 3, content: <>&nbsp;&nbsp;<span className="cd-kw">public</span> <span className="cd-type">ReadOnlyMemory&lt;DotParticle&gt;</span> <span className="cd-func">BuildMesh</span>(<span className="cd-type">VoxelGrid</span> grid) {'{'}</> },
      { num: 4, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">var</span> surface = grid.Voxels.<span className="cd-func">Where</span>(v =&gt; v.IsSurface);</> },
      { num: 5, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cd-kw">return</span> <span className="cd-func">SamplePoissonDisk</span>(surface, count: <span className="cd-num">78000</span>);</> },
      { num: 6, content: <>&nbsp;&nbsp;{'}'}</> },
      { num: 7, content: <>{'}'}</> },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="section-label">
          <span className="section-label__tag">Portfolio Showcase</span>
          <h2 className="section-label__title">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Enterprise .NET backend systems, regional CMS platforms, and role-based web applications from my GitHub{' '}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-gh-link"
            >
              @AbhinashCodeX
            </a>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* Aesthetic IDE Window Header */}
              <div className="project-ide">
                <div className="project-ide__topbar">
                  <div className="project-ide__dots">
                    <span className="dot dot--red" />
                    <span className="dot dot--yellow" />
                    <span className="dot dot--green" />
                  </div>
                  <div className="project-ide__tab">
                    <VscFileCode className="tab-icon" />
                    <span className="tab-name">{project.fileName}</span>
                  </div>
                  <span className="project-ide__badge">{project.lang}</span>
                </div>

                {/* Aesthetic Code Glimpse */}
                <div className="project-ide__editor">
                  {project.codeLines.map((line, lIdx) => (
                    <div className="ide-line" key={lIdx}>
                      <span className="ide-num">{line.num}</span>
                      <span className="ide-code">{line.content}</span>
                    </div>
                  ))}
                </div>

                {/* Hover overlay actions */}
                <div className="project-actions">
                  <a
                    href={project.github}
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> <span>View on GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="project-btn project-btn--demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div className="project-body__header">
                  <div>
                    {project.badge && (
                      <span className="project-type-badge">{project.badge}</span>
                    )}
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-gh-icon"
                    title="View GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span className="project-tag" key={tIdx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout Banner */}
        <div className="projects-callout">
          <div className="projects-callout__content">
            <FaCode className="callout-icon" />
            <div>
              <h4 className="callout-title">Explore more repositories & codebases on GitHub</h4>
              <p className="callout-subtitle">
                Check out active repositories, commits, and backend architectures on{' '}
                <strong>github.com/AbhinashCodeX</strong>
              </p>
            </div>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="callout-btn"
          >
            <FaGithub /> <span>Visit @AbhinashCodeX</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
