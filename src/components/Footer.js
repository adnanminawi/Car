import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>CarRentals</h3>
          <p>Your trusted partner for premium car rentals. <br /> Experience luxury, comfort, and reliability on every journey.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📞 +961 03816556</p>
          <p>✉ CarRental@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 CarRentals — All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
