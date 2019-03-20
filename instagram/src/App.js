import React, { Component } from "react";
import data from "./dummy-data";
import "./App.css";

import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchBarClicked: false
    };
  }

  componentDidMount() {
    this.setState({ dummyData: data });
  }

  searchBarCssHandler = () => {
    this.setState(prevState => {
      if (prevState.searchBarClicked === false) {
        return { searchBarClicked: true };
      } else {
        return { searchBarClicked: !prevState.searchBarClicked };
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchBar
            searchBarCssHandler={this.searchBarCssHandler}
            searchBarClicked={this.state.searchBarClicked}
          />
          <PostContainer
            dummyData={this.state.dummyData}
            addLikeChangeHandler={this.addLikeChangeHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
