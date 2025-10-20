import React from "react";
import { Link } from "react-router-dom";
import "./Order.css"; // Make sure this file exists in the same folder

function Order() {
  return (
    <section className="order-section">
      <div className="order-container">
        <h2>Online Ordering Coming Soon!</h2>
        <p>
          "Browse our menu and enjoy your meal in-restaurant or at home. Online ordering coming soon!"
        </p>
        <Link to="/menu" className="btn">View Our Menu</Link>
      </div>
    </section>
  );
}

export default Order;
