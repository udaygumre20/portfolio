import React from 'react';
import { FaGithub, FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">Hello, I'm</p>
          <h1 className="hero-title">Uday Gumre</h1>
          <h2 className="hero-role">
            Computer Science and Engineering Student <br />
            <span className="gradient-text">& Full-Stack Developer</span>
          </h2>
          <p className="hero-description">
            I build scalable, responsive, and user-friendly Applications.
            Passionate about coding, problem-solving, and creating meaningful digital experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <FaArrowRight />
            </a>
            <a href="#resume" className="btn btn-secondary">
              Download Resume <FaDownload />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent 40%);
        }

        .hero-subtitle {
          color: var(--accent-color);
          font-weight: 600;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .hero-role {
          font-size: 2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .gradient-text {
          background: linear-gradient(to right, var(--text-primary), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          max-width: 600px;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .btn-primary {
          background: var(--accent-color);
          color: white;
        }

        .btn-primary:hover {
          background: var(--accent-hover);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-role {
            font-size: 1.5rem;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
