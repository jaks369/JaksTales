import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../data/posts.jsx';
import './PostCard.css';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-card-header">
        <span className="post-category">{post.category}</span>
        <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
      </div>
      
      <Link to={`/post/${post.id}`} className="post-title-link">
        <h3 className="post-title">{post.title}</h3>
      </Link>
      
      <p className="post-excerpt">{post.excerpt}</p>
      
      <div className="post-card-footer">
        <span className="post-read-time">{post.readTime} min read</span>
        <Link to={`/post/${post.id}`} className="post-read-more">Read More →</Link>
      </div>
    </article>
  );
}
