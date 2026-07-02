import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-card-header">
        <span className="post-category">{post.category}</span>
        <span className="post-date">
          {new Date(post.publishedAt).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </span>
      </div>
      
      <Link to={`/post/${post.slug}`} className="post-title-link">
        <h3 className="post-title">{post.title}</h3>
      </Link>
      
      <p className="post-excerpt">{post.excerpt}</p>
      
      <div className="post-card-footer">
        {post.readTime && <span className="post-read-time">{post.readTime} min read</span>}
        <Link to={`/post/${post.slug}`} className="post-read-more">Read More →</Link>
      </div>
    </article>
  );
}
