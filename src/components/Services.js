import React from 'react';
import "../styles/Services.css";
import service1Image from '../assets/img/service-1.jpg';
import service2Image from '../assets/img/service-2.jpg';
import service3Image from '../assets/img/service-3.jpg';
import service4Image from '../assets/img/service-4.jpg';
import service5Image from '../assets/img/service-5.jpg';
import service6Image from '../assets/img/service-6.jpg';

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
        { title: 'Job Visa', imgSrc: service1Image, description: 'A job visa allows individuals to legally work in a foreign country. Our team assists you in navigating the visa application process, ensuring all necessary documents are in order, and helping you secure employment opportunities abroad.' },
        { title: 'Study Visa', imgSrc: service2Image, description: 'A study visa enables students to pursue academic programs in a foreign country. We provide guidance on the application process, necessary documentation, and requirements for obtaining a student visa for your desired destination.' },
        { title: 'Tourist / Visitor Visa', imgSrc: service3Image, description: 'A tourist visa is ideal for individuals seeking to visit a foreign country for leisure, sightseeing, or personal purposes. We assist in obtaining the necessary travel documents to help you explore the world with ease.' },
        { title: 'Work Permits / Visa PR', imgSrc: service4Image, description: 'Work permits or Permanent Residency (PR) visas allow individuals to live and work in a foreign country on a long-term basis. We provide expert assistance in obtaining work permits or PR visas, ensuring your transition is seamless and legally compliant.' },
        { title: 'Dependent Visa', imgSrc: service5Image, description: 'A dependent visa allows family members, such as spouses or children, to join the primary visa holder in a foreign country. Our team guides you through the process, ensuring that your loved ones can accompany you without any hassle.' },
        { title: 'School Visa', imgSrc: service6Image, description: 'A school visa is designed for individuals who wish to attend an educational institution in a foreign country. We assist students in securing the necessary documents and permissions to study abroad, making their academic journey smooth and hassle-free.' }
        
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
