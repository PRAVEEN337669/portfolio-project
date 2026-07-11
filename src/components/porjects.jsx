import React from "react";
import "./projects.css";
import foodieLogo from "../assets/foodie cape logo.png";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Foodie Cape",
      category: "Food Delivery Web App",
      desc: "A full-stack food delivery web application built using React.js, Node.js, Express.js, and MongoDB, featuring user authentication, admin dashboard, cart functionality, and a responsive user interface.",
      image: foodieLogo,
      link: "https://my-project-foodie-cape.vercel.app", // Your Live Website
      // link: "https://github.com/PRAVEEN337669/my-project-foodie-cape", // Use this instead if you want GitHub
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">My Portfolio</span>
          <h2>
            Featured <span className="blue-text">Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>

              <div className="project-info">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;