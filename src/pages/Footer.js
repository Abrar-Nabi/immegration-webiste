import React, { useState } from "react";
import "../styles/Footer.css";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Send email with EmailJS
    const templateParams = {
      to_email: email,
    };

    emailjs.send(
      'service_48y4ukt', // Replace with your EmailJS service ID
      'template_yqkxq9a', // Replace with your EmailJS template ID
      templateParams,
      'TZQgE7Mah3rnBoJsm' // Replace with your EmailJS user ID
    )
      .then(
        (response) => {
          console.log("Success:", response);
          setMessage("Thank you for subscribing to our newsletter!");
          setEmail("");
        },
        (error) => {
          console.log("Error:", error);
          setMessage("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            {/* Contact Info */}
            <div className="footer-col">
              <div className="footer-item">
                <h4 className="footer-heading">Contact Info</h4>
                <a href="#"><i className="fa fa-map-marker-alt"></i> 207-L Second Floor, Model Town, Sonipat</a>
                <a href="mailto:Theconsultantschd@gmail.com"><i className="fas fa-envelope"></i> Theconsultantschd@gmail.com</a>
                <a href="tel:+919991970404"><i className="fas fa-phone"></i> +91 9991970404</a>
                <a href="tel:+918222999095"><i className="fas fa-phone"></i> +91 82229 99095</a>
                <div className="footer-social">
                 
                  <a href="https://www.facebook.com/share/16KY1Vi1nh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/the-consultants-10848735a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/theconsultants.co.in?igsh=OWg2ZHhhYndyZGVn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Time */}
            <div className="footer-col">
              <div className="footer-item">
                <h4 className="footer-heading">Opening Time</h4>
                <div className="footer-time">
                  <h6>Mon - Fri:</h6>
                  <p>10:00 AM - 06:00 PM</p>
                </div>
                <div className="footer-time">
                  <h6>Saturday:</h6>
                  <p>10:00 AM - 03:00 PM</p>
                </div>
                <div className="footer-time">
                  <h6>Sunday:</h6>
                  <p>Closed</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="footer-col">
              <div className="footer-item">
                <h4 className="footer-heading">Our Services</h4>
                <a href="#"><i className="fas fa-angle-right"></i> Job Visa</a>
                <a href="#"><i className="fas fa-angle-right"></i> Study Visa</a>
                <a href="#"><i className="fas fa-angle-right"></i> Tourist / Visitor Visa</a>
                <a href="#"><i className="fas fa-angle-right"></i> Work Permits / Visa PR</a>
                <a href="#"><i className="fas fa-angle-right"></i> Dependent Visa</a>
                <a href="#"><i className="fas fa-angle-right"></i> School Visa</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-col">
              <div className="footer-item">
                <h4 className="footer-heading">Newsletter</h4>
                <p className="footer-desc">Stay updated with our latest immigration updates and visa offerings.</p>
                <div className="newsletter">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <button onClick={handleSubmit}>Sign Up</button>
                </div>
                {message && <p className="footer-message">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="copyright">
        <div className="copyright-container">
          <p>
            &copy; <a href="#">The Consultants</a>, All rights reserved.
          </p>
          <p>
            Developed By <a href="https://abrarulhaq.netlify.app/">Abrar ul Haq</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
