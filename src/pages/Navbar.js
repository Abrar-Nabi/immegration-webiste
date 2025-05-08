import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/img/logo.png';
import '../styles/main.css';

function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleHamburger = () => setIsHamburgerOpen(!isHamburgerOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const sections = ['home', 'about', 'counter', 'services', 'features', 'countries', 'testimonial'];
    const handleScroll = () => {
      let current = 'home';
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 100 <= window.scrollY) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Travisa Logo" />
        </a>
        <button className="navbar-toggle" onClick={toggleHamburger}>
          <i className="fa fa-bars"></i>
        </button>
        <div className={`navbar-links ${isHamburgerOpen ? 'open' : ''}`}>
          <Link to="home" smooth duration={500} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</Link>
          <Link to="about" smooth duration={500} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</Link>
          <Link to="services" smooth duration={500} className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Service</Link>
          <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <span className="nav-link dropdown-toggle" onClick={toggleDropdown}>Pages</span>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="features" smooth duration={500} className={`dropdown-item nav-link ${activeSection === 'features' ? 'active' : ''}`}>Feature</Link>
              <Link to="countries" smooth duration={500} className={`dropdown-item nav-link ${activeSection === 'countries' ? 'active' : ''}`}>Countries</Link>
              <Link to="testimonial" smooth duration={500} className={`dropdown-item nav-link ${activeSection === 'testimonial' ? 'active' : ''}`}>Testimonial</Link>
            </div>
          </div>
          <Link to="testimonial" smooth duration={500} className={`nav-link ${activeSection === 'testimonial' ? 'active' : ''}`}>Contact</Link>
          <button className="quote-btn">Get A Quote</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
