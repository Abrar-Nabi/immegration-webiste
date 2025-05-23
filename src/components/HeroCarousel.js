import React, { useEffect, useRef, useState } from 'react';
import carousel1 from '../assets/img/carousel-1.jpg';
import carousel2 from '../assets/img/carousel-2.jpg';
import "../styles/HeroCarousel.css";
import "../styles/global.css";
import Modal from './Modal';

const HeroCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const node = carouselRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.remove('animate'); // reset
          void node.offsetWidth; // force reflow
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.3 }
    );

    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="carousel-header">
        <div
          id="carouselId"
          className={`carousel slide ${animate ? 'animate' : ''}`}
          data-bs-ride="carousel"
          ref={carouselRef}
        >
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            {[carousel1, carousel2].map((img, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={img} className="img-fluid" alt={`Slide ${index + 1}`} />
                <div className="carousel-caption">
                  <div className="carousel-content">
                    <h4 className="carousel-subheading animate-item">Solution For All Type Of Visas</h4>
                    <h1 className="carousel-heading animate-item">{
                      index === 0
                        ? 'Immigration Process Starts Here!'
                        : 'Best Visa Immigrations Services'
                    }</h1>
                    <p className="carousel-description animate-item">{
                      index === 0
                        ? 'Explore visa options and immigration services tailored just for you!'
                        : 'Begin your smooth journey abroad with trusted immigration experts!'
                    }</p>
                    <button
                      onClick={openModal}
                      className="hero-button btn btn-primary border-secondary rounded-pill text-white py-3 px-5 animate-item"
                    >
                      Get a quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon animate-item bg-secondary" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon animate-item bg-secondary" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
};

export default HeroCarousel;
