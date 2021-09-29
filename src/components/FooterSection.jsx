import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow";

export default class FooterSection extends Component {
  render() {
    return (
      <div>
        <h3>Section 4</h3>
        <button onClick={() => this.props.api.moveTo(1, 0)}>Move top</button>
      </div>
    );
  }
}
