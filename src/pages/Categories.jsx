import React from 'react';
import { Link } from 'react-router-dom';
import { posts, categories } from '../data/posts.jsx';
import './Categories.css';

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories-header">
        <div className="container">
          <h1>Categories</h1>
          <p>Explore all topic areas</p>
        </div>
      </div>

      <div className="container">
        <div className="categories-list">
          {categories.map(category => {
            const count = posts.filter(p => p.category === category).length;
            return (
              <Link key={category} to={`/blog?category=${category}`} className="category-item">
                <div className="category-info">
                  <h3>{category}</h3>
                  <p>{count} article{count !== 1 ? 's' : ''}</p>
                </div>
                <span className="arrow">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
