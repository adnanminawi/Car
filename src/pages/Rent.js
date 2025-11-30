import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Rent.css";

function Rent() {
  const DRIVER_FEE = 25;
  const location = useLocation();
  const selectedCar = location.state?.car || ""; // car name
  const selectedPrice = location.state?.price || 0; // car price

  const [rentData, setRentData] = useState({
    name: "",
    car: selectedCar,
    carPrice: selectedPrice,
    startDate: "",
    endDate: "",
    driver: false
  });

  const [rents, setRents] = useState(() => {
    const saved = localStorage.getItem('rentals');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('rentals', JSON.stringify(rents));
  }, [rents]);

  const calculateDays = () => {
    if (!rentData.startDate || !rentData.endDate) return 0;
    const start = new Date(rentData.startDate);
    const end = new Date(rentData.endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  const calculateTotal = () => {
    const days = calculateDays();
    if (days === 0) return 0;
    let carTotal = rentData.carPrice * days;
    if (days > 7) carTotal *= 0.9;
    const driverTotal = rentData.driver ? DRIVER_FEE * days : 0;
    return carTotal + driverTotal;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRentData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rentData.name || !rentData.startDate || !rentData.endDate) {
      return alert("Please fill all fields");
    }
    if (calculateDays() <= 0) return alert("End date must be after start date");

    const newRent = {
      ...rentData,
      days: calculateDays(),
      total: calculateTotal(),
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };

    setRents(prev => [...prev, newRent]);
    setRentData(prev => ({
      ...prev,
      name: "",
      startDate: "",
      endDate: "",
      driver: false
    }));
    alert("Rental saved!");
  };

  const days = calculateDays();
  const total = calculateTotal();
  const hasDiscount = days > 7;

  return (
    <div className="rent-page">
  
      <div className="rent-container">
        <div className="rent-header">
          <h2>Rent a Car</h2>
          <Link to="/rentals" className="view-rentals-btn">
            View Saved Rentals ({rents.length})
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="rental-form">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={rentData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Car</label>
            <input type="text" value={rentData.car} readOnly />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={rentData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={rentData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="driver"
                checked={rentData.driver}
                onChange={handleChange}
              />
              <span>Include Driver (+${DRIVER_FEE}/day)</span>
            </label>
          </div>

          {days > 0 && (
            <div className="price-summary">
              <div className="price-row">
                <span>Car Rental ({days} days):</span>
                <span>${(rentData.carPrice * days).toFixed(2)}</span>
              </div>
              {hasDiscount && (
                <div className="price-row discount">
                  <span>Discount (10%):</span>
                  <span>-${(rentData.carPrice * days * 0.1).toFixed(2)}</span>
                </div>
              )}
              {rentData.driver && (
                <div className="price-row">
                  <span>Driver Fee ({days} days):</span>
                  <span>${(DRIVER_FEE * days).toFixed(2)}</span>
                </div>
              )}
              <div className="price-row total">
                <span>Total Price:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}

          <button type="submit" className="submit-btn">
            Confirm Rental
          </button>
        </form>
      </div>

     
    </div>
  );
}

export default Rent;