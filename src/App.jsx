import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './/components/Navbar.jsx';
import Footer from './/components/Footer.jsx';
import Home from './/pages/Home.jsx';
import Blog from './/pages/Blog.jsx';
import BlogPost from './/pages/BlogPost.jsx';
import Categories from './/pages/Categories.jsx';
import About from './/pages/About.jsx';
import Contact from './/pages/Contact.jsx';
import Newsletter from './/pages/Newsletter.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
