import React, { Component } from "react";

export default class Header extends Component {
  title = "ELOQNT";
  style = {
    textAlign: "center",
    padding: "0",
  };
  render() {
    return (
      <div className="header" style={this.style}>
        <h1 style={this.style.h1}>{this.title}</h1>
        <p>manage your restaurant</p>
      </div>
    );
  }
}
