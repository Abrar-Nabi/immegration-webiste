import React from 'react';
import "../styles/Services.css";
import service1Image from '../assets/img/service-1.jpg';
import service2Image from '../assets/img/service-2.jpg';
import service3Image from '../assets/img/service-3.jpg';

const VisaCard = ({ title, imgSrc, description }) => {
    return (
        <div className="visa-card">
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
};

const VisaCategories = () => {
    const services = [
        { title: 'Job Visa', imgSrc: service1Image, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.' },
        { title: 'Business Visa', imgSrc: service2Image, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.' },
        { title: 'Diplomatic Visa', imgSrc: service3Image, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.' },
        { title: 'Student Visa', imgSrc: service1Image, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.' },
        { title: 'Residence Visa', imgSrc: service2Image, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.' },
        { title: 'Tourist Visa', imgSrc: service3Image, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.' }
    ];

    return (
        <div className="visa-section">
            <div className="visa-container">
                <div className="visa-header">
                    <h5 className="visa-subtitle">Visa Categories</h5>
                    <h1 className="visa-main-title">Enabling Your Immigration Successfully</h1>
                    <p className="visa-intro">Lorem ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="visa-grid">
                    {services.map((service, index) => (
                        <VisaCard
                            key={index}
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
