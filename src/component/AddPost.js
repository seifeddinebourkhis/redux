import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../JS/action/post";
import AddIcon from "@material-ui/icons/Add";
import "./AddPost.css";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  return (
    <form className="container">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          title !== "" && content !== ""
            ? dispatch(
                addPost({ title: title, content: content, id: Math.random() })
              )
            : alert("Required fields!");
          setContent("");
          setTitle("");
        }}
        variant="contained"
        color="secondary"
        aria-label="add"
        size="small"
      >
        <AddIcon size="small" variant="contained"  />
      </button>
    </form>
  );
};

export default AddPost;