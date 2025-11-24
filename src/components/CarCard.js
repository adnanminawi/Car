import React from "react";
import { Link } from "react-router-dom";

function CarCard({ car, index, driverSelected, toggleDriver, driverFee }) {
  return (
    <div className="car-card">
      <div className="car-image-container">
        <img className="car-img" src={car.img} alt={car.name} />
      </div>

      <div className="car-info">
        <h5 className="car-name">{car.name}</h5>
        <p className="car-desc">{car.desc}</p>

    {/* PRICE SECTION */}
<div className="price-box">
  <div className="price-item day">
    <span>${car.priceDay}</span>
    <label>Per Day</label>
  </div>
  <div className="price-item week">
    <span>${car.priceWeek}</span>
    <label>Per Week</label>
  </div>
</div>
        {/* DRIVER OPTION */}
        <div className="driver-section">
          <button
            className={`driver-btn ${driverSelected ? "active" : ""}`}
            onClick={() => toggleDriver(index)}
          >
            {driverSelected ? "Driver Included" : "Add Driver"}
          </button>
          {driverSelected && (
            <span className="driver-price">+ ${driverFee}/day</span>
          )}
        </div>

        {/* RENT BUTTON */}
        <Link
          className="rent-btn"
          to={`/rent/${encodeURIComponent(car.name)}?driver=${driverSelected}`}
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
