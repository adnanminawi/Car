import React, { useState } from "react";
import CarCard from "../components/CarCard";
import Upper from "../components/Upper";
import Footer from "../components/Footer";


import range from '../assets/range.jpeg';
import elantra from '../assets/elantra.jpg';
import porsche from '../assets/porche.jpg';
import camry from '../assets/camry.jpg';
import civic from '../assets/civic.jpg';
import bmw from '../assets/bmw.jpg';

import '../styles/Cars.css';

function Cars() {
  const driverFee = 25;

  const cars = [
    { img: range, name: "Range Rover", desc: "Luxury SUV, perfect for families and long road trips.", priceDay: 120, priceWeek: 700 },
    { img: elantra, name: "Hyundai Elantra", desc: "Economical and smooth sedan, great for city driving.", priceDay: 45, priceWeek: 270 },
    { img: porsche, name: "Porsche 911", desc: "High-performance sports car for driving enthusiasts.", priceDay: 300, priceWeek: 1850 },
    { img: camry, name: "Toyota Camry", desc: "Reliable and stylish mid-size sedan with modern features.", priceDay: 60, priceWeek: 380 },
    { img: civic, name: "Honda Civic", desc: "Compact and efficient – a popular choice for all kinds of trips.", priceDay: 50, priceWeek: 310 },
    { img: bmw, name: "BMW 5 Series", desc: "Luxury sedan with advanced technology and smooth performance.", priceDay: 150, priceWeek: 900 }
  ];


const [driverSelected, setDriverSelected] = useState(
  cars.map(() => false)
);

// Toggle function
const toggleDriver = (index) => {
  const updated = [...driverSelected];

  updated[index] = !updated[index];   // flip true/false

  setDriverSelected(updated);         // update state
};


  return (
    <div>
      <Upper/>
      <h2>Available Cars</h2>
      
      <div className="cars-grid">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            car={car}
            index={index}
            driverSelected={driverSelected[index]}
            toggleDriver={toggleDriver}
            driverFee={driverFee}
          />
        ))}
      </div>

      <Footer/>
    </div>
  );
}

export default Cars;
