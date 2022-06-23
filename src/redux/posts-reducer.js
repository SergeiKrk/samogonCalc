const SET_POSTS = "SET_POSTS";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
const SET_PER_PAGE = "SET_PER_PAGE";
const TOTAL_PAGE_COUNT = "TOTAL_PAGE_COUNT";

let initialState = {
  posts: [],
  isLoaded: false,
  pageNumber: 1,
  perPage: 3,
  totalPageCount: 12,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return { ...state, posts: action.posts };
    }
    case SET_PAGE_NUMBER: {
      return { ...state, pageNumber: action.pageNumber };
    }
    case SET_PER_PAGE: {
      return { ...state, perPage: [...state.perPage, ...action.perPage] };
    }
    default:
      return state;
  }
};

export const setPostsAC = (posts) => ({ type: SET_POSTS, posts });
export const setpageNumberAC = (pageNumber) => ({
  type: SET_PAGE_NUMBER,
  pageNumber,
});
export const setPerPageAC = (perPage) => ({ type: SET_PER_PAGE, perPage });
export const setTotalPageCountAC = (totalPageCount) => ({
  type: TOTAL_PAGE_COUNT,
  totalPageCount,
});

export default postsReducer;
