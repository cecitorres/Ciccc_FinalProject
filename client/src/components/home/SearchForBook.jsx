import React, { useState } from "react";
import "../../styles/home/SearchForBook.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SearchForBook = () => {
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
    adult: 2,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("/available_room");
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
            />
          )}
        </div>

        {/* Book for number of people */}
        <div className="search_item">
          <i className="fa-solid fa-users"></i>
          <span className="numberof_people" onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
          {openOptions && (
            <div className="options">
              {/* adult */}
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                    disabled={options.adult <= 1}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
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

        {/* Search button */}
        <div className="search_btn d-flex flex-column align-items-center justify-content-center">
          <Button className="search_btn" onClick={handleSearchClick}>
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchForBook;
