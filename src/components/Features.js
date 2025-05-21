import React, { useEffect, useRef } from "react";
import "../styles/Features.css";

const featureData = [
  {
    icon: "fas fa-dollar-sign",
    title: "Cost-Effective",
    description:
      "We offer affordable, high-quality services ensuring a smooth, budget-friendly process,",
  },
  {
    icon: "fab fa-cc-visa",
    title: "Visa Assistance",
    description:
      "Expert visa guidance to help you navigate the application process with ease.",
  },
  {
    icon: "fas fa-atlas",
    title: "Faster Processing",
    description:
      "Experience quicker processing times, so you can focus on your future without unnecessary delays.",
  },
  {
    icon: "fas fa-users",
    title: "Direct Interviews",
    description:
      "We connect you directly with employers, ensuring a seamless interview process and a higher chance of success.",
  },
];

const Features = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="features-wrapper">
      <div className="features-container">
        <div className="features-header">
          <div className="sub-style">
            <h5 className="sub-title">Why Choose Us</h5>
          </div>
          <h1 className="main-title">
            Offer Tailor Made Services That Our Client Requires
          </h1>
          <p className="description">
            We provide customized immigration services tailored to your needs,
            ensuring a seamless experience. Our expert team is dedicated to
            guiding you through every step of the immigration process.
          </p>
        </div>
        <div className="features-grid">
          {featureData.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <div className="feature-content">
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
