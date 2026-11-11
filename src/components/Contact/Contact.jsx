import React, { useState } from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'abhinashpanigrahi9@gmail.com',
    href: 'mailto:abhinashpanigrahi9@gmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Mobile',
    value: '+91 7008455023',
    href: 'tel:+917008455023',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhinash-panigrahi-9a17b626b',
    href: 'https://www.linkedin.com/in/abhinash-panigrahi-9a17b626b/',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/AbhinashCodeX',
    href: 'https://github.com/AbhinashCodeX',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Bhubaneswar / Cuttack, Odisha, India',
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

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const payload = new FormData();
      payload.append('access_key', 'dbb74f14-b13a-4714-a6d8-762e307f1363');
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append(
        'subject',
        formData.subject
          ? `[Portfolio] ${formData.subject}`
          : `New Portfolio Message from ${formData.name}`
      );
      payload.append('message', formData.message);
      payload.append('from_name', `${formData.name} (via Portfolio)`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setStatus({ submitting: false, success: false, error: null });
        }, 6000);
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.message || 'Failed to deliver message. Please try again or email directly.',
        });
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Network connection issue. You can also email directly to abhinashpanigrahi9@gmail.com.',
      });
    }
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
            {/* Honeypot Spam Protection */}
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                disabled={status.submitting}
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
                disabled={status.submitting}
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
                disabled={status.submitting}
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
                disabled={status.submitting}
              />
            </div>
            <button
              type="submit"
              className={`form-submit-btn ${status.submitting ? 'submitting' : ''} ${status.success ? 'success' : ''}`}
              disabled={status.submitting}
            >
              {status.submitting ? (
                <>
                  <FaSpinner className="btn-spinner" />
                  <span>Sending Message...</span>
                </>
              ) : status.success ? (
                <>
                  <FaCheckCircle />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status.success && (
              <div className="form-status form-status--success" role="alert">
                <FaCheckCircle className="form-status-icon" />
                <span>Thank you! Your message has been sent directly to Abhinash's inbox.</span>
              </div>
            )}

            {status.error && (
              <div className="form-status form-status--error" role="alert">
                <FaExclamationCircle className="form-status-icon" />
                <span>{status.error}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
