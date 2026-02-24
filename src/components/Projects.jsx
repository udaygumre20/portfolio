import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaBus, FaMapMarkedAlt, FaBell, FaUniversity, FaBook, FaFileAlt, FaDumbbell, FaHeartbeat, FaGlobe, FaCamera } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "BusTracker Pro",
            description: "A real-time intercity bus tracking PWA. It provides live location updates, route visualization, occupancy status, and SOS alerts for passenger safety.",
            techStack: ["Typescript", "NodeJS", "Supabase", "Google Maps API"],
            githubLink: "https://github.com/udaygumre20/bustracker_pro",
            demoLink: "https://bustracker-pro.vercel.app/",
            featured: true,
            features: [
                { icon: <FaBus />, text: "Live Tracking" },
                { icon: <FaMapMarkedAlt />, text: "Route View" },
                { icon: <FaBell />, text: "SOS Alerts" }
            ]
        },
        {
            title: "College Management System",
            description: "Comprehensive portal for managing marks, fees, and library operations. Served as Project Coordinator and Backend API Developer.",
            techStack: ["PHP", "HTML/CSS/JS", "MySQL"],
            githubLink: "https://github.com/udaygumre20/College-Management-System",
            demoLink: null,
            featured: true,
            features: [
                { icon: <FaUniversity />, text: "Admin Portal" },
                { icon: <FaBook />, text: "Library Mgmt" },
                { icon: <FaFileAlt />, text: "Marks & Fees" }
            ]
        },
        {
            title: "Fitness Guiding Website",
            description: "Responsive platform offering personalized fitness and diet recommendations. Led backend and database integration.",
            techStack: ["HTML/CSS/JS", "MySQL"],
            githubLink: "https://github.com/udaygumre20/Fitness-Guiding-Website",
            demoLink: "https://unite-active-pulse.netlify.app/",
            featured: true,
            features: [
                { icon: <FaDumbbell />, text: "Workout Plans" },
                { icon: <FaHeartbeat />, text: "Diet Tracking" },
                { icon: <FaFileAlt />, text: "Health Tips" }
            ]
        },
        {
            title: "Mera Bharat",
            description: "Responsive website offering information to tourist. This is my first website made from scratch in 12th Class.",
            techStack: ["HTML/CSS"],
            githubLink: "https://github.com/udaygumre20/mera-bharat",
            demoLink: "https://udaygumre20.github.io/mera-bharat/",
            featured: true,
            features: [
                { icon: <FaGlobe />, text: "Tourism Info" },
                { icon: <FaCamera />, text: "Photo Gallery" },
                { icon: <FaMapMarkedAlt />, text: "Heritage Sites" }
            ]
        }
    ];

    return (
        <section id="projects" className="section container">
            <h2 className="section-title">My <span>Projects</span></h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>

                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-links">
                                    <a href={project.githubLink} className="icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                                    {project.demoLink && (
                                        <a href={project.demoLink} className="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><FaExternalLinkAlt /></a>
                                    )}
                                </div>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="tech-stack">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-badge">{tech}</span>
                                ))}
                            </div>

                            {project.featured && project.features && (
                                <div className="project-features">
                                    {project.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="feature">
                                            {feature.icon} {feature.text}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
            background: var(--bg-secondary);
            border-radius: 16px;
            padding: 2rem;
            border: 1px solid rgba(255,255,255,0.05);
            transition: transform 0.3s ease, border-color 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .project-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-color);
        }

        .featured {
            grid-column: 1 / -1;
            background: linear-gradient(135deg, var(--bg-secondary), rgba(139, 92, 246, 0.1));
            border: 1px solid var(--accent-color);
        }

        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .project-title {
            font-size: 1.5rem;
            color: var(--text-primary);
        }

        .project-links {
            display: flex;
            gap: 1rem;
        }

        .icon-link {
            color: var(--text-secondary);
            font-size: 1.2rem;
            transition: color 0.2s;
        }

        .icon-link:hover {
            color: var(--accent-color);
        }

        .project-description {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            font-size: 1rem;
            line-height: 1.6;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .tech-badge {
            background: rgba(255,255,255,0.1);
            color: var(--text-primary);
            padding: 0.3rem 0.8rem;
            border-radius: 50px;
            font-size: 0.8rem;
        }

        .project-features {
            display: flex;
            gap: 1.5rem;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255,255,255,0.1);
        }

        .feature {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--accent-color);
            font-size: 0.9rem;
            font-weight: 500;
        }

        @media (max-width: 768px) {
            .featured {
                grid-column: auto;
            }
            .project-features {
                flex-wrap: wrap;
            }
        }
      `}</style>
        </section>
    );
};

export default Projects;
