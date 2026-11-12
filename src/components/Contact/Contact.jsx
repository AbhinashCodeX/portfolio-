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
  FaCopy,
  FaCheck,
  FaDownload,
  FaBolt,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'abhinashpanigrahi9@gmail.com',
    href: 'mailto:abhinashpanigrahi9@gmail.com',
    canCopy: true,
  },
  {
    icon: <FaPhone />,
    label: 'Mobile',
    value: '+91 7008455023',
    href: 'tel:+917008455023',
    canCopy: false,
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'abhinash-panigrahi-9a17b626b',
    href: 'https://www.linkedin.com/in/abhinash-panigrahi-9a17b626b/',
    canCopy: false,
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'AbhinashCodeX',
    href: 'https://github.com/AbhinashCodeX',
    canCopy: false,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Bhubaneswar / Cuttack, Odisha, India',
    href: null,
    canCopy: false,
  },
];

const INQUIRY_CATEGORIES = [
  { id: 'Full-Time .NET Backend Engineer Role', icon: '🎯', label: 'Full-Time .NET Role' },
  { id: 'Contract / Freelance Project', icon: '💼', label: 'Contract / Freelance' },
  { id: 'Technical Consulting & Architecture', icon: '⚡', label: 'Architecture Consulting' },
  { id: 'General Inquiry / Discussion', icon: '💬', label: 'General Discussion' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Full-Time .NET Backend Engineer Role',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCategorySelect = (category) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: category,
      subject: prev.subject ? prev.subject : `${category} Inquiry`,
    }));
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('abhinashpanigrahi9@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company ? formData.company.trim() : 'Not Specified',
      inquiry_type: formData.inquiryType,
      subject: formData.subject || `${formData.inquiryType} from ${formData.name}`,
      message: formData.message,
      time: formattedDate,
    };

    try {
      // 1. Send via EmailJS with your verified custom template
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials missing from environment.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: 'Full-Time .NET Backend Engineer Role',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setStatus({ submitting: false, success: false, error: null });
      }, 7000);
    } catch (err) {
      console.warn('EmailJS delivery fallback to Web3Forms:', err);

      // 2. Automatic safety fallback to Web3Forms
      try {
        const web3AccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!web3AccessKey) {
          throw new Error('Fallback service key not found.');
        }

        const payload = new FormData();
        payload.append('access_key', web3AccessKey);
        payload.append('name', formData.name);
        payload.append('email', formData.email);
        payload.append('from_name', `${formData.name} via Portfolio`);
        payload.append('subject', `⚡ [Portfolio Lead] ${formData.inquiryType} – ${formData.subject || formData.name}`);
        payload.append('Company', formData.company || 'Not Specified');
        payload.append('Opportunity Type', formData.inquiryType);
        payload.append('Message', formData.message);
        payload.append('Time', formattedDate);

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: payload,
        });
        const data = await res.json();

        if (data.success) {
          setStatus({ submitting: false, success: true, error: null });
          setFormData({
            name: '',
            email: '',
            company: '',
            inquiryType: 'Full-Time .NET Backend Engineer Role',
            subject: '',
            message: '',
          });
          setTimeout(() => {
            setStatus({ submitting: false, success: false, error: null });
          }, 7000);
        } else {
          throw new Error(data.message || 'Delivery error');
        }
      } catch (fallbackErr) {
        console.error('All form services failed:', fallbackErr);
        setStatus({
          submitting: false,
          success: false,
          error: 'Connection issue. Please email directly at abhinashpanigrahi9@gmail.com.',
        });
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-label">
          <span className="section-label__tag">Connect With Me</span>
          <h2 className="section-label__title">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="contact-subtitle">
            Looking for a high-performing <strong>.NET Backend &amp; Full Stack Engineer</strong> or discussing an enterprise architecture? Drop a message below and it will reach my inbox directly.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Column — Availability Card & Direct Reach */}
          <div className="contact-left-column">
            {/* Recruiter Fast-Track Card */}
            <div className="contact-status-card">
              <div className="contact-status-header">
                <span className="contact-status-beacon">
                  <span className="beacon-ping" />
                  <span className="beacon-dot" />
                </span>
                <span className="contact-status-title">Available for Opportunities</span>
              </div>
              <p className="contact-status-desc">
                Actively seeking <strong>Full-Time .NET / C# Backend &amp; Full Stack Roles</strong>. Open to Remote, Hybrid, or Relocation across India.
              </p>
              <div className="contact-status-actions">
                <a
                  href="/Latest_Resume.pdf"
                  download="Abhinash_Panigrahi_Resume.pdf"
                  className="contact-action-btn"
                >
                  <FaDownload className="action-icon" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Direct Connect Info Cards */}
            <div className="contact-info">
              {contactInfo.map((item) => (
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

                  {/* 1-Click Copy Button for Email */}
                  {item.canCopy && (
                    <button
                      type="button"
                      className={`contact-copy-btn ${copied ? 'copied' : ''}`}
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <FaCheck className="copy-icon" />
                          <span className="copy-text">Copied!</span>
                        </>
                      ) : (
                        <>
                          <FaCopy className="copy-icon" />
                          <span className="copy-text">Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Modern Interactive Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Form Title & Indicator */}
            <div className="contact-form-header">
              <h3 className="contact-form-title">Send a Direct Message</h3>
              <span className="contact-form-badge">
                <FaBolt /> Instant Delivery
              </span>
            </div>

            {/* Category Selector Pills */}
            <div className="form-category-wrapper">
              <label className="form-field-label">Select Inquiry Purpose</label>
              <div className="form-category-pills">
                {INQUIRY_CATEGORIES.map((cat) => {
                  const isActive = formData.inquiryType === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`category-pill ${isActive ? 'is-active' : ''}`}
                      onClick={() => handleCategorySelect(cat.id)}
                      disabled={status.submitting}
                    >
                      <span className="pill-icon">{cat.icon}</span>
                      <span className="pill-label">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 1: Name & Email */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-field-label">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  disabled={status.submitting}
                />
              </div>
              <div className="form-group">
                <label className="form-field-label">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. recruiter@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  disabled={status.submitting}
                />
              </div>
            </div>

            {/* Row 2: Company & Subject */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-field-label">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  placeholder="e.g. Deloitte, Microsoft, Startup (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  disabled={status.submitting}
                />
              </div>
              <div className="form-group">
                <label className="form-field-label">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Full-Time Opportunity / Interview Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  disabled={status.submitting}
                />
              </div>
            </div>

            {/* Message Field with Character Counter */}
            <div className="form-group">
              <div className="form-field-header">
                <label className="form-field-label">Your Message *</label>
                <span className="form-char-count">{formData.message.length} / 1000</span>
              </div>
              <textarea
                name="message"
                placeholder="Share details about the role, technical scope, team, or project..."
                rows="5"
                maxLength={1000}
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input form-textarea"
                disabled={status.submitting}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`form-submit-btn ${status.submitting ? 'submitting' : ''} ${status.success ? 'success' : ''}`}
              disabled={status.submitting}
            >
              {status.submitting ? (
                <>
                  <FaSpinner className="btn-spinner" />
                  <span>Delivering via EmailJS...</span>
                </>
              ) : status.success ? (
                <>
                  <FaCheckCircle />
                  <span>Message Sent Directly to Inbox!</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message to Abhinash</span>
                </>
              )}
            </button>

            {/* Status Feedback Messages */}
            {status.success && (
              <div className="form-status form-status--success" role="alert">
                <FaCheckCircle className="form-status-icon" />
                <div>
                  <strong>Delivered Successfully!</strong>
                  <p>Your message has been sent directly to Abhinash's Gmail inbox with your custom template.</p>
                </div>
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
