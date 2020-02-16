import React, { Component } from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <Content className="Nav">
        {/*<a href='/'>
          Home
         </a>*/}
        <Link to="/">Home</Link>
        {/*<a href='/about'>
          About
        </a>*/}
        <Link to="/about">About</Link>
        {/*<a href='/workouts'>
          Workouts
      </a>*/}
        <Link to="/workouts">Workouts</Link>
      </Content>
    );
  }
}

/*====== Navigating without a pageload (#1) ======= */
//Right now our Nav component renders the following: Home, About, Workouts via a link
//When we click a elements for 'Home' and 'About' we are triggering a full page load
//Solution: We can improve this using the Link component with react-router-dom instead of a elements
//How to do this:
// Import Link component from react-router-dom
//We'll swap the a elements for Link elements
//Nav.js ===> App.js
