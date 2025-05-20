import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Testimonial.css';
import img1 from '../assets/img/testimonial-1.jpeg';
import img2 from '../assets/img/testimonial-2.jpeg';

const defaultUserIcon = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
const testimonials = [
  {
    name: 'Akashdeep Singh',
    profession: '',
    image: img1,
    text: 'All the Executives are very helpful throughout my process. The entire staff is welcoming. Special thanks to the Counsellors.',
  },
  {
    name: 'Tajinder Singh',
    profession: '',
    image: img2,
    text: 'It was a Pleasant experience to have assistance from your end. My application was processed without any Problems, received my Canada Visitor Visa. Thank you The Consultants team.',
  },
  {
    name: 'Rahul Kumar',
    profession: '',
    image: null, // No image, will fall back to default icon
    text: 'Each and everything is very well explained, which is required for a student visa. All the team is helpful and organised.',
  },
];






const TestimonialSlider = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h5 className="testimonial-subtitle">OUR CLIENTS REVIEWS</h5>
        <h1 className="testimonial-title">What Our Clients Say</h1>

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
                <img
                  src={item.image || defaultUserIcon}
                  alt="testimonial"
                  className="user-img"
                />

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
