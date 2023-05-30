import React from "react";
import "../css/pageIntro.css";
import j from "../css/images/J.png";
import h from "../css/images/H.png";
import c from "../css/images/C.png";
import JHC from "../css/images/JHC.png";
import bg from "../css/images/JHCBackground.mp4";
import { Link } from "react-scroll";

export default function PageIntro() {
  return (
    <>
      <div className="pageIntro-container" id="home">
        <div className="video-container">
          <video autoPlay muted loop src={bg} className="bg-video"></video>
        </div>
        <div className="logo-intro">
          <div className="letters">
            <img className="letter j" src={j} alt="J" />
            <img className="letter h" src={h} alt="H" />
            <img className="letter c" src={c} alt="C" />
          </div>
          <img className="jhc" src={JHC} alt="Jana Healthcare" />
        </div>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-70}
          className="book-now-container"
        >
          <div className="book-now">Book now</div>
          <i className="fa-solid fa-chevron-down"></i>
          <i className="fa-solid fa-chevron-down two"></i>
        </Link>
      </div>
    </>
  );
}
