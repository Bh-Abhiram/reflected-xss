import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome to Reflected XSS Attack Demonstration</h1>
      <p>A cybersecurity awareness project.</p>
      <button onClick={() => navigate("/signup")}>Get Started</button>
    </div>
  );
}

export default Welcome;
