import React from 'react';
import '../styles/legal.css';

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        {/* HEADER SPACING FOR FIXED NAVBAR */}
        <div className="legal-spacer"></div>
        
        <div className="legal-content">
          <div className="legal-header">
            <h1>Privacy Policy</h1>
            <p>Last updated: February 10, 2026</p>
          </div>

          <div className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>We collect:</p>
            <ul>
              <li>Personal information (name, email, phone)</li>
              <li>Project details and preferences</li>
              <li>Payment information (processed securely)</li>
              <li>Usage data and analytics</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. How We Use Your Data</h2>
            <p>
              We use your information to provide our services, improve platform 
              functionality, and communicate with you about projects.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. 
              However, no system is 100% secure.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Your Rights</h2>
            <p>
              You can request access, correction, or deletion of your personal data 
              by contacting us.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Contact Us</h2>
            <p>
              11, Sri Devi Nagar, 1st Street, Kavundampalayam(Po),<br/>
              Coimbatore-642030, India<br/>
              Email: contact@workmania.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
