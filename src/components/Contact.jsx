import React, { useState, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, message: '', error: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: '', error: false });

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus({ loading: false, message: 'Message sent successfully!', error: false });
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus({ loading: false, message: 'Failed to send message. Please try again.', error: true });
                }
            );
    };

    return (
        <section id="contact" className="section container">
            <h2 className="section-title">Get in <span>Touch</span></h2>

            <div className="contact-container">
                <div className="contact-info">
                    <h3 className="contact-subtitle">Let's Connect</h3>
                    <p className="contact-desc">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        feel free to drop me a message!
                    </p>

                    <div className="contact-methods">
                        <a href="mailto:udaygumre@gmail.com" className="contact-item">
                            <FaEnvelope className="icon" />
                            <span>udaygumre@gmail.com</span>
                        </a>
                        <a href="tel:+917972412092" className="contact-item">
                            <FaPhone className="icon" style={{ transform: 'rotate(90deg)' }} />
                            <span>+91 7972412092</span>
                        </a>
                        <a href="https://github.com/udaygumre20" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <FaGithub className="icon" />
                            <span>github.com/udaygumre20</span>
                        </a>
                        <a href="https://linkedin.com/in/udaygumre" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <FaLinkedin className="icon" />
                            <span>linkedin.com/in/udaygumre</span>
                        </a>
                    </div>
                </div>

                <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="user_name" // Added name attribute
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="user_email" // Added name attribute
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message" // Added name attribute
                            rows="5"
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-submit" disabled={status.loading}>
                        {status.loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {status.message && (
                        <p style={{
                            marginTop: '1rem',
                            color: status.error ? '#ff6b6b' : '#51cf66',
                            textAlign: 'center'
                        }}>
                            {status.message}
                        </p>
                    )}
                </form>
            </div>

            <style>{`
                .contact-container {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 4rem;
                }

                .contact-subtitle {
                    font-size: 1.5rem;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }

                .contact-desc {
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }

                .contact-methods {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: var(--text-primary);
                    font-weight: 500;
                    padding: 1rem;
                    background: var(--bg-secondary);
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: transform 0.2s ease, border-color 0.2s ease;
                }

                .contact-item:hover {
                    transform: translateX(5px);
                    border-color: var(--accent-color);
                    color: var(--accent-color);
                }

                .icon {
                    font-size: 1.5rem;
                    color: var(--accent-color);
                }

                .contact-form {
                    background: var(--bg-secondary);
                    padding: 2rem;
                    border-radius: 16px;
                    border: 1px solid rgba(255,255,255,0.05);
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: var(--text-primary);
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                input, textarea {
                    width: 100%;
                    padding: 1rem;
                    background: var(--bg-color);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-family: inherit;
                    transition: border-color 0.3s ease;
                }

                input:focus, textarea:focus {
                    outline: none;
                    border-color: var(--accent-color);
                }

                .btn-submit {
                    width: 100%;
                    padding: 1rem;
                    background: var(--accent-color);
                    color: white;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    border: none;
                    transition: background 0.3s ease, opacity 0.3s ease;
                }

                .btn-submit:hover:not(:disabled) {
                    background: var(--accent-hover);
                }

                .btn-submit:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                @media (max-width: 768px) {
                    .contact-container {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
