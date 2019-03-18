import React, { Component } from "react";
import data from "./dummy-data";
import "./App.css";

import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }
  componentDidMount() {
    this.setState({ dummyData: data });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchBar />
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
