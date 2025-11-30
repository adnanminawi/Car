import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/RentalPage.css";
function RentalPage() {
  const [rents, setRents] = useState(() => {
    const saved = localStorage.getItem('rentals');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('rentals', JSON.stringify(rents));
  }, [rents]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this rental?")) {
      setRents(rents.filter(r => r.id !== id));
    }
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all rentals?")) {
      setRents([]);
    }
  };

  return (
    <div className="saved-rentals-page">
      
      <div className="saved-rentals-container">
        <div className="page-header">
          <h2>Saved Rentals</h2>
          {rents.length > 0 && (
            <button className="clear-all-btn" onClick={handleClearAll}>
              Clear All
            </button>
          )}
        </div>

        {rents.length === 0 ? (
          <p>No saved rentals yet</p>
        ) : (
          <table className="rentals-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Car</th>
                <th>Days</th>
                <th>Driver</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rents.map(r => (
                <tr key={r.id}>
                  <td>{r.date}</td>
                  <td>{r.name}</td>
                  <td>{r.car}</td>
                  <td>{r.days}</td>
                  <td>{r.driver ? "Yes" : "No"}</td>
                  <td>${r.total.toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleDelete(r.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
    </div>
  );
}
export default RentalPage;