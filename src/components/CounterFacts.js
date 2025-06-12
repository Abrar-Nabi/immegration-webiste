import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaPassport, FaUsers, FaUserCheck, FaHandshake } from 'react-icons/fa';
import '../styles/CounterFacts.css';

const counters = [
  { icon: <FaPassport />, title: 'Visa Categories', value: 6, suffix: '+', delay: '0.1s' },
  { icon: <FaUsers />, title: 'Team Members', value: 7, suffix: '+', delay: '0.3s' },
  { icon: <FaUserCheck />, title: 'Visa Process', value: 50, suffix: '+', delay: '0.5s' },
  { icon: <FaHandshake />, title: 'Success Rates', value: 98, suffix: '%', delay: '0.7s' },
];

const CounterFacts = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (inView) {
      setActive(true);
      const timeout = setTimeout(() => setActive(false), 1000); // Reset after animation to allow repeat
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <div className="container-fluid counter-facts py-5">
      <div className="container py-5" ref={ref}>
        <div className="row g-4">
          {counters.map((counter, index) => (
            <div
              className={`col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 counter-wrapper ${active ? 'slide-in' : ''}`}
              key={index}
              style={active ? { animationDelay: counter.delay } : {}}
            >
              <div className="counter">
                <div className="counter-icon">{counter.icon}</div>
                <div className="counter-content">
                  <h3>{counter.title}</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value">
                      {inView && (
                        <CountUp end={counter.value} duration={2} suffix={counter.suffix} />
                      )}
                    </span>
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
