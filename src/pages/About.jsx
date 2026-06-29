import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="about-header">
        <div className="container">
          <h1>About Jaks369 Tales</h1>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              Jaks369 Tales is dedicated to exploring the hidden dimensions of our world—the geopolitical forces that shape nations, the historical narratives that have been suppressed, the philosophical questions that define human existence, and the technological innovations that will determine our future.
            </p>
            <p>
              In an age of information overload and competing narratives, we believe it's essential to think critically, question assumptions, and seek truth beyond the mainstream. This blog is a space for deep dives, rigorous analysis, and thought-provoking essays.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Cover</h2>
            <div className="topics-grid">
              <div className="topic">
                <h3>Geopolitics</h3>
                <p>Understanding the invisible forces that shape international relations and global conflicts.</p>
              </div>
              <div className="topic">
                <h3>Hidden History</h3>
                <p>Uncovering suppressed narratives and challenging mainstream historical accounts.</p>
              </div>
              <div className="topic">
                <h3>Philosophy</h3>
                <p>Exploring fundamental questions about consciousness, reality, and human existence.</p>
              </div>
              <div className="topic">
                <h3>Psychology</h3>
                <p>Understanding the mechanisms of belief, bias, and human behavior.</p>
              </div>
              <div className="topic">
                <h3>Technology & AI</h3>
                <p>Examining emerging technologies and their implications for society and humanity.</p>
              </div>
              <div className="topic">
                <h3>Crypto & Finance</h3>
                <p>Analyzing blockchain, cryptocurrencies, and the future of money and value exchange.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>About the Author</h2>
            <p>
              Jaks369 is an independent researcher and writer passionate about exploring the intersections of history, technology, philosophy, and geopolitics. With a background in critical analysis and a commitment to intellectual rigor, Jaks369 Tales aims to provide perspectives that challenge conventional wisdom and inspire deeper thinking.
            </p>
            <p>
              This blog is a labor of love—a space to share insights, ask difficult questions, and engage with readers who share a curiosity about the world beyond surface-level narratives.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Approach</h2>
            <ul className="approach-list">
              <li><strong>Critical Thinking:</strong> We question assumptions and seek evidence-based reasoning.</li>
              <li><strong>Intellectual Honesty:</strong> We acknowledge complexity, nuance, and the limits of our knowledge.</li>
              <li><strong>Independent Perspective:</strong> We prioritize truth-seeking over ideology or commercial interests.</li>
              <li><strong>Rigorous Analysis:</strong> We conduct thorough research and present well-reasoned arguments.</li>
              <li><strong>Open Dialogue:</strong> We welcome respectful discussion and diverse viewpoints in our community.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
