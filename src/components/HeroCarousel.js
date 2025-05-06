import React from 'react';
import carousel1 from '../assets/img/carousel-1.jpg';
import carousel2 from '../assets/img/carousel-2.jpg';
import "../styles/HeroCarousel.css";
import "../styles/global.css";

const HeroCarousel = () => {
  return (
    <div className="carousel-header">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src={carousel1} className="img-fluid" alt="Slide 1" />
            <div className="carousel-caption">
              <div className="text-center p-4" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase fw-bold mb-3 mb-md-4">Solution For All Type Of Visas</h4>
                <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4">Immigration Process Starts Here!</h1>
                <p className="text-white mb-4 mb-md-5 fs-5">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <button className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5">
                  More Details
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="img-fluid" alt="Slide 2" />
            <div className="carousel-caption">
              <div className="text-center p-4" style={{ maxWidth: '900px' }}>
                <h5 className="text-white text-uppercase fw-bold mb-3 mb-md-4">Solution For All Type Of Visas</h5>
                <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4">Best Visa Immigrations Services</h1>
                <p className="text-white mb-4 mb-md-5 fs-5">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <button className="hero-button btn btn-primary border-secondary rounded-pill text-white py-3 px-5">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-secondary" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-secondary" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
