import React, { useState } from "react";
import { Link } from "react-router-dom";  
import "../App.css";

import img1 from "../assets/13.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.jpg";
import img22 from "../assets/22.jpg";
import img23 from "../assets/23.jpg";
import img24 from "../assets/24.jpg";
import img25 from "../assets/25.jpg";
import img26 from "../assets/26.jpg";
import img27 from "../assets/27.jpg";
import img28 from "../assets/28.jpg";
import img29 from "../assets/29.jpg";
import img30 from "../assets/30.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30
];

const Allimages = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="allimages-page">
      <h1 className="allimages-title">✨ My Works Gallery ✨</h1>

      {/* Grid of images */}
      <div className="images-grid">
        {images.map((src, idx) => (
          <div 
            className="image-card" 
            key={idx} 
            onClick={() => setSelectedImg(src)} 
          >
            <img src={src} alt={`work-${idx}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">✖</span>
          <img 
            src={selectedImg} 
            alt="enlarged-work" 
            className="lightbox-img" 
          />
        </div>
      )}

      {/* ⬅ Back Button at Bottom-Right */}
      <Link to="/experience" className="resume-btn back-fixed-btn">
        Back
      </Link>
    </div>
  );
};

export default Allimages;