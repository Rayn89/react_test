import React from "react";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";

async function fetchPosts() {
  const { data } = await axios.get(
    "http://universities.hipolabs.com/search?country=United+States"
  );
  return data;
}

function App() {
  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);
  // first argument is a string to cache and track the query result
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="App">
      <h1>Posts</h1>
      {data.map((post, index) => {
        return <li key={index}>{post.title}</li>;
      })}
    </div>
  );
}

export default App;
