import "../App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

async function fetchPosts() {
  const { data } = await axios.get(
    "https://api.pokemontcg.io/v2/cards?q=set.series:base"
  );
  return data;
}

function CardFeed() {
  const [pokemoncards, setPokemonCards] = useState("");
  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="inner-container">
        {data &&
          data?.data.map((post, index) => {
            return (
              <li key={index} className="card-container">
                {post.name} <img src={post.images.small}></img>
                <p>${post.cardmarket.prices.averageSellPrice}</p>
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default CardFeed;
