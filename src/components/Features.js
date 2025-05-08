import React from "react";
import "../styles/Features.css"; // Make sure the CSS is saved in the same directory

const featureData = [
  {
    icon: "fas fa-dollar-sign",
    title: "Cost-Effective",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: "fab fa-cc-visa",
    title: "Visa Assistance",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: "fas fa-atlas",
    title: "Faster Processing",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: "fas fa-users",
    title: "Direct Interviews",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
];

const Features = () => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p>
        </div>
        <div className="features-grid">
          {featureData.map((feature, index) => (
            <div className="feature-card" key={index}>
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
