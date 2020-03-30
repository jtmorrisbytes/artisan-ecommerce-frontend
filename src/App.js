import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./controllers/Header/Header";
const apiUrl = "http://builder.jtmorrisbytes.com/api";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <p>welcome to the home page</p>
          </Route>
          <Route path="/cart">
            <p>welcome to cart</p>
          </Route>
          <Route path="/products">
            <p> welcome to product listing</p>
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
