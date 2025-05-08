import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-row">
            {/* Contact Info */}
            <div className="footer-col">
              <div className="footer-item">
                <h4 className="footer-heading">Contact Info</h4>
                <a href="#"><i className="fa fa-map-marker-alt"></i> 123 Street, New York, USA</a>
                <a href="#"><i className="fas fa-envelope"></i> info@example.com</a>
                <a href="#"><i className="fas fa-phone"></i> +012 345 67890</a>
                <a href="#"><i className="fas fa-print"></i> +012 345 67890</a>
                <div className="footer-social">
                  <i className="fas fa-share"></i>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            {/* Opening Time */}
            <div className="footer-col">
              <div className="footer-item">
                <h4 className="footer-heading">Opening Time</h4>
                <div className="footer-time">
                  <h6>Mon - Friday:</h6>
                  <p>09.00 am to 07.00 pm</p>
                </div>
                <div className="footer-time">
                  <h6>Saturday:</h6>
                  <p>10.00 am to 05.00 pm</p>
                </div>
                <div className="footer-time">
                  <h6>Vacation:</h6>
                  <p>All Sunday is our vacation</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="footer-col">
              <div className="footer-item">
                <h4 className="footer-heading">Our Services</h4>
                <a href="#"><i className="fas fa-angle-right"></i> Business</a>
                <a href="#"><i className="fas fa-angle-right"></i> Evaluation</a>
                <a href="#"><i className="fas fa-angle-right"></i> Migrate</a>
                <a href="#"><i className="fas fa-angle-right"></i> Study</a>
                <a href="#"><i className="fas fa-angle-right"></i> Counselling</a>
                <a href="#"><i className="fas fa-angle-right"></i> Work / Career</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-col">
              <div className="footer-item">
                <h4 className="footer-heading">Newsletter</h4>
                <p className="footer-desc">Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="newsletter">
                  <input type="text" placeholder="Enter your email" />
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="copyright-container">
          <p>
          <i className="fas fa-copyright"></i>
            <a href="#">
            The consultants</a>, All rights reserved.
          </p>
          <p>
            Developed By <a href="https://abrarulhaq.netlify.app/">Abrar ul haq</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
