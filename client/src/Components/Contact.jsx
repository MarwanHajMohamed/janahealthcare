import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import axios from "axios";
import "../css/contact.css";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Dropdown = ({ open, trigger, menu }) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {menuItem}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("Select an enquiry...");
  const [body, setBody] = useState("");
  const treatments = [
    "Dermal Filler",
    "Wrinkle Treatment",
    "Hair Treatment",
    "Acne Treatment",
    "Other",
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleBody = (e) => {
    setBody(e);
  };

  const handleMenu = (booking) => {
    setBookType(booking);
    setOption(booking);
    setOpen(false);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("10:00");
  const [error, setError] = useState("");
  const [bookType, setBookType] = useState("");

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("gmail", "jhc_template", e.target, "tSO4dpMx8By91j5Ej")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  const book = (e) => {
    e.preventDefault();
    if (firstName === "") {
      setError("fname");
    }
    if (
      firstName === "" ||
      phone === "" ||
      email === "" ||
      date === "" ||
      time === "" ||
      option === "Select an enquiry..."
    ) {
    } else {
      axios
        .post("http://localhost:8080/user", {
          firstname: firstName,
          lastname: lastName,
          email: email,
          phonenumber: phone,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));

      axios
        .post("http://localhost:8080/booking", {
          clientID: 1,
          bookingType: option,
          bookingTime: time,
          bookingDate: date,
          moreInfo: "",
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">Get in Touch</div>
      <div className="content">
        {/* <form onSubmit={book}>
          <div className="form-container">
            <div className="form">
              <TextField
                id="standard-basic"
                label="First name"
                variant="standard"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Last name"
                variant="standard"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Phone number"
                variant="standard"
                type="tel"
                error={error === "tel" ? true : false}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form">
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
                label="Booking date"
                variant="standard"
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                InputProps={{
                  inputProps: { min: new Date().toISOString().split("T")[0] },
                }}
                required
              />
              <TextField
                id="standard-basic"
                label="Booking time"
                variant="standard"
                type="time"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                required
              />
            </div>
            <FormControl fullWidth variant="standard" id="dropdown" required>
              <InputLabel id="demo-simple-select-label">
                Select enquiry
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select enquiry"
              >
                {treatments.map((option) => {
                  return (
                    <MenuItem
                      type="button"
                      value={option}
                      onClick={(e) => handleMenu(e.target.value)}
                    >
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <button type="submit" className="submit">
            Make a booking
          </button>
        </form> */}
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
          <div className="contact-details">
            <div className="phone">+44 7965 692349</div>
            <div className="email">khajmohamed@yahoo.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
