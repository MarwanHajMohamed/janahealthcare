import React from 'react'
import '../css/navbar.css'
import Logo from '../css/images/JHC_Logo_Navbar.png'

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <div className="navbar-container">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-list">
                <li className='services'>
                    <button>Services</button>
                </li>
                <li className='about'>
                    <button>About</button>
                </li>
                <li className='testimonials'>
                    <button>Testimonials</button>
                </li>
                <li className='contact'>
                    <button>Contact</button>
                </li>
            </div>
        </div>
    </div>
  )
}
