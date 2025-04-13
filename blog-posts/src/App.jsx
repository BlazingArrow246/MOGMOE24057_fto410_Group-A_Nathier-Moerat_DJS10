import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";


export default function App() {
  const [posts, setPosts] = useState([]); // State to store fetched posts
  const [error, setError] = useState(""); // State to store error messages

  // Fetch blog posts when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`); // Throw error for unsuccessful response
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        setPosts(data); // Update state with fetched data
      })
      .catch((err) => {
        setError(err.message); // Save error message in state
      });
  }, []); // Empty dependency array ensures this runs only once
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Blog Posts</h1>

        {/* Blog Posts or Error Messages */}
        {error ? (
          <div className="error-message">Error: {error}</div>
        ) : posts.length > 0 ? (
          <div className="posts-container">
            {posts.map((post) => (
              <div key={post.id} className="blog-post">
                <h2>{post.title}</h2> {/* Blog Posts title */}
                <p>{post.body}</p>   {/* Blog Posts body */}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
  }
