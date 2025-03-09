import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>Connect with me:</h4>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/harini-balamurugan-a27122325" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/harinii-b" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="mailto:harinib1803@gmail.com.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Harini B. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
