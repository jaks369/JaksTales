import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../lib/sanity.jsx';
import './Categories.css';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        console.error('Error loading categories:', err);
        setError('Failed to load categories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="categories">
      <div className="categories-header">
        <div className="container">
          <h1>Categories</h1>
          <p>Explore all topic areas</p>
        </div>
      </div>

      <div className="container">
        {loading ? (
          <div className="loading">Loading categories...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <div className="categories-list">
            {categories.map(category => (
              <Link 
                key={category.id} 
                to={`/blog?category=${category.slug}`} 
                className="category-item"
              >
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.postCount} article{category.postCount !== 1 ? 's' : ''}</p>
                </div>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
