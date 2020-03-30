import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./controllers/Products";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./controllers/Header/Header";
const apiUrl = "http://builder.jtmorrisbytes.com:3001/api";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/home">
              <p>welcome to the home page</p>
            </Route>
            <Route path="/cart">
              <p>welcome to cart</p>
            </Route>
            <Route path="/products">
              <Products apiUrl={apiUrl} />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
