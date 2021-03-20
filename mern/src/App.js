import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Home from "./home";
import HomePage from "./homepage";
import Navbar from "./navbar";
import Customer from "./Customer";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Route exact path="/" component={Home}></Route>
        <section>
          <Switch className="padding">
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/homePage" component={HomePage}></Route>
            <Route exact path="/customer" component={Customer}></Route>
          </Switch>
        </section>
      </Fragment>
    </Router>
    // <Login />
  );
};

export default App;
