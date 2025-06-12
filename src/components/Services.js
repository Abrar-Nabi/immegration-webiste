import React, { useEffect, useRef } from 'react';
import "../styles/Services.css";
import service1Image from '../assets/img/service-1.jpg';
import service2Image from '../assets/img/service-2.jpg';
import service3Image from '../assets/img/service-3.jpg';
import service4Image from '../assets/img/service-4.jpg';
import service5Image from '../assets/img/service-5.jpg';
import service6Image from '../assets/img/service-6.jpg';

const VisaCard = React.forwardRef(({ title, imgSrc, description, animateClass }, ref) => {
    return (
        <div ref={ref} className={`visa-card ${animateClass ? 'animate' : ''}`}>
            <div className="visa-box">
                <div className="visa-img-box">
                    <img src={imgSrc} className="visa-img" alt={title} />
                </div>
                <div className="visa-title-box">
                    <div className="visa-title-header">
                        <div className="visa-title-label">
                            <a href="#" className="visa-title-text">{title}</a>
                        </div>
                    </div>
                    <div className="visa-description-box">
                        <a href="#"><h4 className="visa-description-title">{title}</h4></a>
                        <div className="visa-description-text">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

const VisaCategories = () => {
    const services = [
        { title: 'Work Permits ', imgSrc: service1Image, description:'A work permit allows individuals to legally work in a foreign country, either temporarily or for a long-term period. We offer expert guidance on the application process, eligibility criteria, required documents, and country-specific regulations to help you secure a work permit with ease.' },
        { title: 'Study Visa', imgSrc: service2Image, description: 'A study visa enables students to pursue academic programs in a foreign country. We provide guidance on the application process, necessary documentation, and requirements for obtaining a student visa for your desired destination.' },
        { title: 'Tourist / Visitor Visa', imgSrc: service3Image, description: 'A tourist visa is ideal for individuals seeking to visit a foreign country for leisure, sightseeing, or personal purposes. We assist in obtaining the necessary travel documents to help you explore the world with ease.' },
        { title: 'Visa PR', imgSrc: service4Image, description: 'A Permanent Residency (PR) visa grants individuals the right to live, work, and settle in a foreign country indefinitely. We assist you in navigating the complex PR application process, ensuring you meet all requirements, prepare the correct documentation, and increase your chances of successful approval.' },
        { title: 'Dependent Visa', imgSrc: service5Image, description: 'A dependent visa allows family members, such as spouses or children, to join the primary visa holder in a foreign country. Our team guides you through the process, ensuring that your loved ones can accompany you without any hassle.' },
        { title: 'School Visa', imgSrc: service6Image, description: 'A school visa is designed for individuals who wish to attend an educational institution in a foreign country. We assist students in securing the necessary documents and permissions to study abroad, making their academic journey smooth and hassle-free.' }
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        target.classList.add('animate');
                    } else {
                        target.classList.remove('animate');
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        cardRefs.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className="visa-section">
            <div className="visa-container">
                <div className="visa-header">
                    <h5 className="visa-subtitle">Visa Categories</h5>
                    <h1 className="visa-main-title">Enabling Your Immigration Successfully</h1>
          
                </div>
                <div className="visa-grid">
                    {services.map((service, index) => (
                        <VisaCard
                            key={index}
                            ref={el => cardRefs.current[index] = el}
                            title={service.title}
                            imgSrc={service.imgSrc}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VisaCategories;
