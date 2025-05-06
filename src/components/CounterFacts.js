import React from 'react';
import '../styles/CounterFacts.css'; // Make sure this CSS contains the styles you provided
import { FaPassport, FaUsers, FaUserCheck, FaHandshake } from 'react-icons/fa';

const counters = [
  {
    icon: <FaPassport />,
    title: 'Visa Categories',
    value: 31,
    suffix: '+',
    delay: '0.1s',
  },
  {
    icon: <FaUsers />,
    title: 'Team Members',
    value: 377,
    suffix: '+',
    delay: '0.3s',
  },
  {
    icon: <FaUserCheck />,
    title: 'Visa Process',
    value: 4.9,
    suffix: 'K',
    delay: '0.5s',
  },
  {
    icon: <FaHandshake />,
    title: 'Success Rates',
    value: 98,
    suffix: '%',
    delay: '0.7s',
  },
];

const CounterFacts = () => {
  return (
    <div className="container-fluid counter-facts py-5">
      <div className="container py-5">
        <div className="row g-4">
          {counters.map((counter, index) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay={counter.delay}
              key={index}
            >
              <div className="counter">
                <div className="counter-icon">
                  {counter.icon}
                </div>
                <div className="counter-content">
                  <h3>{counter.title}</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value">{counter.value}</span>
                    <h4
                      className="text-secondary mb-0"
                      style={{ fontWeight: 600, fontSize: '25px' }}
                    >
                      {counter.suffix}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterFacts;
