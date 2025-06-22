import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username || !password || !confirmPassword) {
      alert("⚠️ Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/signup", { username, password });
      alert("✅ Signup Successful! Please Login.");
      navigate("/login");
    } catch (error) {
      alert("❌ Signup Failed! Try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>🔐 Create an Account</h2>
        <p>Join us and start exploring!</p>

        <input
          type="text"
          placeholder="👤 Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="🔒 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="🔑 Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button onClick={handleSignup}>🚀 Sign Up</button>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login Here</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
