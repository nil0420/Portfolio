import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LiquidEther from "./LiquidEther";
import "../App.css";
import profile from "../assets/1.jpg";
import resume from "../assets/React_Next_Developer_3yearEXP.pdf"; 
import { trefoil } from "ldrs";

trefoil.register();

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-container">
       
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <l-trefoil
            size="60"
            stroke="6"
            stroke-length="0.20"
            bg-opacity="0.1"
            speed="1.4"
            color="black"
          ></l-trefoil>
        </div>
      )}

      
      <div className="background">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={50}
          cursorSize={40}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

   
      <div className="content">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="nav-right">
            <Link to="/">Home</Link>
            
            <a
              href={resume}
              download="Shankhanil_Sadhak_Resume.pdf"
              className="resume-btn"
            >
              Resume
            </a>
          </div>
        </nav>

        
        <section className="hero">
          <h1>
            Hi! I’m <span className="highlight">Shankhanil Sadhak</span>
          </h1>
          <p className="subtitle">
            I design and build multi-tenant web applications.
          </p>
        </section>

      
        <section className="about">
          <img src={profile} alt="profile" className="profile-pic" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a software engineer who creates exceptional digital
              products. I’ve spent a year building and scaling applications
              with Laravel and React with Typescript.
            </p>
          </div>
        </section>

     
        <section id="experience" className="stats">
          <div className="card">
            <i className="fas fa-image"></i>
            <h3>12</h3>
            <p>Projects</p>
          </div>
          <div className="card">
            <i className="fas fa-briefcase"></i>
            <h3>2</h3>
            <p>Companies</p>
          </div>
          <div className="card">
            <i className="fas fa-user"></i>
            <h3>12</h3>
            <p>Technology</p>
          </div>
          <div className="card">
            <i className="fas fa-file"></i>
            <h3>3 Years</h3>
            <p>Experience</p>
          </div>
        </section>

  
        <footer className="footer">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;