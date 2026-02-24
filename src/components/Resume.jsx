import React from 'react';
import { FaBriefcase, FaUniversity, FaDownload } from 'react-icons/fa';

const Resume = () => {
    return (
        <section id="resume" className="section bg-secondary">
            <div className="container">
                <div className="section-header-resume">
                    <h2 className="section-title" style={{ marginBottom: 0 }}>Experience & <span>Education</span></h2>
                    <a href="/resume.pdf" download className="resume-btn">
                        Download Resume <FaDownload />
                    </a>
                </div>

                <div className="timeline">
                    {/* Experience Item */}
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <FaBriefcase />
                        </div>
                        <div className="timeline-content">
                            <span className="date">Oct 2025</span>
                            <h3 className="title">Full Stack Developer</h3>
                            <span className="subtitle">BusTracker Pro (Project)</span>
                            <p className="description">
                                Developed a Progressive Web App for real-time intercity bus tracking.
                                Handled backend logic and Firebase integration.
                            </p>
                        </div>
                    </div>

                    {/* Education Item */}
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <FaUniversity />
                        </div>
                        <div className="timeline-content">
                            <span className="date">Nov 2022 - May 2026</span>
                            <h3 className="title">B.Tech In Computer Science & Engineering</h3>
                            <span className="subtitle">Mss College of Engineering & Technology, Jalna</span>
                            <p className="description">
                                CGPA: 7.27. Active member of Coding Club.
                                Received Rank II in Robotics Competition at IIT Varanasi.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <FaUniversity />
                        </div>
                        <div className="timeline-content">
                            <span className="date">July 2020 - Feb 2022</span>
                            <h3 className="title">Science (PCM)</h3>
                            <span className="subtitle">AMD Junior College, Jalna</span>
                            <p className="description">
                                Percentage: 76.50%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .bg-secondary {
                    background-color: var(--bg-secondary);
                }
                
                .section-header-resume {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 4rem;
                    flex-wrap: wrap;
                    gap: 2rem;
                }

                .resume-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.8rem 1.5rem;
                    background: transparent;
                    border: 1px solid var(--accent-color);
                    color: var(--accent-color);
                    border-radius: 50px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }

                .resume-btn:hover {
                    background: var(--accent-color);
                    color: white;
                }

                .timeline {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .timeline::after {
                    content: '';
                    position: absolute;
                    width: 2px;
                    background: rgba(255,255,255,0.1);
                    top: 0;
                    bottom: 0;
                    left: 20px; /* Adjust based on icon size */
                    margin-left: -1px;
                }

                .timeline-item {
                    position: relative;
                    padding-left: 60px;
                    margin-bottom: 3rem;
                }

                .timeline-icon {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--bg-secondary);
                    border: 2px solid var(--accent-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-color);
                    z-index: 10;
                }

                .timeline-content {
                    background: var(--bg-color);
                    padding: 1.5rem;
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.05);
                }

                .timeline-content:hover {
                    border-color: rgba(255,255,255,0.1);
                }

                .date {
                    font-size: 0.85rem;
                    color: var(--accent-color);
                    font-weight: 600;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .title {
                    font-size: 1.25rem;
                    color: var(--text-primary);
                    margin-bottom: 0.2rem;
                }

                .subtitle {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    margin-bottom: 1rem;
                    display: block;
                }

                .description {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    font-size: 0.95rem;
                }
                
                @media (max-width: 768px) {
                    .section-header-resume {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Resume;
