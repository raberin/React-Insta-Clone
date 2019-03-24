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
      if (localStorage.length > 0) {
        console.log(`I found something in local storage`);
        this.setState({ loggedIn: true });
      } else {
        console.log(`i didnt find anything`);
        this.setState({ loggedIn: false });
      }
    }

    render() {
      console.log("HOC Rerender");
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
