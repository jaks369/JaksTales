import React, { useState } from 'react';
import { submitContactForm } from '../lib/supabase.jsx';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const { data, error: submitError } = await submitContactForm(
        formData.name,
        formData.email,
        formData.subject,
        formData.message
      );

      if (submitError) throw submitError;

      setSuccess('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
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
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

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

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
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
