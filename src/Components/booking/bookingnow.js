import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./bookingnow.css";
import Paper from "@mui/material/Paper";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const BookingNow = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const [carType, setCarType] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    if (
      carType &&
      pickUpLocation &&
      dropOffLocation &&
      pickUpDate &&
      dropOffDate
    ) {
      // All fields are filled, show success message
      setSuccessMessage("Check your email to confirm an order");
      setErrorMessage(null);
    } else {
      // Some fields are missing, show error message
      setErrorMessage("All fields are required!");
      setSuccessMessage(null);
    }
    console.log("errorMessage:", errorMessage);
    console.log("successMessage:", successMessage);
  };

  const paperStyles = {
    margin: "0 auto 10rem",
  };
  const iconStyles = {
    fontSize: 20,
    marginRight: 8,
  };

  return (
    <div id="booking__section" className="booking__section">
      <div className="container">
        <Paper elevation={5} style={paperStyles} data-aos="fade-up">
          <div className="book__content">
            <div className="book_content_box">
              <h2>Pick your car</h2>
              {errorMessage && (
                <p className={`error_message ${errorMessage ? "" : "hidden"}`}>
                  {errorMessage}&nbsp;&nbsp; <ClearOutlinedIcon />
                </p>
              )}
              {successMessage && (
                <p className={`booking_done ${successMessage ? "" : "hidden"}`}>
                  {successMessage}&nbsp;&nbsp; <ThumbUpAltOutlinedIcon />
                </p>
              )}
              <form className="box_form" onSubmit={handleSubmit}>
                <div className="box_form_car_type">
                  <label>
                    <DirectionsCarFilledOutlinedIcon style={iconStyles} />
                    Select Your Car Type&nbsp;<b>*</b>
                  </label>
                  <select
                    value={carType}
                    onChange={handleInputChange(setCarType)}
                    required
                  >
                    <option>Select your car type</option>
                    <option>Audi a1</option>
                    <option>VW Golf 6</option>
                    <option>Toyota Aygo</option>
                    <option>BMW 320</option>
                    <option>Mercedes-Benz GLK</option>
                    <option>Lexus NX300h</option>
                  </select>
                </div>
                <div className="box_form_car_type">
                  <label>
                    <LocationOnOutlinedIcon style={iconStyles} />
                    Pick-up &nbsp;<b>*</b>
                  </label>
                  <select
                    value={pickUpLocation}
                    onChange={handleInputChange(setPickUpLocation)}
                    required
                  >
                    <option>Select pick up location</option>
                    <option>Bucharest</option>
                    <option>Cluj</option>
                  </select>
                </div>
                <div className="box_form_car_type">
                  <label>
                    <LocationOnOutlinedIcon style={iconStyles} />
                    Drop-Off&nbsp;<b>*</b>
                  </label>
                  <select
                    value={dropOffLocation}
                    onChange={handleInputChange(setDropOffLocation)}
                    required
                  >
                    <option>Select Drop-off location</option>
                    <option>Bucharest</option>
                    <option>Cluj</option>
                  </select>
                </div>
                <div className="box_form_car_time">
                  <label>
                    <CalendarMonthOutlinedIcon style={iconStyles} />
                    Pick-up&nbsp;<b>*</b>
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={pickUpDate}
                      onChange={(date) => setPickUpDate(date)}
                      required
                    />
                  </LocalizationProvider>
                </div>
                <div className="box_form_car_time">
                  <label>
                    <CalendarMonthOutlinedIcon style={iconStyles} />
                    Drop-Off&nbsp;<b>*</b>
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={dropOffDate}
                      onChange={(date) => setDropOffDate(date)}
                      required
                    />
                  </LocalizationProvider>
                </div>
                <button className="btn-pick-car" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default BookingNow;
