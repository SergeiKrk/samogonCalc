const SET_POSTS = "SET_POSTS";

let initialState = {
  posts: [],
  pageSize: 6,
  
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return { ...state, posts: action.posts };
    }
    default:
      return state;
  }
};

export const setPostsAC = (posts) => ({ type: SET_POSTS, posts });

export default postsReducer;
