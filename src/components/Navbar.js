import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'; // correct way
import '../styles/main.css';

function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleHamburger = () => setIsHamburgerOpen(!isHamburgerOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Travisa Logo" />
        </Link>
        <button className="navbar-toggle" onClick={toggleHamburger}>
          <i className="fa fa-bars"></i>
        </button>
        <div className={`navbar-links ${isHamburgerOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Service</Link>
          <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <span className="nav-link dropdown-toggle" onClick={toggleDropdown}>
              Pages 
              <i className={`fa ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ marginLeft: '5px' }}></i>
            </span>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="/feature" className="dropdown-item nav-link">Feature</Link>
              <Link to="/countries" className="dropdown-item nav-link">Countries</Link>
              <Link to="/testimonial" className="dropdown-item nav-link">Testimonial</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-link">Contact</Link>
          <button className="quote-btn">Get A Quote</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
