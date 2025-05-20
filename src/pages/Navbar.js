import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/img/logo.png';
import '../styles/main.css';
import Modal from '../components/Modal';

function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleHamburger = () => setIsHamburgerOpen(!isHamburgerOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Function to update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'features', 'countries', 'testimonial'];
      let current = 'home';

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }

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

          <button className="quote-btn" onClick={openModal}>
            Get A Quote
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Navbar;
