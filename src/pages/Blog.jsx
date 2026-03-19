import React from 'react';
import { blogPosts } from '../data/content';
import '../styles/Blog.css';

function Blog() {
  return (
    <div className="blog">
      <div className="blog-hero">
        <h1>Blog & Insights</h1>
        <p>Latest trends, insights, and expert opinions in technology and design</p>
      </div>

      <div className="blog-container">
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                  <span className="blog-author">By {post.author}</span>
                </div>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        {/* <section className="newsletter-section">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest insights and updates delivered to your inbox</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </section> */}
      </div>
    </div>
  );
}

export default Blog;
