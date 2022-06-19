import React from "react";
import "../../styles/home/SearchForBook.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchForBook = () => {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    //  if() statement  <-----Write a condition later
    navigate("/available_room");
  };

  return (
    <div className="search_container">
      {/* Book for date */}
      <div className="search_item">
        <i className="fa-solid fa-calendar-days"></i>
        <span>date to date</span>
      </div>
      {/* Book for number of people */}
      <div className="search_item">
        <i className="fa-solid fa-users"></i>
        <span>2 adults 2 children 1 room</span>
      </div>
      {/* Search button */}
      <div className="search_container">
        <Button className="search_btn" onClick={handleSearchClick}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchForBook;
