import React from "react";
import "./LoginPage.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  inputChangeHandler = event => {
    //The words between the [] is a "key" for objects which we set
    //To the event value which is the words types on username input
    this.setState({ [event.target.name]: event.target.value });
  };

  login = () => {
    //Sets the username on localStorage to whatever was submitted on the form
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password);
    window.location.reload();
  };

  render() {
    return (
      <div className="login-page container">
        <form className="login-form" onSubmit={this.login}>
          <h1 className="login-title">Flexgram</h1>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.inputChangeHandler}
          />
          <input
            className="login-input"
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.inputChangeHandler}
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
