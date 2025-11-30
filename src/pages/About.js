import React from "react";
import '../styles/About.css';
import Footer from "../components/Footer";
function About() {
return (
    <>
    <div className="about-page"> 
    <div className="about-header">
    <h1>About CarRentals</h1> 
    <p>Your trusted partner for seamless car rental experiences.</p> 
    </div>


  <div className="about-content">
    <section className="about-section">
    <h2>Our Mission</h2>
    <p>
        At CarRentals, our mission is to provide top-quality vehicles and exceptional customer service, 
        ensuring that every journey is safe, comfortable, and enjoyable. We believe in transparency, 
        reliability, and convenience for all our customers.
      </p>
    </section>

    <section className="about-section">
      <h2>Our Fleet</h2>
      <p>
        We offer a wide range of vehicles, from luxury sedans and SUVs to economical compact cars, 
        catering to all your travel needs. Every vehicle is maintained to the highest standards for safety 
        and comfort.
      </p>
    </section>

    <section className="about-section">
      <h2>Why Choose Us?</h2>
      <p>
        Flexible rental plans for daily, weekly, and monthly needs.
        Competitive pricing and transparent billing.
        24/7 customer support to assist you anytime
        Easy online booking with instant confirmation
      </p>
    </section>

  </div>
</div>

 <Footer/>
</>
);
}

export default About;
