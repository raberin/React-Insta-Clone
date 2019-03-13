import React, { Component } from "react";
import "../../dummy-data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App container">
        <SearchBar />
        <PostContainer dummData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
