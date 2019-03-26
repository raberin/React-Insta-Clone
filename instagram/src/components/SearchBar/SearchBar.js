import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <nav className="searchBarContainer">
      <div className="leftPart">
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/instagram-new.png"
          height="35px"
          width="35px"
          alt="instagram logo"
        />
        <div className="dash" />
        <img
          src="https://soundwave.co.uk/cms/resources/blog/top-tips-on-maximising-your-instagram-obsession-ndash-and-making-it-work-for-your-business-430.jpg"
          height="40px"
          width="120px"
          alt="instagram"
        />
      </div>

      <div className="centerPart">
        <form>
          <input
            className="searchBarInputField"
            type="text"
            name="search field"
            placeholder="Search"
            onChange={props.searchBarFilter}
          />
        </form>
      </div>

      <div className="rightPart">
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/compass.png"
          height="35px"
          width="35px"
          alt="compass icon"
        />
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/hearts.png"
          height="35px"
          width="35px"
          alt="heart icon"
        />
        <img
          className="searchIcons"
          src="https://img.icons8.com/windows/32/000000/contacts.png"
          height="35px"
          width="35px"
          alt="contacts icon"
        />
      </div>
    </nav>
  );
};

export default SearchBar;
