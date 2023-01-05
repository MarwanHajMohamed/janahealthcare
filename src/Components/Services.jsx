import React, { useCallback } from 'react'
import '../css/services.css'

import DermalFiller1 from '../css/images/DermalFiller.png'
import DermalFiller2 from '../css/images/DermalFiller1.png'

import WrinkleTreatment1 from '../css/images/WrinkleTreatmentBefore.png'
import WrinkleTreatment2 from '../css/images/WrinkleTreatmentAfter.png'

import AcneTreatment1 from '../css/images/AcneTreatmentBefore.png'
import AcneTreatment2 from '../css/images/AcneTreatmentAfter.png'

import HairTreatment1 from '../css/images/HairTreatmentBefore.png'
import HairTreatment2 from '../css/images/HairTreatmentAfter.png'

import Slider from './Slider/Slider'

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from "react-compare-slider";

export default function Services({ style, ...props }) {

  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );
  return (
    <div className='services-wrapper' id='services'>
      <div className="services-title">Services</div>
      <div className="service-container dermalFiller-container">
        <div className="description-container dermalFiller">
          <div className="title dermalFiller"><span>Dermal</span>Filler</div>
          {/* <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt pariatur 
            impedit. In numquam quod non eveniet laboriosam corporis cum, accusantium est quaerat aperiam eaque 
            quidem eum vero enim quasi.
          </div> */}
        </div>
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
              src={DermalFiller1}
              alt="one"
            />
          }

          itemTwo={
            <ReactCompareSliderImage
              src={DermalFiller2}
              alt="two"
            />
          }

          onPositionChange={handlePositionChange}

          style={{
            display: "flex",
            width: "100%",
            "border-radius": "15px",
            "box-shadow": "0px 0px 0px 3px white, 0px 0px 0px 5px black",
            ...style
          }}
        />
      </div>
      
      <div className="service-container">
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
              src={WrinkleTreatment1}
              alt="one"
            />
          }

          itemTwo={
            <ReactCompareSliderImage
              src={WrinkleTreatment2}
              alt="two"
            />
          }

          onPositionChange={handlePositionChange}

          style={{
            display: "flex",
            width: "100%",
            "border-radius": "15px",
            "box-shadow": "0px 0px 0px 3px white, 0px 0px 0px 5px black",
            ...style
          }}
        />
        <div className="description-container wrinkleTreatment">
          <div className="title wrinkleTreatment">Wrinkle<span>Treatment</span></div>
          {/* <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt pariatur 
            impedit. In numquam quod non eveniet laboriosam corporis cum, accusantium est quaerat aperiam eaque 
            quidem eum vero enim quasi.
          </div> */}
        </div>
      </div>

      <div className="service-container">
        <div className="description-container acneTreatment">
          <div className="title acneTreatment"><span>Acne</span>Treatment</div>
          {/* <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt pariatur 
            impedit. In numquam quod non eveniet laboriosam corporis cum, accusantium est quaerat aperiam eaque 
            quidem eum vero enim quasi.
          </div> */}
        </div>
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
              src={AcneTreatment1}
              alt="one"
            />
          }

          itemTwo={
            <ReactCompareSliderImage
              src={AcneTreatment2}
              alt="two"
            />
          }

          onPositionChange={handlePositionChange}

          style={{
            display: "flex",
            width: "100%",
            "border-radius": "15px",
            "box-shadow": "0px 0px 0px 3px white, 0px 0px 0px 5px black",
            ...style
          }}
        />
      </div>

      <div className="service-container">
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
              src={HairTreatment1}
              alt="one"
            />
          }

          itemTwo={
            <ReactCompareSliderImage
              src={HairTreatment2}
              alt="two"
            />
          }

          onPositionChange={handlePositionChange}

          style={{
            display: "flex",
            width: "100%",
            "border-radius": "15px",
            "box-shadow": "0px 0px 0px 3px white, 0px 0px 0px 5px black",
            ...style
          }}
        />
        <div className="description-container hairTreatment">
          <div className="title hairTreatment">Hair<span>Treatment</span></div>
          {/* <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt pariatur 
            impedit. In numquam quod non eveniet laboriosam corporis cum, accusantium est quaerat aperiam eaque 
            quidem eum vero enim quasi.
          </div> */}
        </div>
      </div>
      
    </div>
  )
}
