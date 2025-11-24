 import '../styles/Feature.css';
 import daily from '../assets/daily.png';
 import help from '../assets/help.png';
 import Get from '../assets/Get.jpg';
function Feature() {
    
const features = [
{ img: Get, title: "Airport Pickup", desc: "Convenient pickup & drop-off at major airports in Lebanon." },
{ img: daily, title: "Daily & Weekly Rentals", desc: "Flexible rental periods that suit your travel needs." },
{ img: help, title: "24/7 Support", desc: "Always here to help you on the road or off it." },
];


    return (
  <section className="features-section">  
    <h2>Why Choose Us?</h2>  
    <div className="features-container">  
      {features.map((feature, idx) => (  
        <div className="feature-card" key={idx}>  
          <img src={feature.img} alt={feature.title} />  
          <h4>{feature.title}</h4>  
          <p>{feature.desc}</p>  
        </div>  
      ))}  
    </div>  
  </section>);
}

  export default Feature;