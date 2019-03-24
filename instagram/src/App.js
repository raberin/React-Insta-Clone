import React, { Component } from "react";
import "./App.css";

import PostsPage from "./PostsPage";
import withAuthenticate from "./components/authentication/withAuthenticate/withAuthenticate";
import LoginPage from "./components/Login/LoginPage";

//If you look at withAuthenticate it uses two functions which uses LoginPage
//and PostsPage as parameters
//We're creating a variable that calls this function
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {/* We display the component depending on if we're logged in or not */}
          <ComponentFromWithAuthenticate />
        </div>
      </div>
    );
  }
}

export default App;
