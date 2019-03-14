import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="searchBarContainer">
      <div className="leftPart">
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/instagram-new.png"
          height="24px"
          width="24px"
        />
        <div className="dash" />
        <img
          src="https://soundwave.co.uk/cms/resources/blog/top-tips-on-maximising-your-instagram-obsession-ndash-and-making-it-work-for-your-business-430.jpg"
          height="29px"
          width="103px"
        />
      </div>

      <div className="centerPart">
        <div className="searchBar">
          <img
            className="magnifyGlass"
            src="https://img.icons8.com/ios/32/000000/search-filled.png"
            height="10px"
            width="10px"
          />
          <p>Search</p>
        </div>
      </div>

      <div className="rightPart">
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/compass.png"
          height="24px"
          width="24px"
        />
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/hearts.png"
          height="24px"
          width="24px"
        />
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/contacts.png"
          height="24px"
          width="24px"
        />
      </div>
    </div>
  );
};

export default SearchBar;
