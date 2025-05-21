import React, { useEffect, useRef } from "react";
import "../styles/CountriesWeOffer.css";
import country1 from "../assets/img/country-1.jpg";
import country2 from "../assets/img/country-2.jpg";
import country3 from "../assets/img/country-3.jpg";
import country4 from "../assets/img/country-4.jpg";
import country5 from "../assets/img/country-5.jpg";
import country6 from "../assets/img/country-6.jpg";
import flag1 from "../assets/img/Cyprus.jpg";
import flag2 from "../assets/img/Canada.jpg";
import flag3 from "../assets/img/usa.jpg";
import flag4 from "../assets/img/Australia.jpg";
import flag5 from "../assets/img/Ireland.jpg";
import flag6 from "../assets/img/UK.jpg";

const countries = [
  { name: "Cyprus", image: country1, flag: flag1 },
  { name: "Canada", image: country2, flag: flag2 },
  { name: "USA", image: country3, flag: flag3 },
  { name: "Australia", image: country4, flag: flag4 },
  { name: "Ireland", image: country5, flag: flag5 },
  { name: "UK", image: country6, flag: flag6 },
];

const CountriesWeOffer = () => {
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
    <section className="country-section">
      <div className="country-header">
        <h5 className="subtitle">Countries We Offer</h5>
        <h1 className="title">
          Immigration & Visa Services For These Countries
        </h1>
        <p className="description">
          Discover comprehensive immigration services tailored for your needs.
          We ensure professional guidance through every step of your journey.
        </p>
      </div>

      <div className="country-grid">
        {countries.map((country, index) => (
          <div
            className="country-card"
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="country-image-wrapper">
              <img
                src={country.image}
                alt={country.name}
                className="country-image"
              />
              <div className="country-overlay" />
              <div className="country-flag">
                <img src={country.flag} alt={`${country.name} Flag`} />
              </div>
              <div className="country-name">
                <a href="#">{country.name}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountriesWeOffer;
