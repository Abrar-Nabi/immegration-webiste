import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Testimonial.css';
import img1 from '../assets/img/testimonial-1.jpg';
import img2 from '../assets/img/testimonial-2.jpg';
import img3 from '../assets/img/testimonial-3.jpg';
const testimonials = [
    {
      name: 'Person One',
      profession: 'Designer',
      image: img1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      name: 'Person Two',
      profession: 'Developer',
      image: img2,
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      name: 'Person Three',
      profession: 'Manager',
      image: img3,
      text: 'Ut enim ad minim veniam, quis nostrud exercitation...',
    },
    {
      name: 'Person Four',
      profession: 'Writer',
      image: img1,
      text: 'Aliquip ex ea commodo consequat. Duis aute irure dolor...',
    },
    {
      name: 'Person Five',
      profession: 'Artist',
      image: img2,
      text: 'Velit esse cillum dolore eu fugiat nulla pariatur...',
    }
  ];
  

const TestimonialSlider = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h5 className="testimonial-subtitle">OUR CLIENTS REVIEWS</h5>
        <h1 className="testimonial-title">What Our Clients Say</h1>
        <p className="testimonial-description">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">{item.text}</p>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">&#9733;</span>
                ))}
              </div>
              <div className="testimonial-user">
                <img src={item.image} alt="testimonial" className="user-img" />
                <div className="user-info">
                  <h5>{item.name}</h5>
                  <p>{item.profession}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
