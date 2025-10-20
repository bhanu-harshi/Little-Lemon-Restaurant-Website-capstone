import React, { useState } from "react";
import "./BookingForm.css"; // We'll add some CSS for vertical layout

function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    guests: ""
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.time) tempErrors.time = "Time is required";
    if (!formData.guests || formData.guests <= 0) tempErrors.guests = "Guests must be at least 1";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }
    setErrors({});
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>✅ Reservation Confirmed!</h3>
        <p>
          Thank you, {formData.firstName} {formData.lastName}! Your table for {formData.guests} guest(s) on {formData.date} at {formData.time} has been booked.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Booking form" className="booking-form">
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
      />
      {errors.firstName && <span className="error">{errors.firstName}</span>}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
      />
      {errors.lastName && <span className="error">{errors.lastName}</span>}

      <label htmlFor="date">Date</label>
      <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
      {errors.date && <span className="error">{errors.date}</span>}

      <label htmlFor="time">Time</label>
      <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} />
      {errors.time && <span className="error">{errors.time}</span>}

      <label htmlFor="guests">Number of Guests</label>
      <input id="guests" name="guests" type="number" min="1" max="10" value={formData.guests} onChange={handleChange} />
      {errors.guests && <span className="error">{errors.guests}</span>}

      <button type="submit">Reserve Table</button>
    </form>
  );
}

export default BookingForm;
