import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      
      navigate('/', { replace: false });
      
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          const headerOffset = 120; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); 
    } else {
     
      const element = document.querySelector(sectionId);
      if (element) {
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">WorkMania</div>
        <nav className="nav">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>Home</a>
          <a href="#categories" onClick={(e) => scrollToSection(e, '#categories')}>Categories</a>
          <a href="#jobs" onClick={(e) => scrollToSection(e, '#jobs')}>Jobs</a>
          <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a>
          <a href="#cta" onClick={(e) => scrollToSection(e, '#cta')} className="btn-header">Get Started</a>
        </nav>
        <button className="btn-login">Login</button>
      </div>
    </header>
  );
}
