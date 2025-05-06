// src/components/About.jsx
import React from 'react';
import '../styles/About.css';
import aboutImage2 from '../assets/img/about-2.png';
import aboutImage3 from '../assets/img/about-3.jpg';

const About = () => {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-row">
                    <div className="about-left">
                        <div className="about-images">
                            <img src={aboutImage2} alt="About 2" className="img1" />
                            <img src={aboutImage3} alt="About 3" className="img2" />
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="section-title">
                            <h5 className="sub-style">About the company</h5>
                            <h1 className="main-title">We’re Trusted Immigration Consultant Agency.</h1>
                        </div>

                        <p className="about-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto consectetur iusto perferendis
                            blanditiis assumenda dignissimos, commodi fuga culpa earum explicabo libero sint est mollitia saepe! Sequi
                            asperiores rerum nemo!
                        </p>

                        <div className="about-icons-row">
                            <div className="icon-box">
                                <i className="fas fa-map-marked-alt icon"></i>
                                <h5>Best Immigration Resources</h5>
                            </div>
                            <div className="icon-box">
                                <i className="fas fa-passport icon"></i>
                                <h5>Return Visas Available</h5>
                            </div>
                        </div>

                        <div className="experience-row">
                            <div className="experience-box">
                                <i className="fas fa-ticket-alt exp-icon"></i>
                                <h1>34</h1>
                                <p>Years of Experience</p>
                            </div>
                            <div className="experience-text">
                                <p><i className="fa fa-check-circle"></i> Offer 100% Genuine Assistance</p>
                                <p><i className="fa fa-check-circle"></i> It’s Faster & Reliable Execution</p>
                                <p><i className="fa fa-check-circle"></i> Accurate & Expert Advice</p>

                                <div className="contact-row">
                                    <div className="contact-icon">
                                        <i className="fa fa-phone-alt phone-icon"></i>
                                        <div className="comment-bubble">
                                            <i className="fa fa-comment-dots"></i>
                                        </div>
                                    </div>
                                    <div className="contact-text">
                                        <span className="small-text">Have any questions?</span>
                                        <span className="phone-number">Free: +0123 456 7890</span>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
