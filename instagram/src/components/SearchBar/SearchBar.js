import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="searchBarContainer">
      <div className="leftPart">
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/instagram-new.png"
          height="29px"
          width="29px"
          alt="instagram logo"
        />
        <div className="dash" />
        <img
          src="https://soundwave.co.uk/cms/resources/blog/top-tips-on-maximising-your-instagram-obsession-ndash-and-making-it-work-for-your-business-430.jpg"
          height="35px"
          width="103px"
          alt="instagram"
        />
      </div>

      <div className="centerPart">
        <div className="searchBar">
          <img
            className="magnifyGlass"
            src="https://img.icons8.com/ios/32/000000/search-filled.png"
            height="10px"
            width="10px"
            alt="magnify glass"
          />
          <p>Search</p>
        </div>
      </div>

      <div className="rightPart">
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/compass.png"
          height="29px"
          width="29px"
          alt="compass icon"
        />
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/hearts.png"
          height="29px"
          width="29px"
          alt="heart icon"
        />
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/contacts.png"
          height="29px"
          width="29px"
          alt="contacts icon"
        />
      </div>
    </div>
  );
};

export default SearchBar;
