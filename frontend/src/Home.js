import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  // 🛑 Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user");
    axios.post("http://localhost:5000/logout")
      .then(() => {
        navigate("/login");
      })
      .catch(error => {
        console.error("Logout error:", error);
      });
  };

  // 🔍 Search Function
  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/search?q=${query}`);
      setResult(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* 🏠 Navbar */}
      <nav className="navbar">
        <ul>
          <li className={activeTab === "home" ? "active" : ""} onClick={() => setActiveTab("home")}>Home</li>
          <li className={activeTab === "demo" ? "active" : ""} onClick={() => setActiveTab("demo")}>Reflected XSS Demo</li>
          <li className={activeTab === "mitigation" ? "active" : ""} onClick={() => setActiveTab("mitigation")}>Mitigation</li>
          <li className="home-logout-btn" onClick={handleLogout}>Logout</li>
        </ul>
      </nav>

      {/* 📌 Home Container */}
      <div className="home-container">
        {activeTab === "home" && (
          <div className="content">
            <h2>🔍 Overview of XSS Attacks</h2>
            <p><strong>Cross-Site Scripting (XSS)</strong> is a security vulnerability in web apps, allowing attackers to inject malicious scripts.</p>
            <h3>📌 Types of XSS Attacks:</h3>
            <ul>
              <li><strong>Stored XSS:</strong> Script is saved on the server and executed later.</li>
              <li><strong>Reflected XSS:</strong> Malicious script is injected and immediately reflected.</li>
              <li><strong>DOM-Based XSS:</strong> Manipulation of the DOM using JavaScript.</li>
            </ul>
            <h3>🎯 What is Reflected XSS?</h3>
            <p>Reflected XSS occurs when a script is injected into a request and reflected back in the response, executing in the victim’s browser.</p>
          </div>
        )}

        {activeTab === "demo" && (
          <div className="content">
            <h2>🎭 Reflected XSS Demo</h2>
            <p>Enter a **search query** to see how reflected XSS can be exploited.</p>
            <input className="home-input" type="text" placeholder="Enter search query..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="home-btn" onClick={handleSearch}>Search</button>
            <div className="home-result" dangerouslySetInnerHTML={{ __html: result }}></div>
          </div>
        )}

        {activeTab === "mitigation" && (
          <div className="content">
            <h2>🔒 Mitigation Techniques</h2>
            <p>To prevent **Reflected XSS** attacks, follow these security best practices:</p>
            <ul>
              <li><strong>Input Validation:</strong> Sanitize user input before processing.</li>
              <li><strong>Output Encoding:</strong> Encode output data before displaying.</li>
              <li><strong>Content Security Policy (CSP):</strong> Restrict inline scripts.</li>
              <li><strong>Secure Cookies:</strong> Use HTTPOnly & Secure flags.</li>
              <li><strong>React Security:</strong> Avoid `dangerouslySetInnerHTML` unless necessary.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
