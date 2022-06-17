import React from "react";
import "../../styles/home/SearchForBook.scss";
import { Button } from 'react-bootstrap';

const SearchForBook = () => {
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
        <Button className="search_btn">Search</Button>
      </div>
    </div>
  );
};

export default SearchForBook;
