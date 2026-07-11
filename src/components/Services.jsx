import React from "react";
import "./Services.css";

const Services = () => {
  const myServices = [
    {
      title: "Web Development",
      desc: "I build beautiful and responsive websites using React.js and modern web technologies.",
      icon: "💻",
    },
    {
      title: "Backend Development",
      desc: "I create secure and scalable backend applications using Node.js, Express.js, and MongoDB.",
      icon: "⚙️",
    },
    {
      title: "UI/UX Design",
      desc: "I design clean, modern, and user-friendly interfaces that provide a great user experience.",
      icon: "🎨",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="subtitle">MY SERVICES</span>
        <h2>
          What <span className="blue-text">I Do</span> For My Clients
        </h2>
      </div>

      <div className="services-grid">
        {myServices.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <a href="#projects" className="read-more">
              View Projects →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;