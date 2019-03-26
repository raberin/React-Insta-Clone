import React from "react";
import "./SearchBar.css";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  justify-content: space-between;
`;

export const LogoHeader = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

export const SearchBarDivCenter = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;

export const SearchBarDivRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  align-content: center;
  align-items: center;
`;

const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
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
      </LogoHeader>

      <SearchBarDivCenter>
        <form>
          <input
            className="searchBarInputField"
            type="text"
            name="search field"
            placeholder="Search"
            onChange={props.searchBarFilter}
          />
        </form>
      </SearchBarDivCenter>

      <SearchBarDivRight>
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
      </SearchBarDivRight>
    </Header>
  );
};

export default SearchBar;
