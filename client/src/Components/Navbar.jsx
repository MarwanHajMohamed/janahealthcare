import React, { useState } from "react";
import "../css/navbar.css";
import Logo from "../css/images/JHC_Logo_Navbar.png";
import { Link } from "react-scroll";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import { TextField } from "@mui/material";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const toggleNav = () => {
    const state = toggle;
    setToggle(!state);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 650) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const [openRegister, setOpenRegister] = useState(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (firstName === "" || phone === "" || email === "") {
    } else if (password !== confPassword) {
      setError("Passwords do not match!");
    } else {
      axios
        .post("http://localhost:8080/user", {
          firstname: firstName,
          lastname: lastName,
          email: email,
          phonenumber: phone,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const login = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    axios
      .post("http://localhost:8080/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Logged in!");
        } else {
          alert("Incorrect");
        }
      })
      .catch((err) => {
        alert("Invalid email or password");
      });
  };

  return (
    <>
      <Modal open={openLogin} onClose={handleCloseLogin} className="modal">
        <Box className="login-modal">
          <div className="login-container">
            <div className="login-logo">
              <img src={Logo} alt="JHC Logo" />
            </div>
            <form onSubmit={login} className="login-form">
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="login">
                Login
              </button>
            </form>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openRegister}
        onClose={handleCloseRegister}
        className="modal"
      >
        <Box className="register-modal">
          <div className="register-container">
            <div className="login-logo">
              <img src={Logo} alt="JHC Logo" />
            </div>
            <form className="register-form-container" onSubmit={register}>
              <div className="register-form">
                <TextField
                  id="standard-basic"
                  label="First name"
                  variant="standard"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Last name"
                  variant="standard"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Phone number"
                  variant="standard"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Confirm password"
                  variant="standard"
                  type="password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  required
                />
              </div>
              <button className="login" type="submit">
                Register
              </button>
              <div className="error">{error}</div>
            </form>
          </div>
        </Box>
      </Modal>
      <div className={show ? "navbar-container" : "navbar-container hide"}>
        <div className="logo">
          <Link to="home" spy={true} smooth={true} duration={500} offset={-80}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <button className="toggleIcon" onClick={toggleNav}>
          <i className={"fa-solid " + (toggle ? "fa-x" : "fa-bars")}></i>
        </button>
        <div className={"collapse" ? "false" : "true"}>
          <div className="navbar-list">
            <li className="services">
              <button>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Services
                </Link>
              </button>
            </li>
            <li className="about">
              <button>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  About
                </Link>
              </button>
            </li>
            {/* <li className='testimonials'>
                        <button>Testimonials</button>
                    </li> */}
            <li className="contact">
              <button>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Contact
                </Link>
              </button>
            </li>
            {/* <li className="register">
              <button onClick={handleOpenRegister}>Register</button>
            </li>
            <li className="login">
              <button onClick={handleOpenLogin}>Login</button>
            </li> */}
          </div>
        </div>
        <div className="navbar-list-phone">
          <div className={toggle ? "navbar-list-container" : "collapse"}>
            <li className="services">
              <button>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-130}
                  onClick={toggleNav}
                >
                  Services
                </Link>
              </button>
            </li>
            <li className="about">
              <button>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-110}
                  onClick={toggleNav}
                >
                  About
                </Link>
              </button>
            </li>
            {/* <li className='testimonials'>
                        <button>Testimonials</button>
                    </li> */}
            <li className="contact">
              <button>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-110}
                  onClick={toggleNav}
                >
                  Contact
                </Link>
              </button>
            </li>
            {/* <li className="login">
              <button>Login</button>
            </li>
            <li className="register">
              <button>Register</button>
            </li> */}
          </div>
        </div>
      </div>
    </>
  );
}
