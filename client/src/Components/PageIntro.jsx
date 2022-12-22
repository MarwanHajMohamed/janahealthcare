import React from 'react'
import '../css/pageIntro.css'
import j from '../css/images/J.png'
import h from '../css/images/H.png'
import c from '../css/images/C.png'
import JHC from '../css/images/JHC.png'

export default function pageIntro() {
  return (
    <>
      <div className='pageIntro-container' id='home'>
        <div className="logo-intro">
          <div className="letters">
            <img className='letter j' src={j} alt="J" />
            <img className='letter h' src={h} alt="H" />
            <img className='letter c' src={c} alt="C" />
          </div>
          <img className="jhc" src={JHC} alt="Jana Healthcare" />

        </div>
      </div>
    </>
  )
}
