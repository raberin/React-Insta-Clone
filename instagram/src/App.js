import React, { Component } from "react";
import data from "./dummy-data";
import "./App.css";

import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: data
    };
  }
  render() {
    return (
      <div className="App container">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
