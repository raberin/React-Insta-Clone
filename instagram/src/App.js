import React, { Component } from "react";
import "./App.css";

import PostsPage from "./PostsPage";
import withAuthenticate from "./components/authentication/withAuthenticate/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <ComponentFromWithAuthenticate />
        </div>
      </div>
    );
  }
}

export default App;
