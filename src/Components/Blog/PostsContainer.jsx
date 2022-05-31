import Posts from "./Posts";
import { setPostsAC } from "../../redux/posts-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPosts: (posts) => {
      dispatch(setPostsAC(posts));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
