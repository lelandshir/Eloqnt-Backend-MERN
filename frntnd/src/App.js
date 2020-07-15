import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";

export default class App extends Component {
  state = {
    liquor: [],
  };
  style = {
    padding: "30px",
    pStyle: { padding: "0", margin: "0" },
  };
  componentDidMount() {
    axios.get("http://localhost:8008/liquor").then((res) => {
      this.setState({
        liquor: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Navigation />

        {this.state.liquor.map((liquors, i) => {
          return (
            <div style={this.style} key={i}>
              <p style={this.pStyle}>
                <b>Liquor:</b> {liquors.brand} | <b>Type:</b> {liquors.type}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
