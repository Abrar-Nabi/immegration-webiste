import React from 'react';
import '../styles/main.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <a href="mailto:Example@gmail.com">
            <i className="fas fa-envelope"></i> Example@gmail.com
          </a>
          <a href="tel:+01234567890">
            <i className="fas fa-phone-alt"></i> +01234567890
          </a>
        </div>
        <div className="topbar-right">
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
