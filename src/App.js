import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart/edit/:id" component={Form} />
            <Route path="/cart/" component={Form} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
