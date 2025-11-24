import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import Lo from '../assets/Lo.png';
import Slideshow from "../components/Slideshow";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
function Home() {


return (
  <div>

  <header> 
  <div className="hero-container"> 
    <h1>Welcome to CarRentals</h1> 
    <p>Luxury, comfort, and style — find the perfect car for your next trip!</p> 
    <Link to="/cars"> Browse Cars </Link> 
    </div>
      <div className="Home-image">
      <img src={Lo} alt="Lo" />
      </div>
    </header>

   <Slideshow />
   <Feature />
   <Footer/>
 
</div>  

);
}

export default Home;
