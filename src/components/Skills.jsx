import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiPostgresql, SiSupabase, SiTypescript } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "TypeScript", icon: <SiTypescript /> }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Python (Flask)", icon: <FaCode /> },
                { name: "MySQL", icon: <FaDatabase /> },
            ]
        },
        {
            title: "Languages",
            skills: [
                { name: "Python", icon: <FaCode /> },
                { name: "C++", icon: <FaCode /> },
                { name: "JavaScript", icon: <FaJs /> },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "VS Code", icon: <VscCode /> },
            ]
        }
    ];

    return (
        <section id="skills" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">My <span>Skills</span></h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .bg-secondary {
                    background-color: var(--bg-secondary);
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .skill-category {
                    background: var(--bg-color);
                    padding: 2rem;
                    border-radius: 16px;
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: transform 0.3s ease;
                }
                
                .skill-category:hover {
                    transform: translateY(-5px);
                    border-color: var(--accent-color);
                }

                .category-title {
                    text-align: center;
                    margin-bottom: 1.5rem;
                    font-size: 1.25rem;
                    color: var(--accent-color);
                }

                .skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    justify-content: center;
                }

                .skill-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.8rem;
                    background: rgba(255,255,255,0.03);
                    border-radius: 8px;
                    min-width: 80px;
                    transition: background 0.3s ease;
                }

                .skill-item:hover {
                    background: rgba(255,255,255,0.08);
                }

                .skill-icon {
                    font-size: 2rem;
                    color: var(--text-primary);
                }
                
                .skill-item:hover .skill-icon {
                    color: var(--accent-color);
                }

                .skill-name {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }
            `}</style>
        </section>
    );
};

export default Skills;
