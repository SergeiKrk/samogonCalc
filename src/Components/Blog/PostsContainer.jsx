import React from "react";
import Posts from "./Posts";
import { likeupAC, dislikeAC, setPostsAC } from "../../redux/posts-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    likeup: (postId) => {
      dispatch(likeupAC(postId));
    },
    dislike: (postId) => {
      dispatch(dislikeAC(postId));
    },
    setPosts: (posts) => {
      dispatch(setPostsAC(posts));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
