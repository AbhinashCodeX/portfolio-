import React, { useState } from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="section-label">
          <span className="section-label__tag">Connect With Me</span>
          <h2 className="section-label__title">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="contact-subtitle">
            Have an enterprise project, .NET backend role, or collaboration in mind? I'd love to connect. Drop me a message below or reach out directly on GitHub.
          </p>
        </div>

        <div className="contact-content">
          {/* Left — Info Cards */}
          <div className="contact-info">
            {contactInfo.map((item, i) => (
              <div className="contact-info-card" key={item.label}>
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
              </div>
            ))}
          </div>

          {/* Right — Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
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
            <button type="submit" className="form-submit-btn">
              <FaPaperPlane />
              <span>{submitted ? 'Message Sent!' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
