import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Uday Gumre. All rights reserved.
                </p>
                <p className="credits">
                    Made with <FaHeart className="heart-icon" /> and Passion.
                </p>
            </div>

            <style>{`
                .footer {
                    background: var(--bg-secondary);
                    padding: 2rem 0;
                    margin-top: 4rem;
                    border-top: 1px solid rgba(255,255,255,0.05);
                }

                .footer .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .copyright, .credits {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                }

                .credits {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .heart-icon {
                    color: #ef4444; /* Red for heart */
                    font-size: 0.8rem;
                }

                @media (max-width: 600px) {
                    .footer .container {
                        flex-direction: column;
                        gap: 1rem;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
