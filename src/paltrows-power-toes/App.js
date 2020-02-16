import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AboutPage from "../paltrows-power-toes/AboutPage";
import WorkoutsPage from "../paltrows-power-toes/WorkoutsPage";
import NotFoundPage from "../paltrows-power-toes/NotFoundPage";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          {/*<Header /> = the original way it was written*/}
          {/* <Route path='/' component={HomePage} /> = the reason why HomePage was populating with AboutPage */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/workouts" component={WorkoutsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

/*====== Adding the 1st two routes (#2) ===== */
//Our goal is to add our /home and /about paths to the application
//We can use the Route component that will render another component when a certain path is in the URL address
//How to do this:
//Import Route component, AboutPage
//We can add 2 route components, one for each route (/home & /about) = our paths & the component props will be the comps themselves
//Each route takes their own paths: '/' & '/about'
//Each route takes their own components: HomePage & AboutPage
//Problem:
//If we click on the About link in the webpage - it shows both the HomePage & AboutPage components together
//This is because the path with a prop of / is going to match for both web addresses
//Solution:
//We need to tell the Route component for the HomePage that we only want this component to show for exact components
//We can do this will the prop called exact
//App.js ===> Nav.js

/*========================================================== */

/*====== Adding the Workouts page (#1) ===== */
//Import the WorkoutsPage
//Add the Route component and paths + the component you want (WorkoutsPage) inside <Route>
//Now workouts should be working perfectly now

/*========================================================== */

/*========== Adding the Not Found page (#1) ========= */
//We need to configure a Route for components that don't exist (get mistyped)
//We don't know all the path someone might try & get wrong (we need a catch-all Route)
//How to do this:
// Import the NotFoundPage
//Wire it up with a Route that has no path
//Problem: It now renders all the time no matter what
//Solution: Switch Component - will render only one of its child Route components
//So we import Switch
// And wrap the Switch component around our routes
//Note:
//make sure the <Route component={NotFoundPage} /> is at the bottom of the list
//Or it will never let a component below it render
