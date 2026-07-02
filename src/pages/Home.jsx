import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, fetchCategories } from '../lib/sanity.jsx';
import PostCard from '../components/PostCard.jsx';
import './Home.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const [postsData, categoriesData] = await Promise.all([
          fetchPosts(),
          fetchCategories()
        ]);
        setPosts(postsData);
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        console.error('Error loading home content:', err);
        setError('Failed to load content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const featuredPosts = posts.slice(0, 3);

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
          {loading ? (
            <div className="loading">Loading featured articles...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : featuredPosts.length > 0 ? (
            <div className="posts-grid">
              {featuredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="no-posts">No featured articles available yet.</div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h2>Explore Topics</h2>
          {loading ? (
            <div className="loading">Loading categories...</div>
          ) : categories.length > 0 ? (
            <div className="categories-grid">
              {categories.map(category => (
                <Link 
                  key={category.id} 
                  to={`/blog?category=${category.slug}`} 
                  className="category-card"
                >
                  <h3>{category.name}</h3>
                  <p>{category.postCount} article{category.postCount !== 1 ? 's' : ''}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-categories">No categories available yet.</div>
          )}
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
