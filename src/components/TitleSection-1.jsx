import React, { Component } from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

export default class TitleSection extends Component {
  render() {
    return (
      <div id="title-area">
        <h1>Kevin M.Smith</h1>
        <h4>Web Dev, Design and Video & Comic Production</h4>
      </div>
    );
  }
}
