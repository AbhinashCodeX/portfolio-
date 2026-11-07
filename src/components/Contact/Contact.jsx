import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'abhinash.panigrahi@email.com',
    href: 'mailto:abhinash.panigrahi@email.com',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/AbhinashCodeX',
    href: 'https://github.com/AbhinashCodeX',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhinashpanigrahi',
    href: 'https://linkedin.com/in/abhinashpanigrahi',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'India',
    href: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Left — Info Cards */}
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {contactInfo.map((item, i) => (
              <motion.div
                className="contact-info-card"
                key={item.label}
                custom={i}
                variants={fadeUp}
              >
                <div className="contact-info-icon">{item.icon}</div>
                <div className="contact-info-text">
                  <span className="contact-info-label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-info-value contact-info-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-info-value">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input form-textarea"
              />
            </div>
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
