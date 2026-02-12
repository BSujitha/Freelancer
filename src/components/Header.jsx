import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/header.css';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false); // close mobile menu after click

    if (location.pathname !== '/') {
      navigate('/', { replace: false });

      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 200);
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">WorkMania</div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>Home</a>
          <a href="#categories" onClick={(e) => scrollToSection(e, '#categories')}>Categories</a>
          <a href="#jobs" onClick={(e) => scrollToSection(e, '#jobs')}>Jobs</a>
          <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a>
          <a href="#cta" onClick={(e) => scrollToSection(e, '#cta')} className="btn-header">
            Get Started
          </a>
        </nav>


        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
