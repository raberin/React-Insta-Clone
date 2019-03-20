import React, { Component } from "react";
import "./App.css";

import PostsPage from "./PostsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <PostsPage />
        </div>
      </div>
    );
  }
}

export default App;
