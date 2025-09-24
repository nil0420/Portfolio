import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircularGallery from "./CircularGallery";
import "../App.css";
import { trefoil } from "ldrs";

trefoil.register();

const Experience = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="experience-page">

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

     
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>

      
      <div className="experience-sections">
      
        <section className="company-block">
          <h2 className="company-title">Pentachrome Technologies Pvt. Ltd</h2>
          <ul className="company-points">
            <li>
              Led frontend development of healthcare platform <b>Soft Clinic</b> for doctors, patients & admins.
            </li>
            <li>
              Delivered responsive, scalable UI with <b>ReactJS</b> & <b>CSS3</b> ensuring load-time optimization.
            </li>
            <li>Integrated Google, Facebook & Outlook authentication.</li>
            <li>
              Performed performance audits with Google Lighthouse for fast, SEO‑compliant UX.
            </li>
            <li>Collaborated with backend engineers to connect REST APIs securely.</li>
          </ul>
        </section>

      
        <section className="company-block">
          <h2 className="company-title">Ecostance</h2>
          <ul className="company-points">
            <li>
              Partnered with product/design teams to create intuitive UI increasing workflow efficiency.
            </li>
            <li>
              Applied <b>mobile‑first design</b> for adaptive layouts.
            </li>
            <li>Built modular React components to simplify logic & reuse code effectively.</li>
            <li>Conducted peer code reviews & sprint retrospectives.</li>
            <li>Integrated APIs with optimized data handling for real‑time efficiency.</li>
          </ul>
        </section>


        <section className="company-block">
          <h2 className="company-title">Winupskill</h2>
          <ul className="company-points">
            <li>Developed a scalable <b>admin panel</b> for managing content, users & system configs.</li>
            <li>Implemented structured workflows for educational course material.</li>
            <li>Built <b>role‑based access control</b> with modern UI.</li>
            <li>Created reusable React components reducing redundancy across modules.</li>
            <li>Architected official Winupskill website for responsive browsing with modern styling.</li>
          </ul>
        </section>

       
        <section className="company-block">
          <h2 className="company-title">Delostyle Studios (Contractual)</h2>
          <ul className="company-points">
            <li>Delivered UI for healthcare project <b>AKunah</b>.</li>
            <li>Built technical showcase & brand portfolio site <b>Effiel</b>.</li>
            <li>Designed & developed <b>Delostyle official company website</b>.</li>
            <li>Ensured pixel‑perfect design & responsive web builds.</li>
          </ul>
        </section>
      </div>

  
      <div className="experience-buttons">
       
        <Link to="/" className="resume-btn back-btn">
          Back
        </Link>

        
        <Link to="/allimages" className="resume-btn access-btn">
          Access All Photos
        </Link>
      </div>
    </div>
  );
};

export default Experience;