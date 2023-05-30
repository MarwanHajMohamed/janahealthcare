import React from "react";
import "../css/about.css";
import Khaled2 from "../css/images/Khaled2.png";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-title">About</div>
      <div className="about-wrapper">
        <div className="img-container">
          <img src={Khaled2} alt="" />
        </div>

        <div className="description-wrapper">
          <div className="description">
            With over 25 years of experience in aesthetic medicine, Dr Khaled
            Haj Mohamed is establishing JHC, a new clinic which guarantees to
            provide the highest quality treatment for all patients.
          </div>

          <div className="description">
            JHC is committed to providing the highest quality clinical services
            for a variety of cosmetic treatments, including dermal fillers, hair
            treatment, acne treatment, and wrinkle treatment. Dr Khaled is
            dedicated to ensuring that every patient receives personalized care
            that is tailored to their individual needs and preferences.
          </div>
        </div>
      </div>
    </div>
  );
}
