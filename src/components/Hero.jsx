import React from "react";
import "../styles/hero.css";
import heroVideo from "../assets/hero-video.mp4"; // Make sure the file exists in assets

export default function Hero() {
  return (
    <section className="hero">
      {/* Video Background */}
      <video className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
