import React from 'react';
import '../styles/legal.css';  // Create this CSS

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        {/* HEADER SPACING FOR FIXED NAVBAR */}
        <div className="legal-spacer"></div>
        
        <div className="legal-content">
          <div className="legal-header">
            <h1>Terms of Service</h1>
            
          </div>

          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using WorkMania, you agree to be bound by these Terms 
              of Service. If you do not agree, please do not use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. User Accounts</h2>
            <p>
              You must provide accurate information when creating an account. You 
              are responsible for maintaining the confidentiality of your account.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Freelancer Services</h2>
            <p>
              WorkMania connects businesses with freelancers. We do not employ 
              freelancers and are not responsible for their work quality.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Payments</h2>
            <p>
              All payments are processed securely. WorkMania is not responsible for 
              payment disputes between clients and freelancers.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts for violation 
              of these terms at any time without notice.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Contact Us</h2>
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
