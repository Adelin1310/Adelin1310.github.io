// Footer.js

import React from 'react';
import './styles/Footer.css'; // Import your stylesheet

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Cu dragoste, de la bursucelul tau programator</p>
        <p>&copy; {new Date().getFullYear()} Adelin</p>
      </div>
    </footer>
  );
};

export default Footer;
