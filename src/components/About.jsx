import React from 'react';
import { FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-image-wrapper">
                    <img src="/profile.jpg" alt="Uday Gumre" className="about-image" />
                </div>

                <div className="about-content">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>About <span>Me</span></h2>

                    <p className="about-text">
                        I am a Final Year <strong>Computer Science and Engineering</strong> student with a passion for building full-stack applications that solve real-world problems.
                        My journey in tech has been driven by curiosity and a relentless desire to learn.
                    </p>

                    <p className="about-text">
                        I specialize in the <strong>MERN stack</strong> and modern web technologies. Beyond coding, I focus on writing clean, maintainable code and optimizing user experiences.
                        I am currently looking for internship and full-time opportunities where I can contribute and grow.
                    </p>

                    <div className="about-highlights">
                        <div className="highlight-item">
                            <FaCode className="highlight-icon" />
                            <div>
                                <h4>Full Stack</h4>
                                <p>Frontend & Backend dev</p>
                            </div>
                        </div>
                        <div className="highlight-item">
                            <FaLightbulb className="highlight-icon" />
                            <div>
                                <h4>Problem Solver</h4>
                                <p>Analytical mindset</p>
                            </div>
                        </div>
                        <div className="highlight-item">
                            <FaGraduationCap className="highlight-icon" />
                            <div>
                                <h4>Final Year</h4>
                                <p>Computer Science and Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-container {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 4rem;
                    align-items: center;
                }

                .about-image-wrapper {
                    position: relative;
                    width: 100%;
                    max-width: 400px; /* Constrain max width */
                    margin: 0 auto;
                    aspect-ratio: 1; /* Keep it square */
                }

                .about-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 20px;
                    border: 2px solid var(--accent-color);
                    display: block;
                }
                
                /* Decorative element behind image */
                .about-image-wrapper::before {
                    content: '';
                    position: absolute;
                    top: -15px;
                    left: -15px;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--accent-color);
                    border-radius: 20px;
                    z-index: -1;
                    opacity: 0.5;
                }

                .about-text {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    line-height: 1.8;
                }

                .about-text strong {
                    color: var(--text-primary);
                    font-weight: 600;
                }

                .about-highlights {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                .highlight-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background: var(--bg-secondary);
                    padding: 1rem;
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.05);
                }

                .highlight-icon {
                    font-size: 1.5rem;
                    color: var(--accent-color);
                }

                .highlight-item h4 {
                    font-size: 0.95rem;
                    font-weight: 600;
                    margin-bottom: 0.2rem;
                    color: var(--text-primary);
                }

                .highlight-item p {
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                }

                @media (max-width: 900px) {
                    .about-container {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .section-title {
                        text-align: center !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
