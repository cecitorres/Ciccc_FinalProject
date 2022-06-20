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
  room: 1
})

  const navigate = useNavigate();
  const handleSearchClick = () => {
    //  if() statement  <-----Write a condition later
    navigate("/available_room");
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
        </div>
        {/* Book for number of people */}
        <div className="search_item">
          <i className="fa-solid fa-users"></i>
          <span>{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
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
        {/* Search button */}
        <div className="search_container">
          <Button className="search_btn" onClick={handleSearchClick}>
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchForBook;
