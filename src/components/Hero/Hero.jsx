/* ═══════════════════════════════════════════════════════════════
   Hero.jsx
   Full-screen hero section with ParticleField background
   Includes Reveal / Back to dots button per Step 7 of 3-Step Guide
   ═══════════════════════════════════════════════════════════════ */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMagic,
  FaUndo,
  FaDownload,
  FaBriefcase,
  FaPaperPlane,
} from 'react-icons/fa';
import ParticleField from '../ParticleField/ParticleField';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const autoRevealTimerRef = useRef(null);
  const hasUserInteracted = useRef(false);

  // Auto-reveal after 5 seconds
  useEffect(() => {
    autoRevealTimerRef.current = setTimeout(() => {
      if (!hasUserInteracted.current) {
        setRevealed(true);
      }
    }, 5000);

    return () => {
      if (autoRevealTimerRef.current) {
        clearTimeout(autoRevealTimerRef.current);
      }
    };
  }, []);

  const handleDotsLoaded = useCallback(() => {
    // If user hasn't clicked anything yet, reset timer to exactly 5s from when dots finish assembling
    if (!hasUserInteracted.current) {
      if (autoRevealTimerRef.current) {
        clearTimeout(autoRevealTimerRef.current);
      }
      autoRevealTimerRef.current = setTimeout(() => {
        if (!hasUserInteracted.current) {
          setRevealed(true);
        }
      }, 5000);
    }
  }, []);

  const handleToggleReveal = () => {
    hasUserInteracted.current = true;
    if (autoRevealTimerRef.current) {
      clearTimeout(autoRevealTimerRef.current);
      autoRevealTimerRef.current = null;
    }
    setRevealed((prev) => !prev);
  };

  return (
    <section className="hero" id="hero">
      {/* WebGL 3D Dot Sculpture background */}
      <ParticleField
        canvasRef={canvasRef}
        revealed={revealed}
        onToggleReveal={handleToggleReveal}
        onLoaded={handleDotsLoaded}
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
              <span>Reveal Portrait</span>
            </>
          )}
        </button>
      </div>

      {/* Overlay content with protective contrast panel */}
      <div className={`hero__content ${revealed ? 'content-dimmed' : ''}`}>
        {/* Top Distinction Pill */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>.NET Full Stack Engineer · MCA Gold Medalist</span>
        </div>

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

        {/* Glassmorphic Protective Panel for Tagline and CTAs */}
        <div className="hero__panel">
          <p className="hero__tagline">
            1 year of hands-on experience crafting high-performance, scalable enterprise
            applications with <strong>C#</strong>, <strong>ASP.NET Core</strong>, <strong>SQL Server</strong>, and <strong>modern web architectures</strong>.
          </p>

          {/* CTA Buttons Row */}
          <div className="hero__cta">
            <a href="#projects" className="hero__btn hero__btn--primary">
              <FaBriefcase className="btn-icon" />
              <span>View My Work</span>
            </a>

            {/* Dedicated CV / Resume Download Box */}
            <a
              href="./Abhinash_Panigrahi_Resume.pdf"
              download="Abhinash_Panigrahi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--resume"
              title="Download Latest Resume"
            >
              <FaDownload className="btn-icon download-bounce" />
              <span>Download CV</span>
            </a>

            <button
              onClick={handleToggleReveal}
              className="hero__btn hero__btn--reveal"
              title="Toggle 3D Sculpture & Portrait"
            >
              {revealed ? (
                <>
                  <FaUndo className="btn-icon spin" />
                  <span>Back to dots</span>
                </>
              ) : (
                <>
                  <FaMagic className="btn-icon pulse" />
                  <span>Reveal Portrait</span>
                </>
              )}
            </button>

            <a href="#contact" className="hero__btn hero__btn--outline">
              <FaPaperPlane className="btn-icon" />
              <span>Get In Touch</span>
            </a>
          </div>
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
            href="https://www.linkedin.com/in/abhinash-panigrahi-9a17b626b/"
            className="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:abhinashpanigrahi9@gmail.com"
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
