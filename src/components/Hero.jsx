import React from "react";
import "../styles/hero.css";
import heroVideo from "../assets/hero-video.mp4"; 

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* Overlay Content */}
      <div className="hero-overlay">
        <h1>Hire Freelancers Instantly</h1>
        <p>
          WorkMania connects you with top freelancers in your area.
          Filter applicants by location and hire the perfect talent.
        </p>
        <button className="btn-primary">Post Your Project</button>
      </div>
    </section>
  );
}
