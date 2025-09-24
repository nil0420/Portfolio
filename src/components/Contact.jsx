import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LiquidEther from "./LiquidEther";
import "../App.css";
import { trefoil } from "ldrs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

trefoil.register();

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-container">
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

      <div className="contact-background">
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
        <section className="contact-hero">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            I’d love to hear from you. Let’s build something amazing together.
          </p>
        </section>

        <section className="contact-section">
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button className="send-btn">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="contact-item big-icon">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text">+91 8697212093</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text">
                shankhanilsadhak20@gmail.com
              </span>
            </div>
            <div className="contact-socials">
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="mailto:shankhanilsadhak20@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="#" aria-label="Portfolio Website">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Link to="/" className="resume-btnnHome contact-home-btn">
        Back
      </Link>
    </div>
  );
};

export default Contact;