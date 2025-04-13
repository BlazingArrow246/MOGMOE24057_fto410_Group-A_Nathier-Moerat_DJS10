import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";


export default function App() {
  const [posts, setPosts] = useState([]); // State to store fetched posts
  const [error, setError] = useState(""); // State to store error messages

  // Fetch blog posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched Posts:", data);
        setPosts(data); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Update state with error message
      }
    };
    fetchPosts(); // Call the fetchPosts function
  }, []); // Empty dependency array ensures this runs only once
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
