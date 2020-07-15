import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class Navigation extends Component {
  style = {
    divStyle: {
      textAlign: "center",
    },
  };
  render() {
    const btn = "btn-primary m-3";
    return (
      <Router>
        <div style={this.style.divStyle}>
          {/*<button className={btn} href="#">
              home
            </button>*/}
          <button className={btn} href="#">
            inventory
          </button>
          <button className={btn} href="#">
            sales
          </button>
          <button className={btn} href="#">
            about
          </button>
          <button className={btn} href="#">
            recipes
          </button>
          <button className={btn} href="#">
            invoices
          </button>
          <button className={btn} href="#">
            calendar
          </button>
          <button className={btn} href="#">
            todos
          </button>
          <button className={btn} href="#">
            API
          </button>
        </div>
      </Router>
    );
  }
}
