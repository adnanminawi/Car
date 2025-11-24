import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        {/* Title on left */}
        <div className="nav-title">Car Rental</div>

        {/* Hamburger on right */}
        <div className="dropdown">
          <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`dropdown-menu ${open ? "show" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
