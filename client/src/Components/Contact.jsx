import React from 'react';
import emailjs from 'emailjs-com'
import { useState } from 'react';
import Axios from "axios";
import '../css/contact.css';

import ReactQuill from 'react-quill'
import '../../node_modules/react-quill/dist/quill.snow.css'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Dropdown = ({ open, trigger, menu }) => {
    return (
      <div className="dropdown">
        {trigger}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">{menuItem}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [option, setOption] = useState("Select an enquiry...")
  const [time, setTime] = useState("Select time...")
  const [body, setBody] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenTime = () => {
    setOpenTime(!openTime);
  };

  const handleBody = e => {
    setBody(e);
  }

  const handleMenuOne = () => {
    setTypeBook("Dermal Filler");
    setOption("Dermal Filler")
    setOpen(false);
  };

  const handleMenuTwo = () => {
    setTypeBook("Wrinkle Treatment");
    setOption("Wrinkle Treatment")
    setOpen(false);
  };

  const handleMenuThree = () => {
    setTypeBook("Hair Treatment");
    setOption("Hair Treatment")
    setOpen(false);
  };

  const handleMenuFour = () => {
    setTypeBook("Acne Treatment");
    setOption("Acne Treatment")
    setOpen(false);
  };

  const handleMenuFive = () => {
    setOption("Other")
    setOpen(false);
  };

  const handleTime = e => {
    setTime(e)

  }

  const [nameBook, setNameBook] = useState('')
  const [emailBook, setEmailBook] = useState('')
  const [typeBook, setTypeBook] = useState('')
  const [numberBook, setNumberBook] = useState('')
  const [dateBook, setDateBook] = useState('')
  const [timeBook, setTimeBook] = useState('')
  const [startDate, setStartDate] = useState(new Date());

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'jhc_template', e.target, 'tSO4dpMx8By91j5Ej')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const book = () => {
    // if(nameBook === "" || emailBook === "" || typeBook === "Select an enquiry..." || dateBook === "") {

    // }
    Axios.post("http://localhost:5000/book", {
      name: nameBook,
      email: emailBook,
      type: typeBook,
      number: numberBook,
      date: dateBook,
      time: timeBook})
      .then((response) => {
        sendEmail();
    })
  }

  return (
    <div className='contact-container'>
      <div className="contact-title">Contact</div>
      <div className="content">
        {/* <div className="form-container">
            <div className="form">
              <div className="form-one">
                <label htmlFor="">
                    <div className="name">Full name:</div>
                    <input type="text" placeholder='Full name...' name='name'
                    onChange={e => {
                      setNameBook(e.target.value);
                    }}/>
                </label>
                <label htmlFor="">
                  <div className="email">E-mail</div> 
                  <input type="text" placeholder='Email...' name='e-mail'
                    onChange={e => {
                      setEmailBook(e.target.value);
                  }}/>
                </label>
                <label htmlFor="">
                  <div className="date">Date</div>
                  <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </label>
              </div>
              <div className="form-two">
                <label htmlFor="">
                  <div className="number">Phone Number</div> 
                  <input type="phone" placeholder='Phone number...'
                    onChange={e => {
                      setNumberBook(e.target.value);
                  }}/>
                </label>
                <div className="dropdown-container">
                  <div className="dropdown-wrapper">
                    <label htmlFor="" name="booking">{option}</label>
                    <Dropdown 
                      open={open}
                      trigger={<button className='dropdownBtn' onClick={handleOpen}><i className='fa-solid fa-arrow-down'></i></button>}
                      menu={[
                        <button onClick={handleMenuOne}>Dermal Filler</button>,
                        <button onClick={handleMenuTwo}>Wrinkle Treatment</button>,
                        <button onClick={handleMenuThree}>Hair Treatment</button>,
                        <button onClick={handleMenuFour}>Acne Treatment</button>,
                        <button onClick={handleMenuFive}>Other</button>,
                      ]}
                    />
                  </div>
                </div>
                  <div className="dropdown-container">
                  <div className="dropdown-wrapper">
                    <label htmlFor="" name="booking">{time}</label>
                    <Dropdown 
                      open={openTime}
                      trigger={<button className='dropdownBtn' onClick={handleOpenTime}><i className='fa-solid fa-arrow-down'></i></button>}
                      menu={[
                        <button value={time} onClick={handleTime}>10:00</button>,
                        <button value={time} onClick={handleTime}>10:30</button>,
                        <button value={time} onClick={handleTime}>11:00</button>,
                        <button value={time} onClick={handleTime}>11:30</button>,
                        <button value={time} onClick={handleTime}>12:00</button>,
                        <button value={time} onClick={handleTime}>12:30</button>,
                        <button value={time} onClick={handleTime}>13:00</button>,
                        <button value={time} onClick={handleTime}>13:30</button>,
                        <button value={time} onClick={handleTime}>14:00</button>,
                        <button value={time} onClick={handleTime}>14:30</button>,
                        <button value={time} onClick={handleTime}>15:00</button>,
                        <button value={time} onClick={handleTime}>15:30</button>,
                        <button value={time} onClick={handleTime}>16:00</button>,
                        <button value={time} onClick={handleTime}>16:30</button>,
                        <button value={time} onClick={handleTime}>17:00</button>,
                        <button value={time} onClick={handleTime}>17:30</button>,
                        <button value={time} onClick={handleTime}>18:00</button>
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="form-other">
                <ReactQuill value={body} onChange={handleBody}/>
              </div>
            </div>
            <button className='submit' onClick={book}>Book</button>
        </div> */}
        <div className="contact-details">
          <div className="phone-number">
            <div className="call-title">Call</div>
            <div className="call-wrapper">
              <div className="icon-circle">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="phone">+44 7965 692349</div>

            </div>
          </div>

          <div className="email-details">
            <div className="email-title">E-mail</div>
            <div className="email-wrapper">
              <div className="icon-circle">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="email">khajmohamed@yahoo.com</div>
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            title="iframe"
            frameBorder="0"
            scrolling="yes"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19817.186907858166!
                2d-0.7564008204415276!3d51.62049134783343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
                4f13.1!3m3!1m2!1s0x48766170830f8903%3A0x12bdf538d1a6c5b!2sHigh%20Wycombe%20
                HP11!5e0!3m2!1sen!2suk!4v1668209937548!5m2!1sen!2suk"
          />
        </div>
      </div>
    </div>
  )
}
