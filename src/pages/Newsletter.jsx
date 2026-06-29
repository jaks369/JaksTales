import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="newsletter">
      <div className="newsletter-header">
        <div className="container">
          <h1>Join Our Newsletter</h1>
          <p>Get the latest essays and deep dives delivered to your inbox</p>
        </div>
      </div>

      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-form-section">
            <h2>Subscribe Today</h2>
            <p>
              Receive curated articles on geopolitics, hidden history, philosophy, psychology, technology, AI, crypto, and more. No spam, just thoughtful content.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="success-message">
                  Thank you for subscribing! Check your email to confirm.
                </div>
              )}

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Subscribe</button>
            </form>

            <p className="privacy-note">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          <div className="newsletter-benefits">
            <h2>What You'll Get</h2>
            <div className="benefits-list">
              <div className="benefit">
                <div className="benefit-icon">📚</div>
                <h3>Weekly Essays</h3>
                <p>In-depth articles exploring complex topics across all our categories.</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🔍</div>
                <h3>Deep Dives</h3>
                <p>Comprehensive analysis and investigation of hidden narratives and patterns.</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">💡</div>
                <h3>Thought Leadership</h3>
                <p>Unique perspectives that challenge conventional wisdom and inspire critical thinking.</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🌍</div>
                <h3>Global Insights</h3>
                <p>Coverage of geopolitical developments, historical revelations, and technological breakthroughs.</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🎯</div>
                <h3>Curated Content</h3>
                <p>Handpicked articles and resources tailored to your interests.</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">👥</div>
                <h3>Community</h3>
                <p>Join a community of critical thinkers and truth-seekers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
