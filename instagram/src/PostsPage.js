import React, { Component } from "react";
import data from "./dummy-data";
import "./App.css";

import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filteredPost: [],
      searchBarClicked: false
    };
  }

  componentDidMount() {
    this.setState({ dummyData: data });
  }

  searchBarCssHandler = () => {
    this.setState(prevState => {
      if (prevState.searchBarClicked === false) {
        return { searchBarClicked: true };
      } else {
        return { searchBarClicked: !prevState.searchBarClicked };
      }
    });
  };

  searchBarFilter = event => {
    //Create a variable which filters the data and returns an
    //array with the filtered post
    let posts = this.state.dummyData.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    //Changes the state of filteredPost to the value created
    //from filter function
    return this.setState({ filteredPost: posts });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchBar
            searchBarCssHandler={this.searchBarCssHandler}
            searchBarClicked={this.state.searchBarClicked}
            searchBarFilter={this.searchBarFilter}
          />
          <PostContainer
            // If the filteredPost length is greater than 0
            //Use filteredPost arr over dummyData arr
            dummyData={
              this.state.filteredPost.length > 0
                ? this.state.filteredPost
                : this.state.dummyData
            }
            addLikeChangeHandler={this.addLikeChangeHandler}
          />
        </div>
      </div>
    );
  }
}

export default PostsPage;
