import React from 'react'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function NavBar() {

  return (
    <div className="navbar">
      <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
    </div>
  );
}

export default NavBar;