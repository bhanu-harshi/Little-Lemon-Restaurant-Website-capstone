import React, { useState } from "react";
import "./Login.css"; // CSS must exist in the same folder

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("⚠️ Please fill out all fields.");
      return;
    }
    alert(`✅ Login successful for ${formData.email}`);
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h2>Login</h2>
        <p>You can make a reservation even without logging in.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
