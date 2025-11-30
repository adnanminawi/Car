import React from "react";
import { Link } from "react-router-dom";
import '../styles/Contact.css'
import Footer from "../components/Footer";
function Contact() {
  return (
    <div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div>
        <h2>Contact Us</h2>

        <form>
          <label>Name</label>
          <input type="text" required />

          <label>Email</label>
          <input type="email" required />

          <label>Message</label>
          <textarea required />

          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
export default Contact;