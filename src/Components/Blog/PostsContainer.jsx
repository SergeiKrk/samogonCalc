import Posts from "./Posts";
import {
  setPostsAC,
  setpageNumberAC,
  setPerPageAC,
  setTotalPageCountAC,
} from "../../redux/posts-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    pageNumber: state.postsPage.pageNumber,
    perPage: state.postsPage.perPage,
    totalPageCount: state.postsPage.totalPageCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPosts: (posts) => {
      dispatch(setPostsAC(posts));
    },
    setPageNumber: (pageNumber) => {
      dispatch(setpageNumberAC(pageNumber));
    },
    setPerPage: (perPage) => {
      dispatch(setPerPageAC(perPage));
    },
    setTotalPageCount: (totalPageCount) => {
      dispatch(setTotalPageCountAC(totalPageCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
