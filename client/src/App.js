import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage"
import SavedPage from "./pages/SavedPage"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path ="/" component={SearchPage} />
            <Route exact path ="/search" component={SearchPage} />
            <Route exact path ="/saved" component={SavedPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
