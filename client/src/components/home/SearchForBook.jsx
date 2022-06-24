import React, { useState } from "react";
import "../../styles/home/SearchForBook.scss";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { UserAuth } from "../../context/AuthContext";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";


const SearchForBook = ({ name, setBookingInfo }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  // Room type
  const [roomType, setRoomType] = useState("");

  // date
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // number of people
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 2,
    children: 0,
    room: 1,
  });

  // Minimum Stay
  const [minStay, setMinStay] = useState("");
  const [chooseRoom, setChooseRoom] = useState("");
  const difference = (day1, day2) => {
    return day2 - day1;
  };
  const stay = difference(
    date[0].startDate.getDate(),
    date[0].endDate.getDate()
  );

  const handleSearchClick = async () => {
    if (!user) {
      return navigate("/suggest_login");
    } else if (stay < 1) {
      setMinStay("Minimum stay is from 1 night");
      navigate("/");
    } else if (roomType === "") {
      setChooseRoom("Please select room type");
      navigate("/");
    } else if (user) {
      const response = await axios.post(
        "http://localhost:2000/api/v1/bookings",
        {
          startDate: date[0].startDate,
          endDate: date[0].endDate,
          guests: {
            adults: options.adults,
            children: options.children,
          },
          rooms: options.room,
          roomType: roomType,
          user: name,
          // userID
        }
      );
      setBookingInfo(response.data.data);
      return navigate("/booking");
    }
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <>
      <div className="search_container">
        {/* Book for date */}
        <div className="search_item">
          <i className="fa-solid fa-calendar-days"></i>
          <span
            className="date"
            onClick={() => setOpenDate(!openDate)}
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="search_date"
              minDate={new Date()}
            />
          )}
          {stay === 0 && minStay ? (
            <Alert variant="danger">{minStay}</Alert>
          ) : (
            ""
          )}
        </div>

        {/* Book for number of people */}
        <div className="search_item">
          <i className="fa-solid fa-users"></i>
          <span
            className="numberof_people"
            onClick={() => setOpenOptions(!openOptions)}
          >{`${options.adults} adults, ${options.children} children, ${options.room} room`}</span>
          {openOptions && (
            <div className="options">
              {/* adults */}
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adults", "d")}
                    disabled={options.adults <= 1}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adults}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adults", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* children */}
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                    disabled={options.children <= 0}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* room*/}
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                    disabled={options.room <= 1}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Room Options */}
        <div>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option>Open this select menu</option>
            <option value="semi_double">Semi Double</option>
            <option value="queen_room">Queen Room</option>
            <option value="twin_room">Twin Room</option>
            <option value="king_room">King Room</option>
            <option value="family_room">Family Room</option>
            <option value="premium_room">Premium Room</option>
          </Form.Select>
          {roomType === "" && chooseRoom ? (
            <Alert variant="danger">{chooseRoom}</Alert>
          ) : (
            ""
          )}
        </div>
        {/* Search button */}
        <div className="search_btn d-flex flex-column align-items-center justify-content-center">
          <Button className="search_btn" onClick={handleSearchClick}>
            Reserve
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchForBook;
