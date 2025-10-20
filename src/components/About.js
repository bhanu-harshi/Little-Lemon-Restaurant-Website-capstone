import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Little Lemon 🍋</h2>
        <p className="about-intro">
          Little Lemon is a family-owned Mediterranean restaurant that serves authentic, fresh, and flavorful dishes made with love.
        </p>

        <div className="about-details">
          <div className="about-info">
            <h3>📍 Our Location</h3>
            <p>123 Sunshine Avenue, Chicago, IL 60611, USA</p>
          </div>

          <div className="about-info">
            <h3>📞 Contact Us</h3>
            <p>Phone: +1 (312) 555-1234</p>
            <p>Email: contact@littlelemon.com</p>
          </div>

          <div className="about-info">
            <h3>🕒 Opening Hours</h3>
            <p>Monday – Friday: 11:00 AM – 10:00 PM</p>
            <p>Saturday – Sunday: 9:00 AM – 11:00 PM</p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Little Lemon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.614374365365!2d-87.62317722406522!3d41.89463896593774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd355bf5b1f29%3A0xe1479a6ad3d0b1e9!2sChicago%20Downtown!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default About;
