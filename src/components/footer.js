import React from "react";
import "./../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
   
        <div className="footer-logo">
          <strong>NumaraHealth.AI</strong>
        </div>

        <div className="footer-navigation">
          <ul>
            <li>HOME</li>
            <li>PRODUCT</li>
            <li>PRODUCT RESEARCH</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <div className="contact-item">
            <span className="contact-icon"></span>
            <span>9390520858</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span>likithakinjangi3@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Tagline Section */}
      <div className="footer-tagline">
        <p>Good Products Solve Problems, Great Products Make Lives Better!</p>
      </div>
    </div>
  );
}

export default Footer;
