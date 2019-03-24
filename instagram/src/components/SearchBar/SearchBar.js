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
        <div
          className={
            props.searchBarClicked
              ? "display-none searchBar"
              : "display-show searchBar"
          }
          onClick={props.searchBarCssHandler}
        >
          <img
            className="magnifyGlass"
            src="https://img.icons8.com/ios/32/000000/search-filled.png"
            height="10px"
            width="10px"
            alt="magnify glass"
          />
          Search
        </div>
        <form
          className={
            props.searchBarClicked
              ? "display-show searchBarInput"
              : "display-none"
          }
        >
          <input
            className="searchBarInputField"
            type="text"
            name="search field"
            onChange={props.searchBarFilter}
          />
          <p onClick={props.searchBarCssHandler}> x</p>
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
