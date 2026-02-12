import React from "react";
import "../styles/cta.css";

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="cta-content">
        <h2>Find the Perfect Freelancer Instantly</h2>
        <p>
          Post your project and hire skilled professionals near you. WorkMania
          makes hiring fast, secure, and easy.
        </p>
        <button className="cta-btn">Post a Project Now</button> 
      </div>
      <div className="cta-shapes">
        <span className="shape shape-1"></span>
        <span className="shape shape-2"></span>
      </div>
    </section>
  );
}
