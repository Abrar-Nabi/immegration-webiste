import React from 'react';
import office1 from '../assets/img/office-1.jpg';
import office2 from '../assets/img/office-2.jpg';
import office3 from '../assets/img/office-3.jpg';
import office4 from '../assets/img/office-4.jpg';
import '../styles/ContactOffices.css';

const offices = [
  {
    country: 'Australia',
    phone: '+123.456.7890',
    email: 'travisa@example.com',
    image: office2,
    address:
      '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United States of America.',
  },
  {
    country: 'Canada',
    phone: '(012) 0345 6789',
    email: 'travisa@example.com',
    image: office1,
    address:
      '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United States of America.',
  },
  {
    country: 'United Kingdom',
    phone: '01234.567.890',
    email: 'travisa@example.com',
    image: office3,
    address:
      '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United States of America.',
  },
  {
    country: 'India',
    phone: '+123.45.67890',
    email: 'travisa@example.com',
    image: office4,
    address:
      '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United States of America.',
  },
];

const ContactOffices = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="office">
          <div className="section-title">
            <div className="sub-style">
              <h5 className="sub-title">Worlwide Offices</h5>
            </div>
            <h1 className="main-title">Explore Our Office Worldwide</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
          </div>
          <div className="office-grid">
            {offices.map((office, index) => (
              <div className="office-item" key={index}>
                <div className="office-img">
                  <img src={office.image} alt={office.country} />
                </div>
                <div className="office-content">
                  <h4>{office.country}</h4>
                  <a href={`tel:${office.phone}`} className="phone">
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="email">
                    {office.email}
                  </a>
                  <p>{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOffices;
