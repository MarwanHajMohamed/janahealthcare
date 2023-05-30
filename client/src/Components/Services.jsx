import React, { useCallback, useState } from "react";
import "../css/services.css";
import DermalFiller1 from "../css/images/DermalFiller.png";
import DermalFiller2 from "../css/images/DermalFiller1.png";

import WrinkleTreatment1 from "../css/images/WrinkleTreatmentBefore.png";
import WrinkleTreatment2 from "../css/images/WrinkleTreatmentAfter.png";

import AcneTreatment1 from "../css/images/AcneTreatmentBefore.png";
import AcneTreatment2 from "../css/images/AcneTreatmentAfter.png";

import HairTreatment1 from "../css/images/HairTreatmentBefore.png";
import HairTreatment2 from "../css/images/HairTreatmentAfter.png";

import servicedescription from "../json/service-description.json";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function NewServices({ style, ...props }) {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  const [image1, setImage1] = useState(DermalFiller1);
  const [image2, setImage2] = useState(DermalFiller2);
  const [description, setDescription] = useState(servicedescription[0].dermal);
  const [open, setOpen] = useState("dermal");

  const handleSliderImage = (image1, image2) => {
    setImage1(image1);
    setImage2(image2);
  };

  return (
    <div className="services-page-container" id="services">
      <div className="title">Services</div>
      <div className="services-container">
        <div className="service-buttons-container">
          <button
            className={
              open === "dermal" ? "service-button show" : "service-button"
            }
            onClick={() => {
              handleSliderImage(DermalFiller1, DermalFiller2);
              setOpen("dermal");
              setDescription(servicedescription[0].dermal);
            }}
          >
            <div>Dermal Filler</div>
          </button>
          <button
            className={
              open === "wrinkle" ? "service-button show" : "service-button"
            }
            onClick={() => {
              handleSliderImage(WrinkleTreatment1, WrinkleTreatment2);
              setOpen("wrinkle");
              setDescription(servicedescription[1].wrinkle);
            }}
          >
            <div>Wrinkle Treatment</div>
          </button>
          <button
            className={
              open === "acne" ? "service-button show" : "service-button"
            }
            onClick={() => {
              handleSliderImage(AcneTreatment1, AcneTreatment2);
              setOpen("acne");
              setDescription(servicedescription[0].acne);
            }}
          >
            <div>Acne Treatment</div>
          </button>
          <button
            className={
              open === "hair" ? "service-button show" : "service-button"
            }
            onClick={() => {
              handleSliderImage(HairTreatment1, HairTreatment2);
              setOpen("hair");
              setDescription(servicedescription[0].hair);
            }}
          >
            <div>Hair Treatment</div>
          </button>
        </div>
        <div className="service-show-container">
          <div className="service">
            <ReactCompareSlider
              {...props}
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    border: 0,
                  }}
                />
              }
              itemOne={
                <ReactCompareSliderImage
                  src={image1}
                  alt="one"
                  className="slider-image"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={image2}
                  alt="two"
                  className="slider-image"
                />
              }
              onPositionChange={handlePositionChange}
              style={{
                display: "flex",
                width: "400px",
                "border-radius": "15px",
                ...style,
              }}
            />
            <div className="description-container">
              <div className="title">
                {open === "dermal"
                  ? open[0].toUpperCase() + open.slice(1) + " Filler"
                  : open[0].toUpperCase() + open.slice(1) + " Treatment"}
              </div>
              <div className="description">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
