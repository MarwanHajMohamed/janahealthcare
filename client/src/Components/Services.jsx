import React from 'react'
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

export default function Services() {

  const sliderDermalFiller = {
    original: {
        url: DermalFiller2,
        title: 'After'
    },
    modified: {
        url: DermalFiller1,
        title: 'Before'
    }
  };

  const sliderWrinkleTreatment = {
    original: {
        url: WrinkleTreatment2,
        title: 'After'
    },
    modified: {
        url: WrinkleTreatment1,
        title: 'Before'
    }
  };

  const sliderAcneTreatment = {
    original: {
        url: AcneTreatment2,
        title: 'After'
    },
    modified: {
        url: AcneTreatment1,
        title: 'Before'
    }
  };

  const sliderHairTreatment = {
    original: {
        url: HairTreatment2,
        title: 'After'
    },
    modified: {
        url: HairTreatment1,
        title: 'Before'
    }
  };

  return (
    <div className='services-wrapper'>
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
        
        <Slider {...sliderDermalFiller}/>
      </div>
      
      <div className="service-container">
        
        <Slider {...sliderWrinkleTreatment}/>
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
        <Slider {...sliderAcneTreatment}/>
      </div>

      <div className="service-container">
        
        <Slider {...sliderHairTreatment}/>
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
