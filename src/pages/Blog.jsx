import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { posts, categories } from '../data/posts.jsx';
import PostCard from '../components/PostCard';
import './Blog.css';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const selectedCategory = searchParams.get('category') || 'All';

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        p.content.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }, [selectedCategory, search]);

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="blog">
      <div className="blog-header">
        <div className="container">
          <h1>Blog</h1>
          <p>Explore all articles and essays</p>
        </div>
      </div>

      <div className="container">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          <button
            className={`tab ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('All')}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="posts-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="no-posts">
              <p>No articles found. Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
