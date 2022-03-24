import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import LazyLoad from "react-lazyload";
import axios from "axios";
import "../App.css";
// import pokemon from "pokemontcgsdk";

// pokemon.configure({ apiKey: process.env.REACT_APP_POKEMON_API_KEY });

async function fetchPosts() {
  const { data } = await axios.get(
    "https://api.pokemontcg.io/v2/cards?q=!set.series:Base%20set.name:base"
  );
  return data;
}

function CardFeed() {
  const{pokemons, setPokemons} = useState([])
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
          data.data.map((post, index) => {
            return (
              <li key={index} className="card-container">

                {post.name} 
                <LazyLoad height={100} once>
                    <img src={post.images.small} alt=""></img>
                </LazyLoad>
                <p>Average Price: ${post.cardmarket.prices.averageSellPrice}</p>
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default CardFeed;
