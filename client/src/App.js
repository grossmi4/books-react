import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Navbar/>
    );
  }
}

export default App;
