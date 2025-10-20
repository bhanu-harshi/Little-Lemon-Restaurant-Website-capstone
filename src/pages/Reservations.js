import React, { useState } from "react";
import "./Reservation.css";

function Reservations() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    guests: "",
  });

  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.date || !formData.time || !formData.guests) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setConfirmation(
      `Reservation confirmed for ${formData.firstName} ${formData.lastName} on ${formData.date} at ${formData.time} for ${formData.guests} guests.`
    );

    setFormData({ firstName: "", lastName: "", date: "", time: "", guests: "" });
  };

  return (
    <div className="reservation-container">
      <h2>Reserve Your Table</h2>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
        />

        <label>Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />

        <label>Time</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} />

        <label>Number of Guests</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          placeholder="Number of guests"
        />

        <button type="submit">Submit</button>
      </form>

      {confirmation && <p className="confirmation-message">{confirmation}</p>}
    </div>
  );
}

export default Reservations;
