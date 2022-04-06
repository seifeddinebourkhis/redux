import {
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    IS_DONE_POST,
  } from "../constant/post";
  
  const initialState = {
    posts: [
      {
        id: Math.random(),
        title: "First Post",
        content: "This the first post",
        isDone: false,
      },
      {
        id: Math.random(),
        title: "Second Post",
        content: "This the second post",
        isDone: true,
      },
    ],
    show: false,
  };
  
  //pure function
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        return { ...state, posts: [...state.posts, action.payload] };
      case EDIT_POST:
        return {
          ...state,
          posts: state.posts.map((el) =>
            el.id === action.payload.id
              ? {
                  ...el,
                  title: action.payload.title,
                  content: action.payload.content,
                }
              : el
          ),
        };
      case IS_DONE_POST:
        return {
          ...state,
          posts: state.posts.map((el) =>
            el.id === action.payload
              ? {
                  ...el,
                  isDone: !el.isDone,
                }
              : el
          ),
        };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(({ id }) => id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  //export
  export default postReducer;