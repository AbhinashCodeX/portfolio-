/* ═══════════════════════════════════════════════════════════════
   Hero.jsx
   Full-screen hero section with ParticleField background
   Includes Reveal / Back to dots button per Step 7 of 3-Step Guide
   ═══════════════════════════════════════════════════════════════ */
import React, { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaMagic, FaUndo } from 'react-icons/fa';
import ParticleField from '../ParticleField/ParticleField';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  const handleToggleReveal = () => {
    setRevealed((prev) => !prev);
  };

  return (
    <section className="hero" id="hero">
      {/* WebGL 3D Dot Sculpture background */}
      <ParticleField
        canvasRef={canvasRef}
        revealed={revealed}
        onToggleReveal={handleToggleReveal}
      />

      {/* Floating Reveal Toggle Button (Step 7 requirement) */}
      <div className="hero__reveal-container">
        <button
          className={`hero__reveal-btn ${revealed ? 'is-active' : ''}`}
          onClick={handleToggleReveal}
          title={revealed ? 'Back to dots' : 'Reveal real portrait'}
        >
          {revealed ? (
            <>
              <FaUndo className="btn-icon spin" />
              <span>Back to dots</span>
            </>
          ) : (
            <>
              <FaMagic className="btn-icon pulse" />
              <span>Reveal</span>
            </>
          )}
        </button>
      </div>

      {/* Overlay content */}
      <div className={`hero__content ${revealed ? 'content-dimmed' : ''}`}>
        {/* Greeting */}
        <p className="hero__greeting">Hello, I'm</p>

        {/* Name */}
        <h1 className="hero__name">ABHINASH PANIGRAHI</h1>

        {/* Typing roles */}
        <div className="hero__roles">
          <span className="hero__roles-prefix">{'< '}</span>
          <TypeAnimation
            sequence={[
              '.NET Developer',
              2000,
              'ASP.NET Core Specialist',
              2000,
              'MS SQL & Postgres Architect',
              2000,
              'Full Stack Engineer',
              2000,
            ]}
            speed={45}
            deletionSpeed={55}
            repeat={Infinity}
            cursor={true}
            wrapper="span"
          />
          <span className="hero__roles-prefix">{' />'}</span>
        </div>

        {/* Tagline */}
        <p className="hero__tagline">
          1 year of hands-on experience crafting high-performance, scalable enterprise
          applications with C#, ASP.NET Core, SQL Server, and modern web architectures.
        </p>

        {/* CTA Buttons */}
        <div className="hero__cta">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View My Work
          </a>
          <button
            onClick={handleToggleReveal}
            className="hero__btn hero__btn--reveal"
          >
            {revealed ? 'Back to dots' : 'Reveal Portrait'}
          </button>
          <a
            href="#contact"
            className="hero__btn hero__btn--outline"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="hero__socials">
          <a
            href="https://github.com/AbhinashCodeX"
            className="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            className="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:abhinashpanigrahi@example.com"
            className="hero__social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">SCROLL</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
