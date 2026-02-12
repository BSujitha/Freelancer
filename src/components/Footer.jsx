import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // import icons
import '../styles/footer.css';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND INFO */}
        <div className="footer-brand">
          <h2>WorkMania</h2>
          <p><FaMapMarkerAlt /> 11, Sri Devi Nagar, 1st Street, Kavundampalayam(Po), Coimbatore-642030</p>
          <p><FaEnvelope /> contact@workmania.com | <FaPhone /> +91 98765 43210</p>
          <p>© 2026 WorkMania. All rights reserved.</p>
        </div>

        {/* PRODUCT LINKS */}
        <div className="footer-links">
          <h3>Product</h3>
          <ul>
            <li><a onClick={() => scrollToSection('#services')} style={{cursor: 'pointer'}}>Services</a></li>
            <li><a onClick={() => scrollToSection('#jobs')} style={{cursor: 'pointer'}}>Find Jobs</a></li>
            <li><a onClick={() => scrollToSection('#categories')} style={{cursor: 'pointer'}}>Categories</a></li>
          </ul>
        </div>

        {/* LEGAL LINKS */}
        <div className="footer-policies">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/terms" className="legal-link">Terms of Service →</Link></li>
            <li><Link to="/privacy" className="legal-link">Privacy Policy →</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 WorkMania. Made with ❤️ in Coimbatore, India</p>
      </div>
    </footer>
  );
}
