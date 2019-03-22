import React from "react";

const withAuthenticate = PostsPage => LoginPage => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      //Checks localStorage if there is a username stored
      //If there is, setState of loggedIn to true
      if (localStorage.getItem("username") === false) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    // componentDidMount() {
    //   if (!localStorage.getItem("username")) {
    //     this.setState({ loggedIn: false });
    //   } else {
    //     this.setState({ loggedIn: true });
    //   }
    // }

    render() {
      return (
        <div>
          {/* Checks if loggedIn is true or false depending on that
          it uses which component to return */}
          {this.state.loggedIn === false ? <LoginPage /> : <PostsPage />}
        </div>
      );
    }
  };
};

export default withAuthenticate;
