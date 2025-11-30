import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import '../styles/Slideshow.css';

// Import your images
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import car4 from '../assets/car4.png';
import car5 from '../assets/car5.png';
import car6 from '../assets/car6.png';
import car7 from '../assets/car7.png';
import car8 from '../assets/car8.png';

const cars = [car1, car2, car3, car4, car5, car6, car7, car8];

function Slideshow() {
  return (
    <section className="fleet-section">
      <h2>Discover Our Wide Range of Rental Cars in Lebanon</h2>
      <p>From compact to luxury and sports cars — we have the perfect ride for every journey!</p>

      <Swiper
        className="myFleetSwiper"
        modules={[Autoplay]}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {cars.map((car, idx) => (
          <SwiperSlide key={idx}>
            <img src={car} alt={`Car ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to="/cars" className="btn btn-outline-primary btn-lg">
        Explore Cars
      </Link>
    </section>
  );
}

export default Slideshow;
