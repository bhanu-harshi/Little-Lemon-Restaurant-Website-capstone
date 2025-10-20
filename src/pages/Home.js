import React from "react";
import bgImage from "../Assets/bg.png"; // Ensure bg.jpg is in src/Assets
import "./Home.css";

function Home() {
  return (
    <section
      className="home-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="home-content">
        <h1>Welcome to Little Lemon Restaurant 🍋</h1>
        <p className="tagline">Authentic Mediterranean cuisine served fresh daily!</p>
        <p className="tagline">“Reserve your table to enjoy an authentic dining experience, or place an order online for convenience.”</p>
        <div className="home-buttons">
          <a href="/booking" className="btn">Reserve a Table</a>
          <a href="/order" className="btn btn-secondary">Order Online</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
