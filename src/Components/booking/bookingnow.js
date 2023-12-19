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
  const paperStyles = {
    margin: "0 auto 10rem",
  };
  const iconStyles = {
    fontSize: 20,
    marginRight: 8,
  };
  return (
    <div className="booking__section">
      <div className="container">
        <Paper elevation={5} style={paperStyles}>
          <div className="book__content">
            <div className="book_content_box">
              <h2>Pick your car</h2>
              <p className="error_message">
                All fields required! <ClearOutlinedIcon />
              </p>
              <p className="booking_done">
                Check your email to confirm an order
                <ThumbUpAltOutlinedIcon />
              </p>
              <form className="box_form">
                <div className="box_form_car_type">
                  <label>
                    <DirectionsCarFilledOutlinedIcon style={iconStyles} />
                    Select Your Car Type
                  </label>
                  <select>
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
                    Pick-up
                  </label>
                  <select>
                    <option>Select pick up location</option>
                    <option>Bucharest</option>
                    <option>Cluj</option>
                  </select>
                </div>
                <div className="box_form_car_type">
                  <label>
                    <LocationOnOutlinedIcon style={iconStyles} />
                    Drop-Of
                  </label>
                  <select>
                    <option>Select Drop-of location</option>
                    <option>Bucharest</option>
                    <option>Cluj</option>
                  </select>
                </div>
                <div className="box_form_car_time">
                  <label>
                    <CalendarMonthOutlinedIcon style={iconStyles} />
                    Pick-up
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </div>
                <div className="box_form_car_time">
                  <label>
                    <CalendarMonthOutlinedIcon style={iconStyles} />
                    Drop-Of
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
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
