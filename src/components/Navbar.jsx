import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    // { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setNavOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={handleNavClick}>
          <RiCodeSSlashLine className="logo-icon" />
          <span>Uday.</span>
        </a>

        <div className={`nav-links ${navOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="menu-icon" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-height);
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
        }

        .logo span {
          color: var(--text-primary);
        }
        
        .logo-icon {
          color: var(--accent-color);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          font-weight: 500;
          color: var(--text-secondary);
        }

        .nav-links a:hover {
          color: var(--accent-color);
        }

        .menu-icon {
          display: none;
          font-size: 1.5rem;
          color: var(--text-primary);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: var(--nav-height);
            left: 0;
            width: 100%;
            height: calc(100vh - var(--nav-height));
            background: var(--bg-color);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
          }

          .nav-links.active {
            transform: translateX(0);
          }

          .menu-icon {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
