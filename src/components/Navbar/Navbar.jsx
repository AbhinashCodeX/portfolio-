import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  /* ---- scroll detection ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---- intersection observer for active link ---- */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href);
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  /* ---- animation variants ---- */
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const drawerVariants = {
    closed: { x: '100%', transition: { duration: 0.35, ease: 'easeInOut' } },
    open: { x: 0, transition: { duration: 0.35, ease: 'easeInOut' } },
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="navbar__inner">
          {/* Logo */}
          <button className="navbar__logo" onClick={() => scrollTo('hero')} aria-label="Go to top">
            <span className="navbar__logo-accent">A</span>P
          </button>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className={`navbar__link ${activeSection === link.href ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollTo(link.href)}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      className="navbar__link-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="navbar__drawer"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="navbar__drawer-links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i }}
                  >
                    <button
                      className={`navbar__drawer-link ${activeSection === link.href ? 'navbar__drawer-link--active' : ''}`}
                      onClick={() => scrollTo(link.href)}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
