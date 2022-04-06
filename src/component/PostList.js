import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";
import "./PostList.css";

const PostList = ({ filter }) => {
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <>
      <div className="post-map">
        {filter === "All"
          ? posts.map((post) => <PostCard post={post} key={post.id} />)
          : filter === "Done"
          ? posts
              .filter((post) => post.isDone === true)
              .map((post) => <PostCard post={post} key={post.id} />)
          : posts
              .filter((post) => post.isDone === false)
              .map((post) => <PostCard post={post} key={post.id} />)}
      </div>
    </>
  );
};

export default PostList;