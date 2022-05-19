const LIKEUP = "LIKEUP";
const DISLIKE = "DISLIKE";
const SET_POSTS = "SET_POSTS";

let initialState = {
  posts: [
    {
      id: 1,
      title:
        "Название статьи про то какие могут быть название статей в этом месте #1",
      like: "false",
    },
    {
      id: 2,
      title:
        "Название статьи про то какие могут быть название статей в этом месте #2",
      like: "false",
    },
    {
      id: 3,
      title:
        "Название статьи про то какие могут быть название статей в этом месте #3",
      like: "true",
    },
    {
      id: 4,
      title:
        "Название статьи про то какие могут быть название статей в этом месте #4",
      like: "false",
    },
    {
      id: 5,
      title:
        "Название статьи про то какие могут быть название статей в этом месте #5",
      like: "true",
    },
    {
      id: 6,
      title:
        "Название статьи про то какие могут быть название статей в этом месте #6",
      like: "false",
    },
  ],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKEUP: {
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.id) {
            return { ...p, like: true };
          }
          return p;
        }),
      };
    }

    case DISLIKE: {
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.id) {
            return { ...p, like: false };
          }
          return p;
        }),
      };
    }

    case SET_POSTS: {
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
      };
    }

    default:
      return state;
  }
};

export const likeupAC = (postId) => ({ type: LIKEUP, postId });
export const dislikeAC = (postId) => ({ type: DISLIKE, postId });
export const setPostsAC = (posts) => ({ type: SET_POSTS, posts });

export default postsReducer;
