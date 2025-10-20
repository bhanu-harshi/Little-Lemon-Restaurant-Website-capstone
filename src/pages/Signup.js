import React, { useState } from "react";
import "./Signup.css"; // Make sure this CSS file exists in the same folder

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("⚠️ Please fill out all fields.");
      return;
    }
    alert(`✅ Account created successfully for ${formData.name}`);
    setFormData({ name: "", email: "", password: "" }); // reset form
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <p>Create an account to manage your orders and preferences.</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

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

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
