import '../styles/services.css';
import instantIcon from '../assets/instant-hiring.png';
import verifiedIcon from '../assets/verified.png'; 
import secureIcon from '../assets/secure-payment.png';
import trackingIcon from '../assets/tracking.png';

const servicesData = [
  { 
    title: 'Instant Hiring', 
    desc: 'Hire freelancers instantly based on their applications and location.',
    icon: instantIcon 
  },
  { 
    title: 'Verified Freelancers', 
    desc: 'Work with verified professionals to ensure quality delivery.',
    icon: verifiedIcon 
  },
  { 
    title: 'Secure Payments', 
    desc: 'Safe and hassle-free payment gateway for every project.',
    icon: secureIcon 
  },
  { 
    title: 'Project Tracking', 
    desc: 'Monitor project progress and milestones in real-time.',
    icon: trackingIcon 
  },
];

export default function Services() {
  return (
    <section id="cta" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
