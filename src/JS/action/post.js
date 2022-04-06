import {
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    IS_DONE_POST,
  } from "../constant/post";
  
  //add new posts to the postList
  export const addPost = (newPost) => {
    return {
      type: ADD_POST,
      payload: newPost,
    };
  };
  
  //edit post content
  export const editPost = (id, title, content) => {
    return {
      type: EDIT_POST,
      payload: { id, title, content },
    };
  };
  
  //edit state action
  export const isDonePost = (id) => {
    return {
      type: IS_DONE_POST,
      payload: id,
    };
  };
  
  //delete action
  export const deletePost = (id) => {
    return {
      type: DELETE_POST,
      payload: id,
    };
  };