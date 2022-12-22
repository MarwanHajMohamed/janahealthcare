import React, {useState} from 'react'
import '../css/navbar.css'
import Logo from '../css/images/JHC_Logo_Navbar.png'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    const toggleNav = () => {
        const state = toggle;
        setToggle(!state)
    }

  return (
    <>
        <div className="navbar-container">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <button className="toggleIcon" onClick={toggleNav}>
                <i className={"fa-solid "  + (toggle ? "fa-x" : "fa-bars")}></i>
            </button>
            <div className={"collapse" ? "false" : "true"}>
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
            <div className="navbar-list-phone">
                <div className={toggle ? "navbar-list-container" : "collapse"}>
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
    </>
  )
}
