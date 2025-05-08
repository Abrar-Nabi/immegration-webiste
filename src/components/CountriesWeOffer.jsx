import React from "react";
import "../styles/CountriesWeOffer.css"
import country1 from "../assets/img/country-1.jpg";
import country2 from "../assets/img/country-2.jpg";
import country3 from "../assets/img/country-3.jpg";
import country4 from "../assets/img/country-4.jpg";

import flag1 from "../assets/img/brazil.jpg";
import flag2 from "../assets/img/india.jpg";
import flag3 from "../assets/img/usa.jpg";
import flag4 from "../assets/img/italy.jpg";

const countries = [
  { name: "Brazil", image: country1, flag: flag1 },
  { name: "India", image: country2, flag: flag2 },
  { name: "New York", image: country3, flag: flag3 },
  { name: "Italy", image: country4, flag: flag4 },
];

const CountriesWeOffer = () => {
  return (
    <div className="country-section">
      <div className="country-header">
        <h5 className="subtitle">Countries We Offer</h5>
        <h1 className="title">Immigration & visa services following Countries</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          deleniti amet at atque sequi quibusdam cumque itaque repudiandae
          temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
          saepe in ab? Repellat!
        </p>
      </div>

      <div className="country-grid">
        {countries.map((country, index) => (
          <div className="country-card" key={index}>
            <div className="country-image-wrapper">
              <img src={country.image} alt={country.name} className="country-image" />
              <div className="country-overlay"></div>
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

      <div className="country-button-wrapper">
        <a href="#" className="country-button">More Countries</a>
      </div>
    </div>
  );
};

export default CountriesWeOffer;
