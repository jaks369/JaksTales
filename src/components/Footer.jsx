import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Jaks369 Tales</h3>
            <p>Deep dives into geopolitics, hidden history, philosophy, psychology, technology, AI, crypto, documentaries, and thought-provoking essays.</p>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="/categories">Geopolitics</a></li>
              <li><a href="/categories">Philosophy</a></li>
              <li><a href="/categories">Technology</a></li>
              <li><a href="/categories">AI & Crypto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="/newsletter">Newsletter</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Jaks369 Tales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
