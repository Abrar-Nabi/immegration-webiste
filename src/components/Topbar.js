import React from 'react';
import '../styles/main.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <a href="mailto:Theconsultantschd@gmail.com">
            <i className="fas fa-envelope"></i> Theconsultantschd@gmail.com
          </a>
          <a href="tel:+91 9991970404">
            <i className="fas fa-phone-alt"></i> +91 9991970404
          </a>
        </div>
        <div className="topbar-right">
          <div className="social-icons">
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a> */}
            <a href="https://www.facebook.com/share/16KY1Vi1nh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/the-consultants-10848735a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/theconsultants.co.in?igsh=OWg2ZHhhYndyZGVn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
