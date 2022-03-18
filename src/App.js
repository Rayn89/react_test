import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import React, {useEffect, useState, Fragment} from 'react'
import CardFeed from './components/mainCardFeed'

function App() {

  return (
    <Router>
      <Fragment>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Routes>
            <Route exact path="/" element={<CardFeed />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
