import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts.jsx';
import PostCard from '../components/PostCard';
import './BlogPost.css';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });

  if (!post) {
    return (
      <div className="blog-post">
        <div className="container">
          <div className="not-found">
            <h1>Post not found</h1>
            <Link to="/blog">Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.comment) {
      setComments([...comments, { ...formData, date: new Date().toLocaleDateString() }]);
      setFormData({ name: '', email: '', comment: '' });
    }
  };

  return (
    <div className="blog-post">
      <article className="post-content">
        <div className="container">
          <div className="post-header">
            <Link to="/blog" className="back-link">← Back to Blog</Link>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span className="post-category">{post.category}</span>
              <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="post-read-time">{post.readTime} min read</span>
            </div>
          </div>

          <div className="post-body">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <section className="comments-section">
        <div className="container">
          <h2>Comments</h2>
          
          <form className="comment-form" onSubmit={handleSubmitComment}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Comment"
                rows={4}
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Post Comment</button>
          </form>

          <div className="comments-list">
            {comments.length === 0 ? (
              <p className="no-comments">No comments yet. Be the first to comment!</p>
            ) : (
              comments.map((comment, idx) => (
                <div key={idx} className="comment">
                  <div className="comment-header">
                    <strong>{comment.name}</strong>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                  <p>{comment.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="posts-grid">
              {relatedPosts.map(relatedPost => (
                <PostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
