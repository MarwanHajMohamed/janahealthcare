import React from 'react'
import '../css/about.css'
import Khaled2 from '../css/images/Khaled2.png'

export default function About() {
  return (
    <div className='about-container'>
      <div className="about-title">About</div>
      <div className="about-wrapper">
        <div className="img-container">

        <img src={Khaled2} alt="" />
        </div>
        
        <div className="description-wrapper">
          <div className="description">
            With over 25 years of experience in aesthetic 
            medicine, Dr Khaled Haj Mohamed is establishing JHC, a new clinic which 
            guarantees to provide the highest quality treatment for all patients. <br></br>
            <br></br>In JHC, a wide range of treatments are provided:
          </div>

          <div className="blobs-container">
            <div className="blob 1">
                <div className="blob-text">Dermal<br></br> Filler</div>
              </div>
              <div className="blob 2">
                <div className="blob-text">Wrinkle<br></br> Treatment</div>
              </div>
              <div className="blob 3">
                <div className="blob-text">Acne<br></br> Treatment</div>
              </div>
              <div className="blob 4">
                <div className="blob-text">Hair<br></br> Treatment</div>
              </div>
          </div>

          </div>
      </div>
    </div>
  )
}
