// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import { samplePosts } from './mockData'; // Import mock data
import './App.css'; // Keep general app styles if any

// Placeholder for a single post view (for Link navigation)
const PostDetailPlaceholder = () => {
  // In a real app, you'd fetch post details based on URL params
  const postId = window.location.pathname.split('/').pop();
  return <h2>Blog Post Detail (ID: {postId})</h2>;
}

function App() {
  return (
    <BrowserRouter> {/* Router needed for Link components */}
      <div className="App"> {/* Optional wrapper */}
        <h1 className='title'>Conor's Epic Blog</h1>
        <Routes>
           {/* Route for the blog post list */}
          <Route
            path="/"
            element={<BlogPostList posts={samplePosts} />}
          />
          {/* Example Route for individual posts - adjust path as needed */}
           <Route
             path="/posts/:postId"
             element={<PostDetailPlaceholder />}
           />
           {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;