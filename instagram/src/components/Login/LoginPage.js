import React from "react";

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
  };

  render() {
    return (
      <div className="login-page">
        <form className="login-form" onSubmit={this.login}>
          Username:
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.inputChangeHandler}
          />
          Password:
          <input
            className="login-input"
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.inputChangeHandler}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
