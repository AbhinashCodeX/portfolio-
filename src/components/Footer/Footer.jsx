import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/AbhinashCodeX',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/abhinash-panigrahi-9a17b626b/',
    label: 'LinkedIn',
  },
  {
    icon: <FaEnvelope />,
    href: 'mailto:ABHINASHPANIGRAHI9@gmail.com',
    label: 'Email',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left — Logo & Tagline */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              AP
            </a>
            <p className="footer-tagline">
              .NET Developer crafting robust, scalable web applications with
              clean code and modern technologies.
            </p>
          </div>

          {/* Center — Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Socials */}
          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-icons">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span>© 2026 Abhinash Panigrahi. All rights reserved.</span>
          <span>Built with React &amp; ❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
