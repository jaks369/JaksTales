import React from 'react';
import { Link } from 'react-router-dom';
import { posts, categories } from '../data/posts.jsx';
import PostCard from '../components/PostCard';
import './Home.css';

export default function Home() {
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Jaks369 Tales</h1>
          <p className="hero-subtitle">Deep dives into geopolitics, hidden history, philosophy, psychology, technology, AI, crypto, documentaries, and thought-provoking essays.</p>
          <Link to="/blog" className="hero-cta">Explore the Blog</Link>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Articles</h2>
          <div className="posts-grid">
            {featuredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h2>Explore Topics</h2>
          <div className="categories-grid">
            {categories.map(category => {
              const count = posts.filter(p => p.category === category).length;
              return (
                <Link key={category} to={`/blog?category=${category}`} className="category-card">
                  <h3>{category}</h3>
                  <p>{count} article{count !== 1 ? 's' : ''}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to receive the latest essays and deep dives directly in your inbox.</p>
          <Link to="/newsletter" className="newsletter-btn">Subscribe to Newsletter</Link>
        </div>
      </section>
    </div>
  );
}
