import React, { useState } from "react";
import "./App.css";
import AddPost from "./component/AddPost";
import PostList from "./component/PostList";
import Filter from "./component/Filter";
import gmcTodo from "../src/gmcTodo.png";
import logo2 from "../src/logo2.png"
function App() {
  const [filter, setFilter] = useState("All");
  return (
    <div className="App">
      <div className='logo-title'>
    
       <img
          width="100"
          height="80"
          src={gmcTodo}
          alt="add posts"
        />
      <h1 style={{ color: "#E50914" }}>
       
         TODO APP
      </h1>
      <img
          width="100"
          height="80"
          src={logo2}
          alt="add posts"
        />
      </div>
      <AddPost />
      <Filter setFilter={setFilter} filter={filter} />
      <PostList filter={filter} />
    </div>
  );
}

export default App;