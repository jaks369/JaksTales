import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Have a question or want to collaborate? We'd love to hear from you.</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          <div className="contact-info">
            <h2>Other Ways to Connect</h2>
            <p>
              While we process all inquiries through the contact form above, you can also reach out through other channels or follow along with our latest content.
            </p>
            <div className="info-items">
              <div className="info-item">
                <h3>Newsletter</h3>
                <p>Subscribe to receive our latest essays and deep dives directly in your inbox.</p>
              </div>
              <div className="info-item">
                <h3>Blog</h3>
                <p>Explore our full archive of articles across all topics and categories.</p>
              </div>
              <div className="info-item">
                <h3>Response Time</h3>
                <p>We typically respond to inquiries within 2-3 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
