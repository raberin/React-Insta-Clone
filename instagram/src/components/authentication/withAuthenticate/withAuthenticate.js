import React from "react";

const withAuthenticate = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <div>
          <Component />
        </div>
      );
    }
  };
};

export default withAuthenticate;
