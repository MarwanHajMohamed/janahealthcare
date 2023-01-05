import React, {useState} from 'react'
import '../css/navbar.css'
import Logo from '../css/images/JHC_Logo_Navbar.png'
import { Link } from 'react-scroll'

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
                <Link 
                to='home'
                spy={true} 
                smooth={true} 
                duration={500}
                offset={-80}>
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <button className="toggleIcon" onClick={toggleNav}>
                <i className={"fa-solid "  + (toggle ? "fa-x" : "fa-bars")}></i>
            </button>
            <div className={"collapse" ? "false" : "true"}>
                <div className="navbar-list">
                    <li className='services'>
                        <button>
                            <Link 
                            to='services'
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            offset={-100}>
                                Services
                            </Link>
                        </button>
                    </li>
                    <li className='about'>
                        <button>
                            <Link 
                            to='about'
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            offset={-70}>
                                About
                            </Link>
                        </button>
                    </li>
                    {/* <li className='testimonials'>
                        <button>Testimonials</button>
                    </li> */}
                    <li className='contact'>
                        <button>
                            <Link 
                            to='contact'
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            offset={-70}>
                                Contact
                            </Link>
                        </button>
                    </li>
                </div>
                
            </div>
            <div className="navbar-list-phone">
                <div className={toggle ? "navbar-list-container" : "collapse"}>
                    <li className='services'>
                        <button>
                            <Link 
                            to='services'
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            offset={-130}
                            onClick={toggleNav}>
                                Services
                            </Link>
                        </button>
                    </li>
                    <li className='about'>
                        <button>
                            <Link 
                            to='about'
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            offset={-110}
                            onClick={toggleNav}>
                                About
                            </Link>
                        </button>
                    </li>
                    {/* <li className='testimonials'>
                        <button>Testimonials</button>
                    </li> */}
                    <li className='contact'>
                        <button>
                            <Link 
                            to='contact'
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            offset={-110}
                            onClick={toggleNav}>
                                Contact
                            </Link>
                        </button>
                    </li>
                </div>
            </div>
        </div>
    </>
  )
}
